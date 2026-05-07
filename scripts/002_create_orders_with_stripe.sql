-- Drop existing table if it exists (for fresh start)
DROP TABLE IF EXISTS orders CASCADE;

-- Create orders table with Stripe integration
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_number TEXT NOT NULL UNIQUE,
  
  -- Customer information
  minecraft_username TEXT NOT NULL,
  email TEXT NOT NULL,
  discord_username TEXT,
  
  -- Stripe information
  stripe_checkout_session_id TEXT UNIQUE,
  stripe_payment_intent_id TEXT,
  stripe_customer_id TEXT,
  
  -- Order details
  payment_method TEXT NOT NULL DEFAULT 'stripe',
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'paid', 'fulfilled', 'cancelled', 'refunded')),
  total_amount DECIMAL(10, 2) NOT NULL,
  currency TEXT NOT NULL DEFAULT 'usd',
  items JSONB NOT NULL,
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  paid_at TIMESTAMP WITH TIME ZONE,
  fulfilled_at TIMESTAMP WITH TIME ZONE,
  
  -- Admin notes
  notes TEXT
);

-- Create indexes for faster lookups
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_minecraft_username ON orders(minecraft_username);
CREATE INDEX idx_orders_email ON orders(email);
CREATE INDEX idx_orders_created_at ON orders(created_at DESC);
CREATE INDEX idx_orders_stripe_session ON orders(stripe_checkout_session_id);
CREATE INDEX idx_orders_stripe_payment ON orders(stripe_payment_intent_id);

-- Enable Row Level Security
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Policy: Allow inserts for creating orders (checkout)
CREATE POLICY "Allow order creation" ON orders
  FOR INSERT
  WITH CHECK (true);

-- Policy: Allow reading orders (for admin and webhook)
CREATE POLICY "Allow order reading" ON orders
  FOR SELECT
  USING (true);

-- Policy: Allow updating orders (for webhook to mark as paid, admin to mark fulfilled)
CREATE POLICY "Allow order updates" ON orders
  FOR UPDATE
  USING (true);

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to auto-update updated_at
CREATE TRIGGER update_orders_updated_at
  BEFORE UPDATE ON orders
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

"use client"

import { HelpCircle } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How do I receive my items?",
    answer:
      "Items are delivered instantly after purchase! Simply enter your Minecraft username during checkout, and our automated system will deliver your items within seconds. Make sure you're online on our server to receive them.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and various cryptocurrency options. All payments are processed securely through our trusted payment partners.",
  },
  {
    question: "Can I get a refund?",
    answer:
      "Due to the digital nature of our products, we generally don't offer refunds once items are delivered. However, if you experience any issues with your purchase, please contact our support team and we'll work to resolve it.",
  },
  {
    question: "Are ranks permanent?",
    answer:
      "Yes! All ranks purchased from our store are permanent and will remain on your account forever. You'll keep all your perks even if you take a break from playing.",
  },
  {
    question: "What if I don't receive my items?",
    answer:
      "If you don't receive your items within 5 minutes of purchase, please check that you're online on the correct server and have enough inventory space. If issues persist, contact our support team with your order ID.",
  },
  {
    question: "Can I gift items to other players?",
    answer:
      "Absolutely! During checkout, you can enter any valid Minecraft username to send items as a gift. The recipient will receive the items instantly when they're online.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="scroll-mt-20 border-b border-border bg-card py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">
            <HelpCircle className="h-4 w-4" />
            <span>FAQ</span>
          </div>
          <h2 className="mb-3 text-3xl font-bold text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Got questions? We&apos;ve got answers. If you can&apos;t find what you&apos;re looking for, 
            feel free to contact our support team.
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border">
              <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

"use client"

import { Check } from "lucide-react"
import { Button } from "./ui/button"

const plans = [
  {
    name: "Starter",
    price: "99",
    period: "/month",
    description: "Perfect for individuals and small teams getting started",
    features: [
      "5 competitor lookups per day",
      "Basic technology stack detection",
      "Email notifications",
      "Basic reporting",
      "Single user account",
      "Community support",
      "API access (100 calls/day)",
      "Data export (CSV)"
    ],
    buttonText: "Start Free Trial",
    popular: false,
    highlight: "Free 14-day trial included"
  },
  {
    name: "Pro",
    price: "299",
    period: "/month",
    description: "For growing companies needing deeper insights",
    features: [
      "Unlimited competitor lookups",
      "Advanced technology detection",
      "Real-time monitoring",
      "Advanced analytics & reporting",
      "Up to 5 team members",
      "Priority support",
      "Full API access",
      "Custom alerts",
      "Export in all formats",
      "Historical data access"
    ],
    buttonText: "Get Started",
    popular: true,
    highlight: "Most popular choice"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations requiring maximum intelligence",
    features: [
      "Everything in Pro, plus:",
      "Unlimited team members",
      "Dedicated account manager",
      "Custom integrations",
      "Advanced API features",
      "24/7 priority support",
      "Custom reporting",
      "Training & onboarding",
      "SLA guarantee",
      "Custom contract terms"
    ],
    buttonText: "Contact Sales",
    popular: false,
    highlight: "Tailored to your needs"
  }
]

export function Pricing() {
  return (
    <div className="pricing-section">
      <div className="text-center mb-12">
        <h3 className="text-[#00C389] text-lg font-semibold mb-4">PRICING PLANS</h3>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Choose Your Plan</h2>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
          Start free and scale as you grow. All plans include core features with flexible options.
          Cancel anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {plans.map((plan) => (
          <div 
            key={plan.name}
            className={`pricing-card ${plan.popular ? 'popular' : ''}`}
          >
            <div className="pricing-card-content">
              {plan.popular && (
                <div className="popular-badge">Most Popular</div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="pricing-amount mb-2">
                {plan.price === "Custom" ? (
                  <span className="text-4xl font-bold">Custom</span>
                ) : (
                  <>
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </>
                )}
              </div>
              <p className="text-[#00C389] text-sm font-medium mb-4">{plan.highlight}</p>
              <p className="text-gray-300 mb-6">{plan.description}</p>
              <Button 
                className={`w-full mb-8 ${
                  plan.popular ? 'gradient-button' : 'outline-button'
                }`}
              >
                {plan.buttonText}
              </Button>
              <div className="space-y-4">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#00C389] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-400">
          All plans include a 14-day free trial. No credit card required.
          <br />
          Enterprise plans can be customized to your needs.
        </p>
      </div>
    </div>
  )
}

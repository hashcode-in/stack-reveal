import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { Nav } from "../components/nav"
import { Footer } from "../components/footer"
import { Code2, LineChart, Users, CheckCircle } from "lucide-react"
import { FeatureCard } from "../components/feature-card"
import { TechStackMockup, SalesStackMockup, MarketIntelMockup } from "../components/mockup"
import { Testimonials } from "../components/testimonials"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Nav />
      
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-4 py-32 relative overflow-hidden theme-charcoal">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1a3d3d_0%,#0B1C1C_100%)]"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-8 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <span className="text-[#00C389]">Unlock</span> Your Competitors&apos;<br />Digital DNA
          </h1>
          <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
            Turn technology insights into your competitive advantage. Discover the exact tools powering industry leaders and stay ahead of market trends with real-time intelligence.
          </p>
          <div className="flex w-full max-w-xl mx-auto gap-3 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Input
              placeholder="Reveal any company's tech stack (e.g., salesforce.com)"
              className="glass-input h-14"
            />
            <Button className="gradient-button h-14">
              Reveal Stack
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4 theme-green" id="features">
        <div className="max-w-7xl mx-auto">
          <div className="mb-2 inline-block max-h-8 text-[#00C389]">
            <div className="inline-flex items-center gap-x-3 text-sm font-bold uppercase tracking-wide">
              COMPETITIVE EDGE
            </div>
          </div>
          <h2 className="text-4xl font-bold text-center mb-16 animate-in fade-in slide-in-from-bottom-4">
            <span className="flex flex-wrap overflow-visible justify-center">
              <span className="tracking-[-0.1] first:capitalize">Your Secret Weapon</span>
              <span className="tracking-[-0.1] first:capitalize">&nbsp;for Market</span>
              <span className="tracking-[-0.1] first:capitalize">&nbsp;Domination</span>
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Code2}
              title="X-Ray Vision for Tech Stacks"
              description="See through the digital facade. Instantly reveal every framework, tool, and platform your competitors rely on to power their success."
            >
              <TechStackMockup />
            </FeatureCard>

            <FeatureCard
              icon={Users}
              title="Revenue Engine Insights"
              description="Decode your competitors' entire sales and marketing arsenal. From CRM to automation, understand the tools driving their growth."
            >
              <SalesStackMockup />
            </FeatureCard>

            <FeatureCard
              icon={LineChart}
              title="Market Pulse Monitor"
              description="Stay ahead of market shifts with real-time technology adoption trends. Spot opportunities before your competitors do."
            >
              <MarketIntelMockup />
            </FeatureCard>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4 theme-charcoal">
        <div className="container mx-auto max-w-7xl">
          <div className="relative grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-8">
            <div className="flex flex-col gap-5 sm:pr-14 md:pr-20 lg:pr-32">
              <h3 className="text-4xl font-bold">
                <span className="flex flex-wrap overflow-visible">
                  <span className="tracking-[-0.1] first:capitalize text-[#00C389]">Trusted</span>
                  <span className="tracking-[-0.1] first:capitalize">&nbsp;by Industry</span>
                  <span className="tracking-[-0.1] first:capitalize">&nbsp;Leaders</span>
                </span>
              </h3>
              <p className="text-xl text-gray-200 max-w-[40ch]">
                Join thousands of companies using StackReveal to decode their competition and drive strategic decisions.
              </p>
            </div>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-value">500M+</div>
                <div className="stat-label">Websites analyzed</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">99.9%</div>
                <div className="stat-label">Detection accuracy</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">100K+</div>
                <div className="stat-label">Technologies tracked</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">24/7</div>
                <div className="stat-label">Real-time monitoring</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">50M+</div>
                <div className="stat-label">Daily insights</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">1B+</div>
                <div className="stat-label">Data points analyzed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-card">
          <div className="relative z-10 flex flex-col gap-8">
            <h2 className="cta-title">
              <span className="cta-title-highlight">Ready</span>
              &nbsp;to Outmaneuver Your Competition?
            </h2>
            <ul className="flex flex-col flex-nowrap gap-4 text-base font-medium md:flex-row text-gray-200">
              <li className="cta-check-item">
                <CheckCircle className="w-5 h-5 text-[#00C389]" />
                14-day free access
              </li>
              <li className="cta-check-item">
                <CheckCircle className="w-5 h-5 text-[#00C389]" />
                Full feature set
              </li>
              <li className="cta-check-item">
                <CheckCircle className="w-5 h-5 text-[#00C389]" />
                No credit card needed
              </li>
            </ul>
            <div className="cta-buttons">
              <Button 
                className="gradient-button h-14 w-full sm:w-auto min-w-[200px]"
              >
                Get Started Free
              </Button>
              <Button 
                variant="outline"
                className="outline-button h-14 w-full sm:w-auto min-w-[200px]"
              >
                Book a Demo
              </Button>
            </div>
          </div>
          <div className="absolute right-0 top-0 z-0 w-[800px] h-[800px] text-[#00C389] opacity-5">
            <svg width="100%" height="100%" viewBox="0 0 716 719" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M357.936 0.224594L715.5 0.224578L715.5 359.289L536.782 538.757L358.064 718.225L0.500031 718.225L0.500016 359.16L179.218 179.692L357.936 0.224594Z" fill="url(#paint0_linear_3414_5205)" fillOpacity="1"></path>
              <defs>
                <linearGradient id="paint0_linear_3414_5205" x1="453.583" y1="-103.627" x2="139.18" y2="395.903" gradientUnits="userSpaceOnUse">
                  <stop stopColor="currentColor"></stop>
                  <stop offset="1" stopColor="currentColor" stopOpacity="0.5"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

import { Code, Users, LineChart } from "lucide-react"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { Mockup } from "../components/mockup"
import { FeatureCard } from "../components/feature-card"
import { Testimonials } from "../components/testimonials"
import { Footer } from "../components/footer"
import { Nav } from "../components/nav"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      
      {/* Hero Section */}
      <section className="hero-section relative pt-32 pb-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-gradient">Unlock</span> Your Competitors'
            <br />
            Digital DNA
          </h1>
          <p className="hero-subtitle text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Turn technology insights into your competitive advantage.
            Discover the exact tools powering industry leaders and stay ahead
            of market trends with real-time intelligence.
          </p>
          <div className="input-container flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <Input 
              className="glass-input flex-1 text-base"
              placeholder="Reveal any company's tech stack (e.g., salesforce.com)"
            />
            <Button className="gradient-button whitespace-nowrap">
              Reveal Stack
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 md:px-6 lg:px-8 theme-charcoal">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              COMPETITIVE EDGE
            </h2>
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Your Secret Weapon for Market Domination
            </p>
          </div>
          <div className="feature-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Code}
              title="X-Ray Vision for Tech Stacks"
              description="See through the digital facade. Instantly reveal every framework, tool, and platform your competitors use to power their success."
            >
              <Mockup type="tech-stack" />
            </FeatureCard>
            <FeatureCard
              icon={Users}
              title="Revenue Engine Insights"
              description="Decode your competitors' entire sales and marketing arsenal. From CRM to automation tools, uncover the tools driving their growth."
            >
              <Mockup type="sales-stack" />
            </FeatureCard>
            <FeatureCard
              icon={LineChart}
              title="Market Pulse Monitor"
              description="Stay ahead of market shifts with real-time technology adoption trends. Spot opportunities before your competitors do."
            >
              <Mockup type="market-intel" />
            </FeatureCard>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4 md:px-6 lg:px-8 theme-green">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#00C389]">
                Trusted
                <br />
                by Industry Leaders
              </h2>
              <p className="text-lg md:text-xl text-gray-200">
                Join thousands of companies using StackReveal to decode
                their competition and drive strategic decisions.
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
      <section className="py-24 px-4 md:px-6 lg:px-8 theme-charcoal">
        <div className="max-w-7xl mx-auto">
          <Testimonials />
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-card">
          <h2 className="cta-title text-center">
            Ready to <span className="cta-title-highlight">Outmaneuver</span> Your Competition?
          </h2>
          <div className="cta-buttons flex flex-col sm:flex-row justify-center gap-4">
            <Button className="gradient-button">Get Started Free</Button>
            <Button className="outline-button">Schedule Demo</Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

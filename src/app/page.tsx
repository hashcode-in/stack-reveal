import { Code, Users, LineChart } from "lucide-react"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { Mockup } from "../components/mockup"
import { FeatureCard } from "../components/feature-card"
import { Testimonials } from "../components/testimonials"
import { Pricing } from "../components/pricing"
import { Footer } from "../components/footer"
import { Nav } from "../components/nav"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0B1C1C] to-[#0B1C1C]/95">
      <Nav />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto container relative z-10 mt-header py-[5vh] md:py-[16vh]">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-gradient">Unlock</span> Your Competitors&apos;
            <br />
            Digital DNA
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Turn technology insights into your competitive advantage.
            Discover the exact tools powering industry leaders and stay ahead
            of market trends with real-time intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <div className="flex-1">
              <Input 
                className="hero-input w-full"
                placeholder="Reveal any company's tech stack (e.g., salesforce.com)"
              />
            </div>
            <Button className="gradient-button min-w-[200px] h-12">
              Reveal Stack
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-24 px-4 md:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00C389]/5 to-transparent opacity-30" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h3 className="text-[#00C389] text-lg font-semibold mb-4">COMPETITIVE EDGE</h3>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Secret Weapon for Market Domination</h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
              Gain unparalleled insights into your competitors&apos; technology choices
              and stay ahead in the digital arms race.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      <section className="relative py-24 px-4 md:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00C389]/5 to-transparent opacity-30" />
        <div className="max-w-7xl mx-auto relative">
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
      <section className="relative py-24 px-4 md:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00C389]/5 to-transparent opacity-30" />
        <div className="max-w-7xl mx-auto relative">
          <Testimonials />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative py-24 px-4 md:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00C389]/5 to-transparent opacity-30" />
        <div className="max-w-7xl mx-auto relative">
          <Pricing />
        </div>
      </section>

      

      <Footer />
    </main>
  )
}

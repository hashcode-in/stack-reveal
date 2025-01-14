'use client'

import { Code, Users, LineChart } from "lucide-react"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { Mockup } from "../components/mockup"
import { FeatureCard } from "../components/feature-card"
import { Testimonials } from "../components/testimonials"
import { Pricing } from "../components/pricing"
import { Footer } from "../components/footer"
import { Nav } from "../components/nav"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { useEffect, useState } from "react"

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const SectionWrapper = ({ children, className = "", id }: SectionWrapperProps) => (
  <motion.section
    id={id}
    className={className}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    {children}
  </motion.section>
)

function ClientHome() {
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 400])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 600])
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const words = ['tech', 'sales', 'marketing']
    let timeout1: NodeJS.Timeout
    let timeout2: NodeJS.Timeout
    const currentWord = words[currentWordIndex]
    
    if (isDeleting) {
      // Backspace effect
      timeout1 = setTimeout(() => {
        setDisplayText(currentWord.substring(0, displayText.length - 1))
      }, 50)
      
      if (displayText.length === 0) {
        timeout2 = setTimeout(() => {
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
        }, 500) // Add slight delay before typing next word
      }
    } else {
      // Typing effect
      timeout1 = setTimeout(() => {
        setDisplayText(currentWord.substring(0, displayText.length + 1))
      }, 50)
      
      if (displayText === currentWord) {
        timeout2 = setTimeout(() => {
          setIsDeleting(true)
        }, 3000) // Pause before backspacing
      }
    }

    return () => {
      clearTimeout(timeout1)
      clearTimeout(timeout2)
    }
  }, [displayText, isDeleting, currentWordIndex])

  return (
    <motion.main 
      className="min-h-screen bg-gradient-to-b from-[#0B1C1C] to-[#0B1C1C]/95"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      <Nav />
      
      {/* Hero Section */}
      <SectionWrapper className="relative pt-32 pb-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto container relative z-10 mt-header py-[5vh] md:py-[16vh]">
        <div className="text-center space-y-8 max-w-3xl mx-auto md:py-[16vh]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-gradient">Unlock</span> Your Competitors&apos;
              <br />
              Digital DNA
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
          >
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              Get the exact{' '}
              <span className="relative inline-block">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWordIndex}
                    className="text-gradient relative font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {displayText}
                    <motion.span
                      className="ml-1 inline-block w-[2px] h-6 bg-current"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ repeat: Infinity, duration: 1 }}
                    />
                  </motion.span>
                </AnimatePresence>
              </span>
              stack of your competitors and leads and stay ahead with real-time market intelligence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeInOut" }}
          >
            <div className="flex flex-col sm:flex-row gap-4 max-w-3xl mx-auto">
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
          </motion.div>
        </div>
        <div className="hero-gradient">
          <motion.div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px]"
            style={{ y: y1 }}
          >
            <div className="hero-gradient-primary absolute inset-0 bg-gradient-radial from-[#00C389]/20 via-[#00C389]/5 to-transparent" />
          </motion.div>
          <motion.div 
            className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px]"
            style={{ y: y2 }}
          >
            <div className="hero-gradient-secondary absolute inset-0 bg-gradient-radial from-[#00C389]/10 via-[#00C389]/5 to-transparent" />
          </motion.div>
          <motion.div 
            className="absolute top-1/4 -right-1/4 w-[600px] h-[600px]"
            style={{ y: y3 }}
          >
            <div className="hero-gradient-tertiary absolute inset-0 bg-gradient-radial from-[#00C389]/15 via-[#00C389]/5 to-transparent" />
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Features Section */}
      <SectionWrapper id="features" className="relative py-24 px-4 md:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00C389]/5 to-transparent opacity-30" />
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <h3 className="text-[#00C389] text-lg font-semibold mb-4">COMPETITIVE EDGE</h3>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Secret Weapon for Market Domination</h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
              Gain unparalleled insights into your competitors&apos; technology choices
              and stay ahead in the digital arms race.
            </p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
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
            </motion.div>
        </div>
      </SectionWrapper>

      {/* Stats Section */}
      <SectionWrapper className="relative py-24 px-4 md:px-6 lg:px-8">
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
      </SectionWrapper>

      {/* Testimonials Section */}
      <SectionWrapper className="relative py-24 px-4 md:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00C389]/5 to-transparent opacity-30" />
        <div className="max-w-7xl mx-auto relative">
          <Testimonials />
        </div>
      </SectionWrapper>

      {/* Pricing Section */}
      <SectionWrapper id="pricing" className="relative py-24 px-4 md:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00C389]/5 to-transparent opacity-30" />
        <div className="max-w-7xl mx-auto relative">
          <Pricing />
        </div>
      </SectionWrapper>

      <Footer />
    </motion.main>
  )
}

export default function Home() {
  return <ClientHome />
}

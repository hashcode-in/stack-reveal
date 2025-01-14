import Link from "next/link"
import { Button } from "./ui/button"

export function Nav() {
  return (
    <nav className="glass-nav">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center text-2xl font-bold">
            <span className="text-white">Stack</span>
            <span className="text-[#00C389]">Reveal</span>
          </Link>
          <div className="hidden md:flex items-right gap-8">
            <Link href="#features" className="text-gray-200 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="text-gray-200 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="#about" className="text-gray-200 hover:text-white transition-colors">
              About
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-gray-200 hover:text-white">
              Sign in
            </Button>
            <Button className="gradient-button">
              Get started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

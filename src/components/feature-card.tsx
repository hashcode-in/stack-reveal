import { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  children?: React.ReactNode
}

export function FeatureCard({ icon: Icon, title, description, children }: FeatureCardProps) {
  return (
    <div className="feature-card group">
      <div className="feature-card-content">
        <div className="feature-icon-wrapper">
          <div className="feature-icon-bg group-hover:rotate-45 group-hover:scale-110" />
          <Icon className="feature-icon group-hover:scale-110" />
        </div>
        <h3 className="feature-card-title">
          {title}
        </h3>
        <p className="feature-card-description">
          {description}
        </p>
      </div>
      <div className="feature-card-image">
        {children}
      </div>
    </div>
  )
}

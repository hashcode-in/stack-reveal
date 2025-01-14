import { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  children?: React.ReactNode
}

export function FeatureCard({ icon: Icon, title, description, children }: FeatureCardProps) {
  return (
    <div className="feature-card">
      <div className="feature-card-content">
        <div className="feature-icon-wrapper">
          <div className="feature-icon-bg"></div>
          <Icon className="feature-icon" />
        </div>
        <h3 className="feature-card-title">{title}</h3>
        <p className="feature-card-description text-gray-200 leading-relaxed">
          {description}
        </p>
      </div>
      <div className="feature-card-image">
        {children}
      </div>
    </div>
  )
}

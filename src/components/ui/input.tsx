import * as React from "react"
import { cn } from "../../lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, label, ...props }, ref) => {
    const isHeroInput = className?.includes('hero-input')

    return (
      <div className="relative w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-200 mb-1">
            {label}
          </label>
        )}
        <input
          type={type}
          className={cn(
            "flex h-12 w-full rounded-xl px-4 py-2 text-lg transition-all duration-200",
            isHeroInput ? 
              "bg-white text-gray-900 placeholder:text-gray-500 border border-white/20 hover:border-[#00C389]/50 focus:border-[#00C389]" :
              "bg-[#0B1C1C]/40 text-white placeholder:text-gray-400 border border-white/10 hover:border-white/20",
            "focus:outline-none focus:ring-2 focus:ring-[#00C389]/20",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-red-500">
            {error}
          </p>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }

interface MockupProps {
  type: "tech-stack" | "sales-stack" | "market-intel"
}

export function Mockup({ type }: MockupProps) {
  const mockupTitle = {
    "tech-stack": "Technology Stack Analysis",
    "sales-stack": "Sales Stack Insights",
    "market-intel": "Market Intelligence Dashboard"
  }[type]

  return (
    <div className="mockup-window">
      <div className="mockup-titlebar">
        <div className="mockup-buttons">
          <div className="mockup-button close">
            <div className="mockup-button-inner" />
          </div>
          <div className="mockup-button minimize">
            <div className="mockup-button-inner" />
          </div>
          <div className="mockup-button maximize">
            <div className="mockup-button-inner" />
          </div>
        </div>
        <div className="mockup-title">{mockupTitle}</div>
      </div>
      <div className="mockup-content">
        {type === "tech-stack" && (
          <div className="space-y-3">
            <div className="h-4 w-3/4 bg-white/5 rounded animate-pulse" />
            <div className="h-4 w-1/2 bg-white/5 rounded animate-pulse" />
            <div className="h-4 w-2/3 bg-white/5 rounded animate-pulse" />
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="h-20 bg-[#00C389]/5 rounded-lg border border-[#00C389]/10" />
              <div className="h-20 bg-white/5 rounded-lg border border-white/10" />
              <div className="h-20 bg-white/5 rounded-lg border border-white/10" />
              <div className="h-20 bg-[#00C389]/5 rounded-lg border border-[#00C389]/10" />
            </div>
          </div>
        )}
        {type === "sales-stack" && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-[#00C389]/10" />
              <div className="space-y-2 flex-1">
                <div className="h-3 w-1/3 bg-white/5 rounded animate-pulse" />
                <div className="h-3 w-1/2 bg-white/5 rounded animate-pulse" />
              </div>
            </div>
            <div className="h-24 bg-white/5 rounded-lg border border-white/10" />
            <div className="grid grid-cols-3 gap-2">
              <div className="h-12 bg-[#00C389]/5 rounded border border-[#00C389]/10" />
              <div className="h-12 bg-white/5 rounded border border-white/10" />
              <div className="h-12 bg-[#00C389]/5 rounded border border-[#00C389]/10" />
            </div>
          </div>
        )}
        {type === "market-intel" && (
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-1 h-32 bg-gradient-to-b from-[#00C389]/10 to-transparent rounded-lg border border-[#00C389]/10" />
              <div className="flex-1 h-32 bg-gradient-to-b from-white/5 to-transparent rounded-lg border border-white/10" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="h-16 bg-white/5 rounded border border-white/10" />
              <div className="h-16 bg-[#00C389]/5 rounded border border-[#00C389]/10" />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

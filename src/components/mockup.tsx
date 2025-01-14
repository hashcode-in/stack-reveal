interface MockupProps {
  title: string;
  children: React.ReactNode;
}

export function Mockup({ title, children }: MockupProps) {
  return (
    <div className="mockup-window">
      <div className="mockup-titlebar">
        <div className="mockup-buttons">
          <div className="mockup-button close">
            <div className="mockup-button-inner"></div>
          </div>
          <div className="mockup-button minimize">
            <div className="mockup-button-inner"></div>
          </div>
          <div className="mockup-button maximize">
            <div className="mockup-button-inner"></div>
          </div>
        </div>
        <div className="mockup-title">{title}</div>
      </div>
      <div className="mockup-content">
        {children}
      </div>
    </div>
  )
}

export function TechStackMockup() {
  return (
    <Mockup title="Tech Stack Analysis">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="h-6 w-32 bg-[#4FFFA6]/20 rounded"></div>
          <div className="h-6 w-24 bg-[#4FFFA6]/10 rounded"></div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-2">
            <div className="h-4 w-full bg-[#4FFFA6]/20 rounded"></div>
            <div className="h-4 w-3/4 bg-[#4FFFA6]/10 rounded"></div>
            <div className="h-4 w-5/6 bg-[#4FFFA6]/15 rounded"></div>
          </div>
          <div className="space-y-2">
            <div className="h-4 w-full bg-[#4FFFA6]/15 rounded"></div>
            <div className="h-4 w-4/5 bg-[#4FFFA6]/20 rounded"></div>
            <div className="h-4 w-3/4 bg-[#4FFFA6]/10 rounded"></div>
          </div>
          <div className="space-y-2">
            <div className="h-4 w-5/6 bg-[#4FFFA6]/10 rounded"></div>
            <div className="h-4 w-full bg-[#4FFFA6]/15 rounded"></div>
            <div className="h-4 w-4/5 bg-[#4FFFA6]/20 rounded"></div>
          </div>
        </div>
      </div>
    </Mockup>
  )
}

export function SalesStackMockup() {
  return (
    <Mockup title="Sales Stack Discovery">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="h-6 w-40 bg-[#4FFFA6]/20 rounded"></div>
          <div className="h-6 w-20 bg-[#4FFFA6]/10 rounded"></div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="h-8 bg-[#4FFFA6]/20 rounded"></div>
            <div className="h-8 bg-[#4FFFA6]/15 rounded"></div>
            <div className="h-8 bg-[#4FFFA6]/10 rounded"></div>
          </div>
          <div className="space-y-2">
            <div className="h-4 w-full bg-[#4FFFA6]/10 rounded"></div>
            <div className="h-4 w-4/5 bg-[#4FFFA6]/15 rounded"></div>
            <div className="h-4 w-3/4 bg-[#4FFFA6]/20 rounded"></div>
            <div className="h-4 w-5/6 bg-[#4FFFA6]/15 rounded"></div>
          </div>
        </div>
      </div>
    </Mockup>
  )
}

export function MarketIntelMockup() {
  return (
    <Mockup title="Market Intelligence">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="h-6 w-36 bg-[#4FFFA6]/20 rounded"></div>
          <div className="h-6 w-28 bg-[#4FFFA6]/10 rounded"></div>
        </div>
        <div className="h-32 bg-[#4FFFA6]/5 rounded relative">
          <div className="absolute inset-0 flex items-end px-4 pb-4">
            <div className="w-1/6 h-1/3 bg-[#4FFFA6]/20 rounded-t"></div>
            <div className="w-1/6 h-1/2 bg-[#4FFFA6]/15 rounded-t ml-4"></div>
            <div className="w-1/6 h-2/3 bg-[#4FFFA6]/20 rounded-t ml-4"></div>
            <div className="w-1/6 h-3/4 bg-[#4FFFA6]/15 rounded-t ml-4"></div>
            <div className="w-1/6 h-5/6 bg-[#4FFFA6]/20 rounded-t ml-4"></div>
          </div>
        </div>
      </div>
    </Mockup>
  )
}

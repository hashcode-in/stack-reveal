import React from 'react'

export interface MockupProps {
  type: 'tech-stack' | 'sales-stack' | 'market-intel';
}

export function Mockup({ type }: MockupProps) {
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
        <div className="mockup-title">
          {type === 'tech-stack' && 'Tech Stack Analysis'}
          {type === 'sales-stack' && 'Sales Stack Discovery'}
          {type === 'market-intel' && 'Market Intelligence'}
        </div>
      </div>
      <div className="mockup-content">
        {type === 'tech-stack' && (
          <div className="space-y-4">
            <div className="h-4 w-3/4 bg-[#0B1C1C] rounded" />
            <div className="h-4 w-1/2 bg-[#0B1C1C] rounded" />
            <div className="grid grid-cols-3 gap-2">
              <div className="h-8 bg-[#0B1C1C] rounded" />
              <div className="h-8 bg-[#0B1C1C] rounded" />
              <div className="h-8 bg-[#0B1C1C] rounded" />
            </div>
          </div>
        )}
        {type === 'sales-stack' && (
          <div className="space-y-4">
            <div className="h-4 w-2/3 bg-[#0B1C1C] rounded" />
            <div className="h-12 bg-[#0B1C1C] rounded" />
            <div className="grid grid-cols-2 gap-2">
              <div className="h-8 bg-[#0B1C1C] rounded" />
              <div className="h-8 bg-[#0B1C1C] rounded" />
            </div>
          </div>
        )}
        {type === 'market-intel' && (
          <div className="space-y-4">
            <div className="h-4 w-full bg-[#0B1C1C] rounded" />
            <div className="h-24 bg-[#0B1C1C] rounded" />
            <div className="h-4 w-1/2 bg-[#0B1C1C] rounded" />
          </div>
        )}
      </div>
    </div>
  )
}

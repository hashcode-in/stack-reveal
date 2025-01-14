export function Testimonials() {
  return (
    <section className="py-24 px-4 theme-charcoal relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="mb-2 inline-block text-[#00C389]">
            SUCCESS STORIES
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            See how companies are gaining competitive advantages with
            StackReveal&apos;s technology intelligence platform.
          </p>
        </div>
        <div className="testimonials-container">
          <div className="testimonials-track">
            {/* First Set */}
            <div className="testimonial-card min-w-[400px]">
              <div className="testimonial-content">
                <p className="testimonial-quote">
                  &ldquo;StackReveal transformed our competitive analysis. We discovered our main competitor was using an outdated tech stack, which helped us win several enterprise deals by highlighting our modern infrastructure.&rdquo;
                </p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    <span className="text-lg">JD</span>
                  </div>
                  <div className="testimonial-info">
                    <div className="testimonial-name">James Davidson</div>
                    <div className="testimonial-role">VP of Sales</div>
                    <div className="testimonial-company">CloudPeak</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="testimonial-card min-w-[400px]">
              <div className="testimonial-content">
                <p className="testimonial-quote">
                  &ldquo;The real-time alerts are a game-changer. We were able to spot a competitor&apos;s infrastructure upgrade within hours and adjust our strategy accordingly. This tool pays for itself.&rdquo;
                </p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    <span className="text-lg">SL</span>
                  </div>
                  <div className="testimonial-info">
                    <div className="testimonial-name">Sarah Lee</div>
                    <div className="testimonial-role">CTO</div>
                    <div className="testimonial-company">Innovate.ai</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="testimonial-card min-w-[400px]">
              <div className="testimonial-content">
                <p className="testimonial-quote">
                  &ldquo;We&apos;ve increased our win rate by 40% since using StackReveal. Understanding our competitors&apos; tech stacks helps us position our solutions more effectively.&rdquo;
                </p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    <span className="text-lg">MR</span>
                  </div>
                  <div className="testimonial-info">
                    <div className="testimonial-name">Mike Rodriguez</div>
                    <div className="testimonial-role">Head of Sales</div>
                    <div className="testimonial-company">TechForce</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Duplicate Set for Infinite Scroll */}
            <div className="testimonial-card min-w-[400px]">
              <div className="testimonial-content">
                <p className="testimonial-quote">
                  &ldquo;StackReveal transformed our competitive analysis. We discovered our main competitor was using an outdated tech stack, which helped us win several enterprise deals by highlighting our modern infrastructure.&rdquo;
                </p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    <span className="text-lg">JD</span>
                  </div>
                  <div className="testimonial-info">
                    <div className="testimonial-name">James Davidson</div>
                    <div className="testimonial-role">VP of Sales</div>
                    <div className="testimonial-company">CloudPeak</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="testimonial-card min-w-[400px]">
              <div className="testimonial-content">
                <p className="testimonial-quote">
                  &ldquo;The real-time alerts are a game-changer. We were able to spot a competitor&apos;s infrastructure upgrade within hours and adjust our strategy accordingly. This tool pays for itself.&rdquo;
                </p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    <span className="text-lg">SL</span>
                  </div>
                  <div className="testimonial-info">
                    <div className="testimonial-name">Sarah Lee</div>
                    <div className="testimonial-role">CTO</div>
                    <div className="testimonial-company">Innovate.ai</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="testimonial-card min-w-[400px]">
              <div className="testimonial-content">
                <p className="testimonial-quote">
                  &ldquo;We&apos;ve increased our win rate by 40% since using StackReveal. Understanding our competitors&apos; tech stacks helps us position our solutions more effectively.&rdquo;
                </p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    <span className="text-lg">MR</span>
                  </div>
                  <div className="testimonial-info">
                    <div className="testimonial-name">Mike Rodriguez</div>
                    <div className="testimonial-role">Head of Sales</div>
                    <div className="testimonial-company">TechForce</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add padding at the bottom for CTA overlap */}
      <div className="h-32"></div>
    </section>
  )
}

'use client';

import { SectionHeader } from '@/components/home/section-header';
import { FlickeringGrid } from '@/components/home/ui/flickering-grid';
import { Globe } from '@/components/home/ui/globe';
import { motion } from 'motion/react';
import Link from 'next/link';

export function OpenSourceSection() {
  const items = [
    {
      id: 1,
      content: (
        <div className="relative flex size-full items-center justify-center overflow-hidden transition-all duration-300">
          {/* Simplified placeholder for the original masked SVG visual */}
          <div className="w-56 h-56 rounded-full bg-accent/20 flex items-center justify-center">
            <span className="text-sm font-medium">Visual 1</span>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="size-full absolute inset-0"
          >
            <FlickeringGrid className="size-full" gridGap={4} squareSize={2} maxOpacity={0.5} />
          </motion.div>
        </div>
      ),
      title: 'Built for Australian Businesses',
      description: '',
      showGitHubInfo: true,
    },
    {
      id: 2,
      content: (
        <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden -translate-y-20">
          <Globe className="top-28" />
        </div>
      ),
      title: 'Your Business, Your Rules',
      description:
        'No vendor lock-in means you stay in control. Perfect for Australian businesses who want flexibility without ongoing licensing costs.',
      showFeatures: true,
    },
  ];

  return (
    <section id="open-source" className="flex flex-col items-center justify-center w-full relative">
      <div className="relative w-full px-6">
        <div className="max-w-6xl mx-auto border-l border-r border-border">
          {/* Section Header */}
          <SectionHeader>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance">
              Built for Australian Businesses
            </h2>
            <p className="text-muted-foreground text-center text-balance font-medium">
              Open source means transparency, reliability, and the flexibility Australian businesses need to grow.
            </p>
          </SectionHeader>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-x md:divide-y-0 border-t">
            {items.map((item) => (
              <div key={item.id} className="flex flex-col items-start justify-end gap-2 p-6 min-h-[320px]">
                {item.content}

                {item.showGitHubInfo && (
                  <div className="flex flex-col gap-4 mb-4">
                    <div className="flex items-center gap-2 text-primary font-medium">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      <span>dimatic-ai/texo</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-secondary/10 border-secondary/20 text-secondary">
                        TypeScript
                      </span>
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-secondary/10 border-secondary/20 text-secondary">
                        Python
                      </span>
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-secondary/10 border-secondary/20 text-secondary">
                        Apache 2.0 License
                      </span>
                    </div>
                  </div>
                )}

                <div className="mt-4">
                  {item.showFeatures && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-start gap-3">
                        <div className="rounded-full bg-secondary/10 p-2 mt-0.5">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                            <path d="M9.75 12.75L11.25 14.25L14.25 9.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C16.0041 4.75 19.25 7.99594 19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium">Business Confidence</h4>
                          <p className="text-muted-foreground text-sm">Open source transparency</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="rounded-full bg-secondary/10 p-2 mt-0.5">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                            <path d="M9.75 12.75L11.25 14.25L14.25 9.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C16.0041 4.75 19.25 7.99594 19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium">Growing Australian Community</h4>
                          <p className="text-muted-foreground text-sm">Local support and expertise</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="rounded-full bg-secondary/10 p-2 mt-0.5">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                            <path d="M9.75 12.75L11.25 14.25L14.25 9.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C16.0041 4.75 19.25 7.99594 19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium">No Surprise Costs</h4>
                          <p className="text-muted-foreground text-sm">Clear upfront pricing</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <h3 className="text-lg tracking-tighter font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { SectionHeader } from '@/components/home/section-header';
import { SocialProofTestimonials } from '@/components/home/testimonial-scroll';
import { siteConfig } from '@/lib/home';

export function TestimonialSection() {
  const { testimonials } = siteConfig;

  return (
    <section
      id="testimonials"
      className="flex flex-col items-center justify-center w-full"
    >
      <div className="w-full px-6">
      <SectionHeader>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance">
          Join Thousands of Smart Business Owners
        </h2>
        <p className="text-muted-foreground text-center text-balance font-medium">
          Australian businesses are already using Texo to work smarter, not harder. See what they're saying.
        </p>
      </SectionHeader>
      <SocialProofTestimonials testimonials={testimonials} />
      </div>
    </section>
  );
}

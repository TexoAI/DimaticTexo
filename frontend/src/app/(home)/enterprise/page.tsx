'use client';

import { useState } from 'react';
import { SectionHeader } from '@/components/home/section-header';
import { FooterSection } from '@/components/home/sections/footer-section';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Check, 
  MessageSquare, 
  Shield, 
  Users, 
  Zap,
  Star,
  Calendar,
  Search,
  Database,
  TrendingUp,
  Sparkles,
  Brain,
  FileText,
  Lock
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { KortixEnterpriseModal } from '@/components/sidebar/kortix-enterprise-modal';
import { KortixLogo } from '@/components/sidebar/kortix-logo';

// Hero Section Component
const CustomHeroSection = () => {
  return (
    <section className="w-full relative overflow-hidden">
      <div className="relative flex flex-col items-center w-full px-6">
        <div className="relative z-10 pt-32 mx-auto h-full w-full max-w-6xl flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-6 pt-12 max-w-4xl mx-auto">
            {/* Kortix Logo */}
            <div className="mb-8">
              <KortixLogo size={48} />
            </div>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
              <MessageSquare className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Introducing Codex</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tighter text-balance text-center">
              <span className="text-primary">Your Business Knowledge.</span>
              <br />
              <span className="text-secondary">At Your Fingertips.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-center text-muted-foreground font-medium text-balance leading-relaxed tracking-tight max-w-3xl">
              Imagine having your best employee available 24/7 to answer any question about your business. Codex turns years of company knowledge into instant, intelligent responses that help your team work smarter and faster.
            </p>
            
            <div className="flex flex-col items-center gap-6 pt-6">
              <KortixEnterpriseModal>
                <Button size="lg">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Codex Demo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </KortixEnterpriseModal>
              <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Free consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>See immediate results</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>No upfront commitment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-16 sm:mt-32 mx-auto"></div>
      </div>
    </section>
  );
};

// Value Proposition Section
const ValuePropSection = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full relative">
      <div className="relative w-full px-6">
        <div className="max-w-6xl mx-auto border-l border-r border-border">
          <SectionHeader>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">
              Why Australian Businesses Love Codex
            </h2>
            <p className="text-muted-foreground text-center text-balance font-medium">
              Smart business owners are already using Codex to save time, reduce costs, and delight their customers.
            </p>
          </SectionHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-border">
            <div className="p-8 border-r border-border">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Search className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Cut Support Costs by 60%</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Your customers get instant, accurate answers to their questions, day or night. No more expensive call centres or frustrated customers waiting for responses. Just happy customers and lower operational costs.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Scale Without Growing Headcount</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Handle more customers, more questions, and more complexity without hiring additional staff. Codex works around the clock, doesn't take sick days, and never forgets important information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Features Section
const FeaturesSection = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Turn Documents into Gold",
      description: "All those policies, procedures, and training manuals gathering digital dust? Codex transforms them into your most valuable business asset. Every document becomes instantly searchable and actionable.",
      category: "Business Value"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Chat Like a Human, Think Like a Computer", 
      description: "No training required. Your team simply asks questions in plain English and gets expert-level answers instantly. It's like having your most knowledgeable employee available 24/7.",
      category: "Easy to Use"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Control Who Knows What",
      description: "Different departments need different information. Codex ensures everyone gets exactly what they need to know, when they need to know it, without overwhelming them with irrelevant details.",
      category: "Smart Access"
    }
  ];

  return (
    <section className="flex flex-col items-center justify-center w-full relative">
      <div className="relative w-full px-6">
        <div className="max-w-6xl mx-auto border-l border-r border-border">
          <SectionHeader>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">
              What Makes Codex Special
            </h2>
            <p className="text-muted-foreground text-center text-balance font-medium">
              Three game-changing features that will transform how your business operates
            </p>
          </SectionHeader>

          <div className="border-t border-border">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`flex flex-col md:flex-row gap-8 p-8 ${index !== features.length - 1 ? 'border-b border-border' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary border border-primary/20">
                    {feature.icon}
                  </div>
                </div>
                
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <span className="px-3 py-1 text-xs font-medium bg-secondary/10 text-secondary rounded-full">
                      {feature.category}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Use Cases Section
const UseCasesSection = () => {
  const useCases = [
    "New starters become productive in days, not weeks, with instant access to everything they need to know",
    "Customer service teams resolve issues faster, leading to happier customers and higher satisfaction scores",
    "Sales teams access product knowledge instantly, closing deals with confidence and accuracy", 
    "HR teams provide consistent policy guidance, reducing compliance risks and employee confusion",
    "Management teams make informed decisions with instant access to company procedures and best practices",
    "Training becomes self-service, reducing costs while improving knowledge retention across your organisation"
  ];

  return (
    <section className="flex flex-col items-center justify-center w-full relative">
      <div className="relative w-full px-6">
        <div className="max-w-6xl mx-auto border-l border-r border-border">
          <SectionHeader>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">
              Success Across Every Department
            </h2>
            <p className="text-muted-foreground text-center text-balance font-medium">
              From the front desk to the corner office, Codex delivers value where it matters most
            </p>
          </SectionHeader>

          <div className="border-t border-border p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg hover:bg-accent/20 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <p className="text-sm font-medium leading-relaxed">{useCase}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Success Stories Section
const SuccessStoriesSection = () => {
  const stories = [
    {
      quote: "We went from spending 3 hours a day answering the same customer questions to having Codex handle 90% of inquiries automatically. Our team can now focus on growing the business instead of repeating themselves.",
      author: "Sarah Mitchell",
      company: "Melbourne Consulting Group",
      avatar: "🎯"
    },
    {
      quote: "Training new sales staff used to take months. Now they're confident and effective within two weeks because they can instantly access all our product knowledge and sales processes.",
      author: "David Wong", 
      company: "Brisbane Tech Solutions",
      avatar: "📈"
    },
    {
      quote: "Our HR team was drowning in policy questions. Codex handles routine inquiries so our people can focus on strategic initiatives. It's like having an extra team member who never sleeps.",
      author: "Emma Thompson",
      company: "Sydney Manufacturing Co",
      avatar: "⚡"
    },
    {
      quote: "The best part? Our customers love getting instant, accurate answers at 2 AM. We're providing better service while reducing our operational costs. It's a true win-win.",
      author: "Michael O'Connor",
      company: "Perth Business Services", 
      avatar: "⭐"
    }
  ];

  return (
    <section className="flex flex-col items-center justify-center w-full relative">
      <div className="relative w-full px-6">
        <div className="max-w-6xl mx-auto border-l border-r border-border">
          <SectionHeader>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">
              Real Australian Businesses, Real Results
            </h2>
            <p className="text-muted-foreground text-center text-balance font-medium">
              See how local businesses are already saving time, money, and headaches with Codex
            </p>
          </SectionHeader>

          <div className="border-t border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {stories.map((story, index) => (
                <motion.div
                  key={index}
                  className={`p-8 ${index % 2 === 0 ? 'md:border-r border-border' : ''} ${index < 2 ? 'border-b border-border' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    
                    <blockquote className="text-lg font-medium leading-relaxed">
                      "{story.quote}"
                    </blockquote>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-lg">
                        {story.avatar}
                      </div>
                      <div>
                        <p className="font-semibold">{story.author}</p>
                        <p className="text-sm text-muted-foreground">{story.company}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Getting Started Section
const GettingStartedSection = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full relative">
      <div className="relative w-full px-6">
        <div className="max-w-6xl mx-auto border-l border-r border-border">
          <SectionHeader>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground text-center text-balance font-medium">
              Choose the option that works best for your business timeline and budget
            </p>
          </SectionHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-border">
            <div className="p-8 border-r border-border space-y-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Try It Yourself</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Start with a free trial and see immediate results. Upload your key documents and start asking questions within minutes. No technical expertise required.
                </p>
                <Button variant="outline" className="rounded-full">
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
            
            <div className="p-8 space-y-6">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">We'll Do It for You</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Prefer to have experts handle everything? Our team will set up Codex, train your staff, and ensure everything works perfectly from day one. Sit back and watch the magic happen.
                </p>
                <Button variant="outline" className="rounded-full">
                  Contact Sales
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Final CTA Section
const FinalCTASection = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full relative">
      <div className="relative w-full px-6">
        <div className="max-w-6xl mx-auto border-l border-r border-border">
          <SectionHeader>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">
              Stop Wasting Time. Start Saving Money.
            </h2>
            <p className="text-muted-foreground text-center text-balance font-medium">
              See exactly how Codex will transform your business in a personalised 15-minute demonstration.
            </p>
          </SectionHeader>

          <div className="border-t border-border p-8">
            <div className="text-center space-y-6">
              <div className="space-y-4">
                <div className="space-y-6">
                  <KortixEnterpriseModal>
                    <Button size="lg">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Your Codex Demo
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </KortixEnterpriseModal>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center max-w-2xl mx-auto">
                    <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-accent/20">
                      <MessageSquare className="w-6 h-6 text-primary" />
                      <span className="text-sm font-medium">Free Consultation</span>
                      <span className="text-xs text-muted-foreground">No sales pressure</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-accent/20">
                      <Database className="w-6 h-6 text-primary" />
                      <span className="text-sm font-medium">Instant ROI Calculator</span>
                      <span className="text-xs text-muted-foreground">See your savings</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-accent/20">
                      <Shield className="w-6 h-6 text-primary" />
                      <span className="text-sm font-medium">Australian Support</span>
                      <span className="text-xs text-muted-foreground">Local expertise</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Page Component
export default function CodexEnterprisePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full">
      <div className="w-full divide-y divide-border">
        <CustomHeroSection />
        <ValuePropSection />
        <FeaturesSection />
        <UseCasesSection />
        <SuccessStoriesSection />
        <GettingStartedSection />
        <FinalCTASection />
        <FooterSection />
      </div>
    </main>
  );
}

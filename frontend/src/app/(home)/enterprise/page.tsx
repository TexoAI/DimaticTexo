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
              <span className="text-primary">Enterprise RAG Chat.</span>
              <br />
              <span className="text-secondary">Your Knowledge, Amplified.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-center text-muted-foreground font-medium text-balance leading-relaxed tracking-tight max-w-3xl">
              Transform your business documents, policies, and knowledge base into an intelligent conversational assistant. Codex delivers instant, accurate answers from your enterprise data.
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
                  <span>30-minute live demo</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Custom knowledge integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Enterprise security</span>
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
              Why Businesses Choose Codex
            </h2>
            <p className="text-muted-foreground text-center text-balance font-medium">
              The intelligent RAG solution that transforms how your team accesses and utilizes enterprise knowledge.
            </p>
          </SectionHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-border">
            <div className="p-8 border-r border-border">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Search className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Instant Knowledge Access</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Stop wasting time searching through documents. Codex understands context and delivers precise answers from your entire knowledge base in natural conversation.
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
                  <h3 className="text-xl font-semibold mb-3">Enterprise-Grade Security</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Your data stays secure with enterprise encryption, access controls, and compliance frameworks. Built for organizations that can't compromise on security.
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
      title: "Intelligent Document Processing",
      description: "Advanced RAG technology that understands context, relationships, and nuanced meaning across your entire document ecosystem including PDFs, Word docs, spreadsheets, and more.",
      category: "AI-Powered"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Natural Conversation Interface", 
      description: "Chat naturally with your knowledge base. Ask complex questions, request summaries, compare documents, and get detailed explanations in plain language.",
      category: "User Experience"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Advanced Access Controls",
      description: "Granular permissions ensure team members only access relevant information. Integration with SSO, role-based access, and comprehensive audit trails for compliance.",
      category: "Security"
    }
  ];

  return (
    <section className="flex flex-col items-center justify-center w-full relative">
      <div className="relative w-full px-6">
        <div className="max-w-6xl mx-auto border-l border-r border-border">
          <SectionHeader>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">
              Codex Core Features
            </h2>
            <p className="text-muted-foreground text-center text-balance font-medium">
              Powerful RAG capabilities designed for enterprise knowledge management and team productivity
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
    "Employee onboarding with instant access to policies and procedures",
    "Customer support teams with comprehensive product knowledge",
    "Legal teams navigating complex contract and regulatory documents", 
    "Sales teams accessing competitive intelligence and product specifications",
    "HR departments with policy guidance and compliance information",
    "Technical teams with documentation, troubleshooting guides, and best practices"
  ];

  return (
    <section className="flex flex-col items-center justify-center w-full relative">
      <div className="relative w-full px-6">
        <div className="max-w-6xl mx-auto border-l border-r border-border">
          <SectionHeader>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">
              Transform Every Department
            </h2>
            <p className="text-muted-foreground text-center text-balance font-medium">
              Codex empowers teams across your organization with instant access to relevant knowledge and expertise
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
      quote: "Codex reduced our customer support response time by 60%. Agents find answers instantly instead of searching through dozens of documents.",
      author: "Sarah Chen",
      company: "TechFlow Support",
      avatar: "🎯"
    },
    {
      quote: "Our sales team closes deals faster with instant access to competitive intelligence and product specifications through Codex.",
      author: "Marcus Rodriguez", 
      company: "Global Sales Corp",
      avatar: "📈"
    },
    {
      quote: "Employee onboarding is seamless now. New hires get instant answers about policies, procedures, and company knowledge.",
      author: "Dr. Amanda Foster",
      company: "HR Innovation LLC",
      avatar: "⚡"
    },
    {
      quote: "Codex transformed our legal department's efficiency. Complex contract research that took hours now takes minutes.",
      author: "James Wellington",
      company: "Legal Solutions Group", 
      avatar: "⚖️"
    }
  ];

  return (
    <section className="flex flex-col items-center justify-center w-full relative">
      <div className="relative w-full px-6">
        <div className="max-w-6xl mx-auto border-l border-r border-border">
          <SectionHeader>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">
              Real Results from Real Businesses
            </h2>
            <p className="text-muted-foreground text-center text-balance font-medium">
              See how organizations are transforming their knowledge workflows with Codex RAG chat
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
              Getting Started with Codex
            </h2>
            <p className="text-muted-foreground text-center text-balance font-medium">
              Choose the approach that best fits your organization's needs and timeline
            </p>
          </SectionHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-border">
            <div className="p-8 border-r border-border space-y-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Self-Service Setup</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Get started immediately with our intuitive interface. Upload documents, configure settings, and start chatting with your knowledge base in minutes.
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
                <h3 className="text-xl font-semibold mb-3">Enterprise Implementation</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  White-glove setup with dedicated support. Custom integrations, security configuration, and team training for large-scale deployments.
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
              Ready to Transform Your Knowledge Workflow?
            </h2>
            <p className="text-muted-foreground text-center text-balance font-medium">
              See Codex in action and discover how RAG chat can revolutionize how your team accesses business knowledge.
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
                      <span className="text-sm font-medium">Live Demo</span>
                      <span className="text-xs text-muted-foreground">See it in action</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-accent/20">
                      <Database className="w-6 h-6 text-primary" />
                      <span className="text-sm font-medium">Custom Integration</span>
                      <span className="text-xs text-muted-foreground">Your documents</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-accent/20">
                      <Shield className="w-6 h-6 text-primary" />
                      <span className="text-sm font-medium">Enterprise Security</span>
                      <span className="text-xs text-muted-foreground">SOC 2 compliant</span>
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

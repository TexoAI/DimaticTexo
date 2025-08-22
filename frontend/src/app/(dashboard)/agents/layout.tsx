import { agentPlaygroundFlagFrontend } from '@/flags';
import { isFlagEnabled } from '@/lib/feature-flags';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Agent Conversation | Dimatic Texo',
  description: 'Interactive agent conversation powered by Dimatic Texo',
  openGraph: {
    title: 'Agent Conversation | Dimatic Texo',
    description: 'Interactive agent conversation powered by Dimatic Texo',
    type: 'website',
  },
};

export default async function AgentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'API Keys | Texo',
  description: 'Manage your API keys for programmatic access to Texo',
  openGraph: {
    title: 'API Keys | Texo',
    description: 'Manage your API keys for programmatic access to Texo',
    type: 'website',
  },
};

export default async function APIKeysLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

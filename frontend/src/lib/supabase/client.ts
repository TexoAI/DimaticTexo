import { createBrowserClient } from '@supabase/ssr'

/**
 * Safe factory for a Supabase "browser" client.
 * During static builds or when env vars are not present, return a lightweight
 * stub implementing the minimal interface the app expects so prerendering
 * doesn't fail.
 */
export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !key) {
    const noopResult = async () => ({ data: null, error: null })

    const stub = {
      auth: {
        getUser: async () => ({ data: { user: null }, error: null }),
        getSession: async () => ({ data: { session: null }, error: null }),
        onAuthStateChange: (_: any, __: any) => ({ data: null, error: null }),
        signOut: async () => ({ error: null }),
      },
      from: (_: string) => ({
        select: noopResult,
        insert: noopResult,
        update: noopResult,
        delete: noopResult,
        single: noopResult,
        maybeSingle: noopResult,
        eq: () => ({ select: noopResult }),
      }),
      rpc: noopResult,
      storage: {
        from: (_: string) => ({
          upload: noopResult,
          download: noopResult,
          list: noopResult,
          remove: noopResult,
        }),
      },
    }

    return stub as any
  }

  return createBrowserClient(url, key)
}

'use server'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

/**
 * Creates a Supabase server client. During static builds or in environments
 * where SUPABASE credentials are not provided, return a lightweight stub
 * that implements the minimal interface used during prerendering so the
 * build does not fail.
 */
export async function createClient() {
  const cookieStore = await cookies()

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !key) {
    // Lightweight stub client to avoid runtime errors during prerender/build
    const noopResult = async () => ({ data: null, error: null })

    const stub = {
      auth: {
        getUser: async () => ({ data: { user: null }, error: null }),
        getSession: async () => ({ data: { session: null }, error: null }),
        onAuthStateChange: (_: any, __: any) => ({ data: null, error: null }),
        signOut: async () => ({ error: null }),
      },
      rpc: noopResult,
      from: (_: string) => ({
        select: noopResult,
        insert: noopResult,
        update: noopResult,
        delete: noopResult,
        maybeSingle: noopResult,
        single: noopResult,
        eq: () => ({ select: noopResult }),
      }),
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

  return createServerClient(url, key, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
      setAll(cookiesToSet: any) {
        try {
          cookiesToSet.forEach(({ name, value, options }: any) =>
            cookieStore.set(name, value, options)
          )
        } catch {
          // The `setAll` method was called from a Server Component.
          // This can be ignored if you have middleware refreshing
          // user sessions.
        }
      },
    },
  })
}

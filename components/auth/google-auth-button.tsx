"use client"

import { useEffect, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { createClient } from "@/utils/supabase/client"

type AuthUser = {
  id: string
  email?: string
  user_metadata?: {
    name?: string
    full_name?: string
    [key: string]: unknown
  }
}

export function GoogleAuthButton() {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState<AuthUser | null>(null)

  // derive name
  const displayName = useMemo(() => {
    return (
      (user?.user_metadata?.name as string | undefined) ||
      (user?.user_metadata?.full_name as string | undefined) ||
      (user?.email as string | undefined) ||
      undefined
    )
  }, [user])
  
  // get first character of name
  const avatarInitial = useMemo(() => {
    return (displayName?.[0] || "U").toUpperCase()
  }, [displayName])

  useEffect(() => {
    const supabase = createClient()
    // initial get session user
    supabase.auth.getUser().then(({ data }) => {
      if (data?.user) {
        setUser({
          id: data.user.id,
          email: data.user.email ?? undefined,
          user_metadata: data.user.user_metadata ?? {},
        })
      } else {
        setUser(null)
      }
    })
    // subscribe to auth state changes
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser({
          id: session.user.id,
          email: session.user.email ?? undefined,
          user_metadata: session.user.user_metadata ?? {},
        })
      } else {
        setUser(null)
      }
    })
    return () => {
      sub?.subscription.unsubscribe()
    }
  }, [])

  const handleGoogle = async () => {
    const supabase = createClient()
    setLoading(true)
    try {
      const origin = window.location.origin
      await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${origin}/auth/callback`,
          queryParams: {
            prompt: "select_account",
          },
        },
      })
      // redirect will occur; no further code
    } catch (e) {
      setLoading(false)
    }
  }

  const handleSignOut = async () => {
    const supabase = createClient()
    setLoading(true)
    try {
      await supabase.auth.signOut()
    } finally {
      setLoading(false)
    }
  }

  // Logged in state: show avatar + Sign out
  if (user) {
    return (
      <div className="flex items-center gap-3">
        <div className="w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 text-xs font-medium">
          {avatarInitial}
        </div>
        <Button
          variant="outline"
          className="border-slate-300 hover:bg-slate-50"
          onClick={handleSignOut}
          disabled={loading}
        >
          Sign out
        </Button>
      </div>
    )
  }

  // Logged out: show Continue with Google
  return (
    <Button
      variant="outline"
      className="border-slate-300 hover:bg-slate-50"
      onClick={handleGoogle}
      disabled={loading}
    >
      {loading ? "Redirecting..." : "Sign in"}
    </Button>
  )
}



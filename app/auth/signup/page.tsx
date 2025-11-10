"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { createClient } from "@/utils/supabase/client"

export default function SignUpPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setMessage(null)
    setLoading(true)

    try {
      const supabase = createClient()
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      })

      if (error) {
        setError(error.message)
      } else if (data) {
        setMessage("注册成功！请检查您的邮箱以验证账户。")
        setTimeout(() => {
          router.push("/")
        }, 2000)
      }
    } catch (err) {
      setError("注册失败，请稍后重试")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="absolute inset-0 bg-grid opacity-[0.02]"></div>
      
      <div className="relative z-10">
        <Header />
        
        <Breadcrumb 
          items={[
            { label: "Home", href: "/" },
            { label: "Sign Up", href: "/auth/signup" }
          ]}
        />
        
        <div className="relative py-16 px-6">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h1 className="text-3xl font-bold text-slate-900 mb-2 text-center">
                创建账户
              </h1>
              <p className="text-slate-600 text-center mb-8">
                注册以保存您的计算记录
              </p>

              <form onSubmit={handleSignUp} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    邮箱
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
                    密码
                  </label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="至少6个字符"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={6}
                    className="w-full"
                  />
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
                    {error}
                  </div>
                )}

                {message && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md text-sm">
                    {message}
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white"
                  disabled={loading}
                >
                  {loading ? "注册中..." : "注册"}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-slate-600">
                  已有账户？{" "}
                  <a href="/auth/login" className="text-slate-900 font-medium hover:underline">
                    登录
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}


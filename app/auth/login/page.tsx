"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { createClient } from "@/utils/supabase/client"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      const supabase = createClient()
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        setError(error.message)
      } else if (data) {
        router.push("/")
      }
    } catch (err) {
      setError("登录失败，请稍后重试")
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
            { label: "Login", href: "/auth/login" }
          ]}
        />
        
        <div className="relative py-16 px-6">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h1 className="text-3xl font-bold text-slate-900 mb-2 text-center">
                登录
              </h1>
              <p className="text-slate-600 text-center mb-8">
                登录以访问您的账户
              </p>

              <form onSubmit={handleLogin} className="space-y-4">
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
                    placeholder="请输入密码"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full"
                  />
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
                    {error}
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white"
                  disabled={loading}
                >
                  {loading ? "登录中..." : "登录"}
                </Button>
              </form>

              <div className="mt-6 text-center space-y-2">
                <p className="text-sm text-slate-600">
                  还没有账户？{" "}
                  <a href="/auth/signup" className="text-slate-900 font-medium hover:underline">
                    注册
                  </a>
                </p>
                <p className="text-sm">
                  <a href="/auth/forgot-password" className="text-slate-600 hover:text-slate-900 hover:underline">
                    忘记密码？
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



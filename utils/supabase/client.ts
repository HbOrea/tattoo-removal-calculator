import { createBrowserClient } from '@supabase/ssr'

/**
 * 获取 Supabase 配置
 * 支持从 .env 和 .env.local 读取环境变量
 * Next.js 会自动从以下文件读取环境变量（按优先级）:
 * 1. .env.local (最高优先级)
 * 2. .env.development / .env.production (根据 NODE_ENV)
 * 3. .env (最低优先级)
 */
function getSupabaseConfig() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url) {
    throw new Error(
      '缺少 NEXT_PUBLIC_SUPABASE_URL 环境变量。请确保在 .env 或 .env.local 中设置了该变量。'
    )
  }

  if (!key) {
    throw new Error(
      '缺少 NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY 环境变量。请确保在 .env 或 .env.local 中设置了该变量。'
    )
  }

  return { url, key }
}

export function createClient() {
  const { url, key } = getSupabaseConfig()
  return createBrowserClient(url, key)
}
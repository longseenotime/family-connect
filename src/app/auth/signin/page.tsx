"use client"

import { signIn, getProviders } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function SignIn() {
  const [providers, setProviders] = useState<Record<string, { id: string; name: string }> | null>(null)

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders()
      setProviders(res)
    }
    fetchProviders()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full mx-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to Family Connect</h1>
          <p className="text-gray-600">Sign in to access your family hub</p>
        </div>

        <div className="space-y-4">
          {providers &&
            Object.values(providers).map((provider) => (
              <Button
                key={provider.name}
                onClick={() => signIn(provider.id, { callbackUrl: "/dashboard" })}
                className="w-full"
                size="lg"
              >
                Sign in with {provider.name}
              </Button>
            ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Your family data is private and secure
          </p>
        </div>
      </div>
    </div>
  )
}
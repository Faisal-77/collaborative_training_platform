'use client'
import { signOut } from "next-auth/react"
import { useSession } from "next-auth/react"

export default function page() {
  return (
    
    <div>
        <button onClick={() => signOut()} > تسجيل خروج </button>
    </div>
  )
}

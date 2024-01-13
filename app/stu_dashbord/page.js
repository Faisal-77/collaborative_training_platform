'use client'
import { signOut } from "next-auth/react"
import { useSession } from "next-auth/react"

export default function page() {
 
  const {data:session} = useSession();
  console.log(session)
  return (
    
    <div>
        <div>
            <span> {session?.user?.user_name} </span>
        </div>

        <div>
            <span> {session?.user?.email} </span>
        </div>

        <button onClick={() => signOut()} > تسجيل خروج </button>

    </div>
  )
}

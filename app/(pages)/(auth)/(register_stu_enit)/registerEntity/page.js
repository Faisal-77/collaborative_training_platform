import RegisterCom from "@/app/components/registerEntity"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
export default async function register(){
    return <RegisterCom/>;
}
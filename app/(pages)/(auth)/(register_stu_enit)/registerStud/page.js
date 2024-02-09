import RegisterCom from "@/app/components/registerStu"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import styles from '@/app/page.module.css'
export default async function register(){

    return (
        <RegisterCom/>
        );
}
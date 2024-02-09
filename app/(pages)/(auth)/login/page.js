import Login from "@/app/components/login"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

function  login() {
        return <Login/>;
}
export default login;
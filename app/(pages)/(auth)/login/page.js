import Login from "@/app/components/login"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
async function  login() {
        const session = await getServerSession(authOptions);
        if (session) redirect('/stu_dashbord')

        return <Login/>;
}

export default login;
import {connectToDatabase, dis_connact_database} from "@/lib/DataBase";
import Student from "@/models/student";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs';
import User from "@/models/users";
import Type from "@/models/type";

export const authOptions = {
    providers:[
        CredentialsProvider({
            name : 'credentials',
            credentials:{},

            async authorize(credentials){
                const {user_name , password} = credentials;
                try{
                    await connectToDatabase();
                    const user = await User.findOne({user_name})
                    
                    if (!user){
                        return;
                    }
                    
                    const password_match = await bcrypt.compare(password , user.password);
                    if ( ! password_match){
                        return;
                    }
                    return user 
                }catch(err){
                    console.log("errors : ", err)
                }finally{
                    dis_connact_database();
                }
               
            },
        }),
    ],
    session:{
        strategy :"jwt",
    },
    secret :process.env.NEXTAUTH_SECRET,
    pages:{
        signIn:"/login"
    },
};
const handler = NextAuth(authOptions);

export {handler as GET , handler as POST};
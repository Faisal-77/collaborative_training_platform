import {connectToDatabase,  dis_connact_database } from "@/lib/DataBase";
import Student from "@/models/student";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
import User from "@/models/users";
import Type from "@/models/type";
import department_manager from "@/models/department_manager";
export  async function POST (req) {
    try{
        const res = await req.json(); 
        const {department ,full_name , email , user_name , phoneNumber} = res
        await connectToDatabase();
        const password = user_name
        const hashPassword = await bcrypt.hash(password , 10)
        await department_manager.create({full_name , email , department , user_name , phoneNumber})
        const foren_key =  await department_manager.findOne({user_name}).select('_id');
        await User.create ({user_name , password : hashPassword , type:"department_manager" , foren_key });
        await Type.create({user_name , type: "department_manager"})
        return NextResponse.json({ message:"done" })
    }catch (error){
        console.log(error)
    }finally {
        dis_connact_database()
    }
}
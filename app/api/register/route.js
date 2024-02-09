import {connectToDatabase,  dis_connact_database } from "@/lib/DataBase";
import Student from "@/models/student";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
import User from "@/models/users";
import Type from "@/models/type";
export  async function POST (req ) {
    try{
        const {formData} = await req.json(); 
        const {user_name , email , phoneNumber, full_name , password , department , major } = formData
        const hashPassword = await bcrypt.hash(password , 10)

        await connectToDatabase();
        await Student.create({user_name , email , phoneNumber , full_name , password : hashPassword , department , major })
        const foren_key =  await Student.findOne({user_name}).select('_id');
        await User.create ({user_name , password : hashPassword , type:"Stydent" , foren_key });
        await Type.create({user_name , type:"Stydent"})
        return NextResponse.json({ message:"done" })
    }catch (error){
        console.log(error)
    }finally {
        dis_connact_database()
    }
}
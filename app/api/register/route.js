import {connectToDatabase,  dis_connact_database } from "@/lib/DataBase";
import Student from "@/models/student";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
export  async function POST (req ) {
    try{
        const { user_name , email, phoneNumber ,password } = await req.json(); 
        const hashPassword = await bcrypt.hash(password , 10)
        
        await connectToDatabase();
        await Student.create({user_name , email , phoneNumber, password : hashPassword})
        console.log('create user Successfully')
        return NextResponse.json({ message:"done" })
    }catch (error){
        console.log(error)
    }finally {
        dis_connact_database()
    }
}
import {connectToDatabase,  dis_connact_database } from "@/lib/DataBase";
import Student from "@/models/student";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
import Training from "@/models/training";
import User from "@/models/users";
export  async function POST (req ) {
    try{
        const {formData} = await req.json(); 
        const {name , field , email, phone_number , user_name , password } = formData
        const hashPassword = await bcrypt.hash(password , 10)
        await connectToDatabase();
        await Training.create({name , field , email , phone_number , user_name , password : hashPassword})
        const foren_key =  await Training.findOne({user_name}).select('_id');
        await User.create ({user_name , password : hashPassword , type:"Training_entity" , foren_key })
        console.log('create entity Successfully')
        return NextResponse.json({ message:"done" })

    }catch (error){
        console.log(error)
    }finally {
        dis_connact_database()
    }
}
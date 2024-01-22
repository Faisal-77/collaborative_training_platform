import {connectToDatabase, dis_connact_database} from "@/lib/DataBase";
import Student from "@/models/student";
import Training from "@/models/training";
import User from "@/models/users";
import { NextResponse } from "next/server";

export  async function POST (req ) {
    try{
        const  user_name  = await req.json();
        await connectToDatabase();
        if (user_name.startsWith("4")){
            const user =  await Student.findOne({user_name}).select('_id');
            return NextResponse.json({user})
        }
        const user = await Training.findOne({user_name}).select('_id')
        return NextResponse.json({user})
    }catch (error){
        console.log(error)
    }finally{
        dis_connact_database();
    }
}
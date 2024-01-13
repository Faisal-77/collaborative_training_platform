import {connectToDatabase, dis_connact_database} from "@/lib/DataBase";
import Student from "@/models/student";
import { NextResponse } from "next/server";

export  async function POST (req ) {
    try{
        const { user_name } = await req.json();
        await connectToDatabase();
        const user =  await Student.findOne({user_name}).select('_id');
        console.log('user: ',user);
        return NextResponse.json({user})
    }catch (error){
        console.log(error)
    }finally{
        dis_connact_database();
    }
}
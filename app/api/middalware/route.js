import {connectToDatabase, dis_connact_database} from "@/lib/DataBase";
import Type from "@/models/type";
import { NextResponse } from "next/server";

export  async function POST (req ) {
    try{
        const  user_name = await req.json();
        await connectToDatabase();
        const user_type = await Type.findOne({user_name})
        return NextResponse.json(user_type.type);
    }catch (error){
        console.log(error)
    }finally{
        dis_connact_database();
    }
}
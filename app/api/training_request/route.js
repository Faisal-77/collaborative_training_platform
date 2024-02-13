import {connectToDatabase,  dis_connact_database } from "@/lib/DataBase";
import Training_requset from "@/models/training_request";
import { NextResponse } from "next/server";

export  async function POST (req ) {
    try{
        const {name , field , number_of_student, time , hour , department , major} = await req.json();  
        console.log(name , field , number_of_student, time , hour , department , major)
        await connectToDatabase();
        await Training_requset.create({name , field , number_of_student , time , hour , department , major , state: "Prosessing"})
        return NextResponse.json({ message:"done" })
    }catch (error){
        console.log(error)
    }finally {
        dis_connact_database()
    }
}
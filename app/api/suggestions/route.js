import {connectToDatabase,  dis_connact_database } from "@/lib/DataBase";
import Student from "@/models/student";
import Suggestions from "@/models/suggestions";
import { NextResponse } from "next/server";
export  async function POST (req) {
    try{ 
        const {name , email  , phone_number , content} = await req.json();
        await connectToDatabase();
        await Suggestions.create({name , email , phone_number , content});
        return NextResponse.json({ message:"done" })
    }catch (error){
        console.log(error)
    }finally {
        dis_connact_database()
    }
}
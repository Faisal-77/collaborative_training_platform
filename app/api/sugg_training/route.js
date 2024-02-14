import {connectToDatabase,  dis_connact_database } from "@/lib/DataBase";
import training_sugg from "@/models/sug_training";
import { NextResponse } from "next/server";
export  async function POST (req) {
    try{ 
        const {name , sugg} = await req.json();
        await connectToDatabase();
        await training_sugg.create({name , sugg});
        return NextResponse.json({ message:"done" })
    }catch (error){
        console.log(error)
    }finally {
        dis_connact_database()
    }
}
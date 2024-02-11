import {connectToDatabase,  dis_connact_database } from "@/lib/DataBase";
import { NextResponse } from "next/server";
import Training from "@/models/training";
import Suggestions from "@/models/suggestions";

export  async function GET () {
    try{
        await connectToDatabase();
        const suggestions = await Suggestions.find({},{updatedAt:0,createdAt:0,__v:0,_id:0});

        return NextResponse.json(suggestions)
    }catch (error){
        console.log(error)
    }finally {
        dis_connact_database()
    }
}
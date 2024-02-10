import {connectToDatabase,  dis_connact_database } from "@/lib/DataBase";
import { NextResponse } from "next/server";
import Training from "@/models/training";

export  async function GET () {
    try{
        await connectToDatabase();

        const entitys = await Training.find({ state: true },
            { name: 1, field: 1, email: 1, phone_number: 1 , _id:0 });

        return NextResponse.json(entitys)
    }catch (error){
        console.log(error)
    }finally {
        dis_connact_database()
    }
}
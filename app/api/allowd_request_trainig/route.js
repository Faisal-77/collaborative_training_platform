import {connectToDatabase,  dis_connact_database } from "@/lib/DataBase";
import Training_requset from "@/models/training_request";
import { NextResponse } from "next/server";


export  async function GET () {
    try{
        await connectToDatabase();

        const entitys = await Training_requset.find({ state: "Accept" },
            { __v:0 , state:0 , createdAt:0 , updatedAt:0 , _id:0 });

        return NextResponse.json(entitys)
    }catch (error){
        console.log(error)
    }finally {
        dis_connact_database()
    }
}
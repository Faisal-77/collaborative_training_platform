import {connectToDatabase,  dis_connact_database } from "@/lib/DataBase";
import { NextResponse } from "next/server";
import Training from "@/models/training";
import Suggestions from "@/models/suggestions";
import department_manager from "@/models/department_manager";

export  async function GET () {
    try{
        await connectToDatabase();
        const department = await department_manager.find({},
            { updatedAt:0,createdAt:0,__v:0,_id:0 ,email:0 , phoneNumber:0 , user_name:0});

        return NextResponse.json(department)
    }catch (error){
        console.log(error)
    }finally {
        dis_connact_database()
    }
}
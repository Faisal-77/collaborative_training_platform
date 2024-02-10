import { connectToDatabase, dis_connact_database } from "@/lib/DataBase";
import Training from "@/models/training";
import { NextResponse } from "next/server";

export async function PUT(req) {
  try {
    const { name } = await req.json();
    await connectToDatabase();
    const filter = { name: name };
    const update = { state: true };

    const updatedEntity = await Training.findOneAndUpdate(filter , update);
    if (updatedEntity) {
      return  NextResponse.json("update done");
    }else{
      return  NextResponse.json("the name is not exist");
    }
  } catch (error) {
    console.log(error);
    return  NextResponse.error("Internal server error").status(500);
  }finally{
    dis_connact_database()
  }
}
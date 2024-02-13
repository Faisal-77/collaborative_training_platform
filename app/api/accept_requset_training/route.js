import { connectToDatabase, dis_connact_database } from "@/lib/DataBase";
import Training_requset from "@/models/training_request";
import { NextResponse } from "next/server";

export async function PUT(req) {
  try {
    const { name } = await req.json();
    await connectToDatabase();
    const filter = { name: name };
    const update = { state: "Accept" };
    console.log(name)
    const updatedRequst_training = await Training_requset.findOneAndUpdate(filter , update);
    console.log(updatedRequst_training)
    if (updatedRequst_training) {
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
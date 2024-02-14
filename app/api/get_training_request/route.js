import { connectToDatabase, dis_connact_database } from "@/lib/DataBase";
import Training_requset from "@/models/training_request";
import { NextResponse } from "next/server";


export async function GET() {
  try {
    await connectToDatabase();
    const suggestions = await Training_requset.find(
      {},
      { updatedAt: 0, __v: 0, _id: 0 ,}
    );

    return NextResponse.json(suggestions);
  } catch (error) {
    console.log(error);
  } finally {
    dis_connact_database();
  }
}

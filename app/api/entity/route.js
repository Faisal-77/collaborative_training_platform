import { connectToDatabase, dis_connact_database } from "@/lib/DataBase";
import { NextResponse } from "next/server";
import Training from "@/models/training";

export async function GET() {
  try {
    await connectToDatabase();

    const entities = await Training.find({}, { name: 1, field: 1, _id: 0 });
    
    return NextResponse.json(entities);
  } catch (error) {
    console.log(error);
    return NextResponse.error("Internal server error", { statusCode: 500 });
  } finally {
    dis_connact_database();
  }
}
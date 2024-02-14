import { connectToDatabase, dis_connact_database } from "@/lib/DataBase";
import { NextResponse } from "next/server";
import training_sugg from "@/models/sug_training";

export async function GET() {
  try {
    await connectToDatabase();
    const suggestions = await training_sugg.find(
      {},
      { updatedAt: 0, __v: 0, _id: 0 }
    );

    return NextResponse.json(suggestions);
  } catch (error) {
    console.log(error);
  } finally {
    dis_connact_database();
  }
}

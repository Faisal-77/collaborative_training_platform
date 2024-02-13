import {connectToDatabase,  dis_connact_database } from "@/lib/DataBase";
import Training from "@/models/training";
import Type from "@/models/type";
import User from "@/models/users";
import { NextResponse } from "next/server";

export async function DELETE(req) {
    try {
      const { name } = await req.json();
      console.log(name)
      await connectToDatabase();
      const result = await Training.deleteOne({ name: name });
        console.log(result)
      if (result.deletedCount === 1) {
        const user = await User.findOne({ user_name: name });
        await User.deleteOne({ user_name: user.user_name });
        await Type.deleteOne({ user_name: user.user_name });
        return NextResponse.json({massage : "remove done"});
      } else {
        return NextResponse.json({massage : "not found"});
      }
      
    } catch (error) {
      console.log(error)
      return NextResponse.json({ "err": error });
    } finally {
      dis_connact_database();
    }
  }
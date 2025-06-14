// app/api/insert-user/route.ts
import prisma from "@/lib/dbConfig";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const {name, email} = await req.json();

    console.log("data received in body:", req.body);
    console.log("email, name,", email, name);

    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
      },
    });
    console.log("data savig res", user)

    //make a query to db for show all entries
    const all_data = await prisma.user.findMany();
    console.log("here is all query data");
    console.log(all_data);

    return NextResponse.json({ success: true, user });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

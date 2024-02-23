import { NextResponse } from "next/server";
import User from "../../(models)/User";

export async function POST(req) {
  try {
    const body = await req.json();
    const userData = body.formData;

    if ()
  } catch (error) {
    console.log("error");
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}

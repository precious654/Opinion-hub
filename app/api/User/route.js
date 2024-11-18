import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import User from "@/app/(models)/User";

export async function POST(req) {
  try {
    const body = await req.json();
    const userData = await body.formData;

    if (!userData.email || !userData.password) {
      return NextResponse.json(
        { message: "Please provide email and password" },
        { status: 400 }
      );
    }

    const duplicate = await User
      .findOne({ email: userData.email })
      .lean()
      .exec();

    if (duplicate) {
      return NextResponse.json(
        { message: "Email already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashedPassword;
    await User.create(userData);
    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "invalid request", error: err },
      { status: 500 }
    );
  }
}

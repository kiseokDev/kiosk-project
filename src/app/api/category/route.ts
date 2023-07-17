import { NextResponse } from "next/server";

// const menuAPI = new MenuListAPI();

export async function GET(request: Request) {
  const url = new URL(request.url);
  console.log(`searchParams:${url}`);
  return NextResponse.json({ text: "Hello world" });
}

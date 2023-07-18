import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { category: string } },
) {
  const { category } = params; // '1'
  console.log("here is api22");

  //여기에 menu.find(category) lib 쓰면됨
  return NextResponse.json({ test: category });
}

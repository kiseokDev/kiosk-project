import { NextResponse } from "next/server";
import { MenuDB } from "@/db/service/service";

export async function GET(request: Request) {
  console.log("여기는 메뉴리스트");
  const db = new MenuDB();
  return NextResponse.json(db.getAllMenuList());
}

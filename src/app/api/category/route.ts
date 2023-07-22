import { NextResponse } from "next/server";
import { MenuDB } from "@/db/service/service";

export async function GET(request: Request) {
  const db = new MenuDB();
  const data = db.getMenuCategory();
  return NextResponse.json(data);
}

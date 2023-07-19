import { MenuDB } from "@/db/service/service";
import { NextResponse } from "next/server";
//process.env.NEXT_PUBLIC_API_URL/menu/{category}/api
export async function GET(
  request: Request,
  { params }: { params: { category: string } },
) {
  const { category } = params; // '1'
  const db = new MenuDB();
  const data = db.getMenuList(category);
  return NextResponse.json(data);
}

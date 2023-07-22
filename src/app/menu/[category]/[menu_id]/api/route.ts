import { MenuDB } from "@/db/service/service";
import { NextResponse } from "next/server";
//process.env.NEXT_PUBLIC_API_URL/menu/[category]/{menu_id}
export async function GET(
  request: Request,
  { params }: { params: { category: string; menu_id: string } },
) {
  const { menu_id, category } = params; // '1'
  console.log(`여기는 api route menu_id :${menu_id}`);
  const db = new MenuDB();
  const data = db.getMenuDetail(menu_id);
  return NextResponse.json(data);
}

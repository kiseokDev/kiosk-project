import { NextResponse } from "next/server";
import categoryList from "../../../db/menu-categoryListDB";
// const menuAPI = new MenuListAPI();

export async function GET(request: Request) {
  return NextResponse.json({ categoryList });
}

import { NextResponse } from "next/server";

class Api {
  // menu
  url: string;

  constructor(url: string) {
    this.url = url;
  }

  getRequest<NextResponse>(): NextResponse {
    return fetch(this.url).then(res => res.json()) as NextResponse;
  }
}

interface menuAPI {
  getMenuList(categoryName: string): MenuList[];
  getMenuCategory(): [];
  getMenuDetail(menuId: string): Menu;
}

// 메뉴 클래스 기능
//  1. menuList 데이터
//  2. menuDetail 데이터

///------------------
// /menu/category/menuId -로 페이지 요청

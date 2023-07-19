import categoryList from "../../db/categoryListDB";
import menuListDB from "../../db/menuListDB";

interface MenuInterface {
  getMenuList(categoryName: string): MenuType[];
  getMenuCategory(): string[];
  getMenuDetail(menuId: string): MenuType | undefined;
}

export class MenuDB implements MenuInterface {
  getMenuCategory(): string[] {
    return categoryList;
  }
  getMenuList(categoryName: string): MenuType[] {
    return menuListDB.filter(menu => menu.category === categoryName);
  }
  getMenuDetail(menuId: string): MenuType | undefined {
    return menuListDB.find(menu => menu.menu_id === menuId);
  }
}
// 메뉴 클래스 기능
//  1. menuList 데이터
//  2. menuDetail 데이터

///------------------
// /menu/category/menuId -로 페이지 요청

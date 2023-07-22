const CATEGORY_URL = process.env.NEXT_PUBLIC_API_URL + "/api/category";
const ALL_MENU_LIST_URL = process.env.NEXT_PUBLIC_API_URL + "/api/menuList";
const MENU_LIST_URL = process.env.NEXT_PUBLIC_API_URL + "/menu/@category/api";
// const MENU_URL =
//     process.env.NEXT_PUBLIC_API_URL + "/menu/@categoryName/api";

const MENU_DETAIL_URL =
  process.env.NEXT_PUBLIC_API_URL + "/menu/@category/@menu_id/api";
export { CATEGORY_URL, MENU_LIST_URL, ALL_MENU_LIST_URL, MENU_DETAIL_URL };

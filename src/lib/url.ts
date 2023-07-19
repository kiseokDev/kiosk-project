const local_domain = process.env.NEXT_PUBLIC_API_URL;

const CATEGORY_URL = process.env.NEXT_PUBLIC_API_URL + "/api/categoryList";
const MENULIST_URL =
  process.env.NEXT_PUBLIC_API_URL + "/menu/@category_name/api";
// const MENU_URL =
//     process.env.NEXT_PUBLIC_API_URL + "/menu/@categoryName/api";

export { CATEGORY_URL, MENULIST_URL };

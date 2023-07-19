import { MenuCategoryAPI, MenuListAPI } from "@/lib/menu/api";
import { MENULIST_URL, CATEGORY_URL } from "@/lib/url";

export async function generateStaticParams() {
    const { categoryList } = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/categoryList').then((res) => res.json());
    const API = new MenuCategoryAPI(CATEGORY_URL);// 같은지 확인
    const data = API.getData(); // data 랑 categpry랑
    return categoryList.map((category: string) => {
        return { slug: category }
    })
}

async function getData(categoryName: string) {
    const API = new MenuListAPI(MENULIST_URL.replace('@category_name', categoryName));
    return await API.getData();
}

export default async function Page({ params: { category } }: { params: { category: string } }) {
    const menuList = await getData(category);
    console.log(menuList)
    return <h1>category 별 menuList 페이지 | category = {category} </h1>
}

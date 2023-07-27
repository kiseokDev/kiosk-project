import { MenuCategoryAPI, MenuListAPI } from "@/lib/menu/api";
import { MENU_LIST_URL, CATEGORY_URL } from '@/lib/menu/url';
import Link from "next/link";

export async function generateStaticParams() {
    const API = new MenuCategoryAPI(CATEGORY_URL);// 같은지 확인
    const categoryList = await API.getData(); // data 랑 categpry랑
    return categoryList.map((category: string) => {
        return { slug: category }
    })
}

async function getData(category: string) {
    const API = new MenuListAPI(MENU_LIST_URL.replace('@category', category));
    return await API.getData();
}

export default async function Page({ params: { category } }: { params: { category: string } }) {
    const menuList = await getData(category);
    console.log(menuList)
    return <h1>
        category 별 menu 페이지 category = {category}
        {menuList.map(menu =>
            <Link href={`${category}/${menu.menu_id}`}>
                <ul>
                    <li>{menu.menu_name}</li>
                    <li>{menu.price}</li>
                </ul>
            </Link>
        )}

    </h1>
}

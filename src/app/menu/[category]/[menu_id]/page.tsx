import { MenuDetailAPI, MenuListAPI } from '@/lib/menu/api';
import {
    ALL_MENU_LIST_URL, MENU_DETAIL_URL
} from '@/lib/menu/url'

export async function generateStaticParams() {
    const API = new MenuListAPI(ALL_MENU_LIST_URL)
    const menuList = await API.getData();
    console.log('menuList, generateStaticParams ', menuList)
    return menuList.map(menu => ({ slug: menu.menu_id }))
}

async function getData(catetory: string, menu_id: string) {
    const API = new MenuDetailAPI(MENU_DETAIL_URL.replace('@category', catetory).replace('@menu_id', menu_id));
    return await API.getData();
}


export default async function Page({ params: { category, menu_id } }: { params: { category: string, menu_id: string } }) { // generatie slug에서 category도 넣어줘야할듯 
    const menu = await getData(category, menu_id);
    return (
        <h1>
            메뉴 디테일 페이지
            메뉴id :   {menu.menu_id}
            매뉴name : {menu.menu_name}
        </h1>
    )
}
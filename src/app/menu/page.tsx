"use client"

import { CATEGORY_URL } from '@/lib/menu/url'
import { MenuCategoryAPI } from '@/lib/menu/api';
import Nav from "@/components/common/nav"
import MenuListComponent from '@/components/menu/menuList';
import { useRecoilState } from 'recoil';
import { category } from '@/state/menu/menuCategory';

async function getData() {
    const api = new MenuCategoryAPI(CATEGORY_URL);
    return await api.getData();
}

export default function Page() {
    const [categoryState,] = useRecoilState(category);

    // const updateName = e: React.MouseEvent => {
    //     setNameState(e.target.value);
    // };
    // 1. 메뉴리스트 로딩
    // recoil 셀렉터에서 dafault 값으로 menuListComponent 렌더링
    // Nav 에서 click event에 헨들러 넘겨주기(헨들러 - > state 체인지)

    //2. 카트 checklist

    // const categoryList = await getData();
    const categoryList = ['스페셜팩', '신제품(NEW)', '프리미엄', '와퍼&주니어', '치킨&슈림프버거', '올데이킹&킹모닝', '사이드', '음료&디저트']
    return <>
        <Nav></Nav>
        <MenuListComponent category={categoryState}></MenuListComponent>
    </>
}


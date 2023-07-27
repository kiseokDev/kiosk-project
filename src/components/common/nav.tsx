"use client"
import { CATEGORY_URL } from '@/lib/menu/url'
import { MenuCategoryAPI } from '@/lib/menu/api';
import Link from 'next/link';
import { styled } from 'styled-components';
import { useRecoilState } from 'recoil';
import { category } from '@/state/menu/menuCategory';
import { DOMAttributes, MouseEvent } from 'react';
async function getData() {
    const api = new MenuCategoryAPI(CATEGORY_URL);
    return await api.getData();
}

const CategoryContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    /* height: 5vh; */
`;

const Item = styled.div`
    width : 25vw;
    font-size: 0.85rem;
    padding: 2px 0;
    margin : 2px 0;
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    h1{
        padding : 0 15%;
        width : 100%;
    }
    &:hover{
        border-bottom : 2px solid red;
        h1{color:red}
    }
`;

export default function Nav() {
    const [, setNameState] = useRecoilState(category);
    const updateName = (e: MouseEvent<HTMLAnchorElement>) => {
        setNameState(e.currentTarget.textContent || '');
    };
    const categoryList = ['스페셜팩', '신제/품(NEW)', '프리미엄', '와퍼&주니어', '치킨&슈림프버거', '올데이킹&킹모닝', '사이드', '음료&디저트']
    // const categoryList = await getData();
    return <CategoryContainer>
        {categoryList.map((categoryName: string, index: number) => (
            <Item key={index}>
                <h1>
                    <a onClick={(event) => updateName(event)}>{categoryName}</a>
                    {/* {categoryName} */}
                </h1>
            </Item>
        ))}
    </CategoryContainer>
}

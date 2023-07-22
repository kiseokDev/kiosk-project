import Link from 'next/link';
import * as React from 'react';
import { CATEGORY_URL } from '@/lib/menu/url'
import { MenuCategoryAPI } from '@/lib/menu/api';
async function getData() {
    const api = new MenuCategoryAPI(CATEGORY_URL);
    return await api.getData();
}


export default async function Page() {
    const categoryList = await getData();
    return <ul>
        카테고리 Page!
        {categoryList.map((categoryName: string) => (
            <li key={categoryName}>
                <Link href={`/menu/${categoryName}`}>{categoryName}</Link>
            </li>
        ))}
    </ul>
}


import Link from 'next/link';
import * as React from 'react';
async function getData() {
    return await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/categoryList', { cache: 'no-store' }).then((res) => res.json());
}


export default async function Page() {
    const { categoryList } = await getData();
    console.log(categoryList.categoryList)
    return <ul>
        {categoryList.map((categoryName: string) => (
            <li key={categoryName}>
                <Link href={`/menu/${categoryName}`}>{categoryName}</Link>
            </li>
        ))}
    </ul>
}


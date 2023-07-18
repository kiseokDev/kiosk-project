export async function generateStaticParams() {
    const { categoryList } = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/categoryList').then((res) => res.json());
    // return categoryList.map((category: string) => ({
    //     slug: category,
    // }))
    return categoryList.map((category: string) => {
        return { slug: category }
    })
}

async function getData(categoryName: string) {
    return await fetch(process.env.NEXT_PUBLIC_API_URL + `/menu/${categoryName}/api`, { cache: 'no-store' }).then((res) => res.json());
}

export default async function Page({ params }: { params: { category: string } }) {
    const { category } = params;
    const menuList = await getData(category);
    console.log(menuList)
    // console.log(menuList)
    return <h1>category 별 상세 페이지 | category = {category} </h1>
}

export async function generateStaticParams() {
    const { categoryList } = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/categoryList').then((res) => res.json());
    // return categoryList.map((category: string) => ({
    //     slug: category,
    // }))
    return categoryList.map((category: string) => {
        console.log(`category:${category}`);
        return { slug: category }
    })
}

export default function Page({ params }: { params: { category: string } }) {
    const { category } = params;
    return <h1>category 별 상세 페이지 | category = {category} </h1>
}
import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <Link href="/menu" >
      <h1 style={{ height: "100vh" }}>&lt;광고페이지 &gt; 클릭하면 메뉴페이지 ㄱㄱ</h1>
    </Link >
  )
}

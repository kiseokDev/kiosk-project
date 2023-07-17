import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <Link href="/category">&lt;광고페이지 &gt; 클릭하면 메뉴페이지 ㄱㄱ</Link>

    </main>
  )
}

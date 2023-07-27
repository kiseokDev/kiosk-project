"use client"  // styledcomponent 때문에 적용
import { RecoilRoot } from 'recoil';
import { Header } from "@/components/common/header"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <RecoilRoot>
            <Header >광고헤더</Header>

            {children}
        </RecoilRoot>
    )
}


import { styled } from "styled-components"
import MenuItem from "./menuItem"

export default function MenuListComponent({ category }: { category: string }) {

    const menuList = ['햄버거1', '햄버거2', '햄버거3', '햄버거4', '햄버거5', '햄버거6', '햄버거7', '햄버거8', '햄버거9']
    return <Container>
        {/* 메뉴 로딩 페이지 | category : {category} */}
        {menuList.map((menu) => (<MenuItem menu={menu}></MenuItem>))}
    </Container>
}

const Container = styled.div`
    display : flex;
    flex-wrap : wrap;
    height : 48vh;
    background-color: aqua;
`


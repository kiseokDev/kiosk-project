import { styled } from "styled-components";


export default function MenuItem({ menu }: { menu: string }) {
    return <Item>
        <h1>
            {menu}
        </h1>
    </Item>
}


const Item = styled.div`
    border : 0.5px solid #dcdcdc;
`
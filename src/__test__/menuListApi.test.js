import { describe, expect, test } from "@jest/globals";
import { MENULIST_URL } from "@/lib/url";
import { MenuListAPI } from "@/lib/menu/api";


const MOCK_MENULIST = [{
    category: "side",
    menu_id: "3",
    menu_name: "프렌치프라이",
    menu_type: "side",
    price: 2000,
},
{
    category: "side",
    menu_id: "4",
    menu_name: "프렌치프라이(L)",
    menu_type: "side",
    price: 3000,
},
]

global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(MOCK_MENULIST)
}));
describe("MenuListAPI", () => {
    test("API를 호출하면 categoryName별로 MENU 배열객체를 반환", async () => {
        const API = new MenuListAPI(MENULIST_URL.replace('@category_name', 'side'));
        const data = await API.getData();
        expect(data).toBe(MOCK_MENULIST)
    });
});
global.fetch.mockClear();

//menuList 다시 테스트
// 0. api.url에 실제로 접근하는지 확인
// 	1. 내부에 호출함수 인자테스트하기 
//     main/side/drink를 받는지
// 2. main/side/drink 일때 결과가 다른지 테스트

// jest.mock(MenuListAPI);
// describe("MenuListAPI", () => {
//     let API = new MenuListAPI('');
//     test("main을 인자로 받을때 ", () => {
//         API = new MenuListAPI(MENULIST_URL.replace('@category_name', 'main'));
//     })
//     test("side를 인자로 받을때 ", () => {
//         API = new MenuListAPI(MENULIST_URL.replace('@category_name', 'side'));
//     })
//     test("drink를 인자로 받을때 ", () => {
//         API = new MenuListAPI(MENULIST_URL.replace('@category_name', 'drink'));
//     })
// })

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
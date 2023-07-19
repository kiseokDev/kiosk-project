import { describe, expect, test } from "@jest/globals";
import { MenuCategoryAPI, MenuListAPI } from "@/lib/menu/api";
import { MENULIST_URL, CATEGORY_URL } from "@/lib/url";


const MOCK_CATEGORY = ['main', 'side', 'drink'];
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
    json: () => Promise.resolve(MOCK_CATEGORY)
}));

describe("MenuListAPI", () => {
    test("API를 호출하면 categoryName별로 MENU 배열객체를 반환", async () => {
        const API = new MenuListAPI(MENULIST_URL.replace('@category_name', 'side'));
        const data = await API.getData();
        expect(data).toBe(MOCK_MENULIST)
    });
});

describe("API category출력 테스트", () => {
    test("api equal fetch", async () => {
        const API = new MenuCategoryAPI(CATEGORY_URL); // 같은지 확인
        const data = await API.getData(); // data 랑 categpry랑
        expect(data).toBe(MOCK_CATEGORY);
        expect(fetch).toHaveBeenCalledWith("undefined/api/categoryList", { "cache": "no-store" });
    });
});

global.fetch.mockClear();

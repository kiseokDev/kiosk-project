import { describe, expect, test } from "@jest/globals";
import { MENULIST_URL, CATEGORY_URL } from "@/lib/url";
import { MenuListAPI, MenuCategoryAPI } from "@/lib/menu/api";

const MOCK_MENULIST = [
    {
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
];

const MOCK_CATEGORY = ['main', 'side', 'drink'];

global.fetch = jest.fn((url) => {
    if (url === MENULIST_URL.replace('@category_name', 'side')) {
        return Promise.resolve({
            json: () => Promise.resolve(MOCK_MENULIST),
        });
    } else if (url === CATEGORY_URL) {
        return Promise.resolve({
            json: () => Promise.resolve(MOCK_CATEGORY),
        });
    }
});

describe("API 유닛테스트", () => {
    test("MenuListAPI : categoryName별로 MENU 배열객체를 반환", async () => {
        const API = new MenuListAPI(MENULIST_URL.replace('@category_name', 'side'));
        const data = await API.getData();
        expect(data).toBe(MOCK_MENULIST);
        expect(fetch).toHaveBeenCalledWith(`undefined/menu/side/api`, { "cache": "no-store" });
    });
    test("MenuCategoryAPI : 카테고리 리스트 반환", async () => {
        const API = new MenuCategoryAPI(CATEGORY_URL);
        const data = await API.getData();
        console.log(data)
        expect(data).toBe(MOCK_CATEGORY);
        expect(fetch).toHaveBeenCalledWith("undefined/api/categoryList", { "cache": "no-store" });
    });
});


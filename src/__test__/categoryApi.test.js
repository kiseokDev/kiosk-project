import { describe, expect, test } from "@jest/globals";
import { CATEGORY_URL } from "@/lib/url";
import { MenuCategoryAPI } from "@/lib/menu/api";

const MOCK_CATEGORY = ['main', 'side', 'drink'];

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(MOCK_CATEGORY)
}));


describe("API category출력 테스트", () => {
  test("api equal fetch", async () => {
    const API = new MenuCategoryAPI(CATEGORY_URL); // 같은지 확인
    const data = await API.getData(); // data 랑 categpry랑
    expect(data).toBe(MOCK_CATEGORY);
    expect(fetch).toHaveBeenCalledWith("undefined/api/categoryList", { "cache": "no-store" });
  });
});
global.fetch.mockClear();
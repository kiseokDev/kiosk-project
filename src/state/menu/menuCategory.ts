import { atom } from "recoil";

const category = atom({
  key: "category",
  default: "스페셜팩",
});

export { category };

// type Menu = {
//   menu_id: string;
//   menu_name: string;
//   menu_type: string; // 메뉴 타입 = 음료,메인,사이드
//   category: string;
//   image?: string; //이거 어케해야할까...
//   price: number;
//   isNew: boolean;
//   isEvent: boolean;
//   hasCombo: boolean;
//   spicy_level: string;
// };

type Menu = {
  //개발 test용
  category: string;
  menu_id: string;
  menu_name: string;
  menu_type: string;
  price: number;
};

type MenuList = Menu[];

import { NextResponse } from "next/server";
const getData = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api");
  const data = await res.json();
  return data;
};

export default getData;

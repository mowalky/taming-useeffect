import type { NextPage } from "next";

import { useFetch } from "../useFetch";

const Home: NextPage = () => {
  const { data } = useFetch({ url: "/test.json" });
  console.log("app rendering");
  return (
    <>
      <div>hello</div>
      <div>{JSON.stringify(data)}</div>
    </>
  );
};

export default Home;

import { url } from "inspector";
import type { NextPage } from "next";
import { useState, useMemo } from "react";

import { useFetch } from "../useFetch";

const Home: NextPage = () => {
  const [url, setUrl] = useState("");
  const myOptions = useMemo(() => ({ url }), [url]);
  const { data } = useFetch(myOptions);
  console.log("app rendering");
  return (
    <>
      <div>hello</div>
      <div>{JSON.stringify(data)}</div>
      <div>
        <button onClick={() => setUrl("/test.json")}>change url</button>
        <button onClick={() => setUrl("/user.json")}>change url</button>
      </div>
    </>
  );
};

export default Home;

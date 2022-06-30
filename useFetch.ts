import React, { useEffect, useState } from "react";

export type fetchOptions = {
  url: string;
};

export const useFetch = (options: fetchOptions) => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch(options.url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return { data };
};

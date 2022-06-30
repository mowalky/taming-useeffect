import React, { useEffect, useState } from "react";

export type fetchOptions = {
  url: string;
};

export const useFetch = (options: fetchOptions) => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (options.url) {
      fetch(options.url)
        .then((res) => res.json())
        .then((data) => setData(data));
    }
  }, [options.url]);

  return { data };
};

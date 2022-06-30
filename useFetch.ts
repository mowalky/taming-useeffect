import React, { useState } from "react";

export const useFetch = (options: object) => {
  const [data, setData] = useState<any>(null);
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState<any>();

  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await fetch(url);
  //       const json = await response.json();
  //       setData(json);
  //     } catch (error) {
  //       setError(error);
  //     }
  //     setLoading(false);
  //   };

  //   React.useEffect(() => {
  //     fetchData();
  //   }, [url]);

  return { data };
};

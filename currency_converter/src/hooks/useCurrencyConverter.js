import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState(null);
  let url = `http://www.floatrates.com/daily/${currency}.json`;

  useEffect(
    function () {
      async function getApiData() {
        try {
          const apiData = await fetch(url);
          const response = await apiData.json();
          setData(response);
          return response;
        } catch (err) {
          console.log("The error is ", err);
          setData(null);
        }
      }
      getApiData();
    },
    [currency, url]
  );

  return data;
}

export default useCurrencyInfo;

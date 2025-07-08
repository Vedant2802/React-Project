// import { useRef } from "react";

// const useHookOne = (data) => {
//   console.log("hook one called");
//   const firstData = data;
//   const secondData = data;
//   //   console.log(firstData, secondData);
//   return [firstData, secondData];
// };

// export default useHookOne;

import { useRef } from "react";

const useHookOne = (idealScreenObj) => {
  //   const initialRef = useRef(data);
  //   const current = data;

  if (idealScreenObj) {
    idealScreenObj.current = useRef({
      isZapping: true,
      name: "Akshat",
      last: "Vedant",
    });
  }
  return [idealScreenObj];
};

export default useHookOne;

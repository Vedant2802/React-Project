// import { useRef } from "react";

// const useHookOne = (data) => {
//   console.log("hook one called");
//   const firstData = data;
//   const secondData = data;
//   //   console.log(firstData, secondData);
//   return [firstData, secondData];
// };

// export default useHookOne;

// import { useRef } from "react";

// const useHookOne = (idealScreenObj) => {
//   //   const initialRef = useRef(data);
//   //   const current = data;

//   if (idealScreenObj) {
//     idealScreenObj.current = {
//       isZapping: true,
//       name: "Akshat",
//       last: "Vedant",
//     };
//   }
//   return [idealScreenObj];
// };

// export default useHookOne;

import { useEffect } from "react";

const useHookOne = (setIdealScreenObj) => {
  useEffect(() => {
    if (setIdealScreenObj) {
      setIdealScreenObj({
        isZapping: true,
        name: "Akshat",
        last: "Vedant",
      });
    }
  }, [setIdealScreenObj]);

  return null; // or nothing
};

export default useHookOne;

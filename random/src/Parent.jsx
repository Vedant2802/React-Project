import React, { useRef, useState } from "react";
import useHookOne from "./hookOne";
import useHookTwo from "./hookTwo";

function Parent() {
  console.log("parentcalled");
  //   const idealScreenObj = useRef({});
  const [idealScreenObj, setIdealScreenObj] = useState({});

  // const data = [1, 2, 3, 4, 5];
  const [data2] = useHookTwo(idealScreenObj);
  //   const [a, b] = useHookOne(idealScreenObj);
  //   const [a, b] = useHookOne(setIdealScreenObj);
  useHookOne(setIdealScreenObj);

  return <div>parent</div>;
}

export default Parent;

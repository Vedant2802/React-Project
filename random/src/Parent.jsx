import React, { useRef } from "react";
import useHookOne from "./hookOne";
import useHookTwo from "./hookTwo";

function Parent() {
  console.log("parentcalled");
  const idealScreenObj = useRef({});
  const data = [1, 2, 3, 4, 5];
  const [a, b] = useHookOne(idealScreenObj);
  const [data2] = useHookTwo(idealScreenObj);
  return <div>parent</div>;
}

export default Parent;

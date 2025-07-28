import React, { useCallback, useRef, useState } from "react";
import useHookOne from "./hookOne";
import useHookTwo from "./hookTwo";
import Children from "./Children";

function Parent() {
  console.log("parentcalled");
  //   const idealScreenObj = useRef({});
  const [idealScreenObj, setIdealScreenObj] = useState({});
  const elementRefs = useRef({});
  const data = [1, 2, 3, 4, 5];
  const [data2] = useHookTwo(idealScreenObj);
  //   const [a, b] = useHookOne(idealScreenObj);
  //   const [a, b] = useHookOne(setIdealScreenObj);
  useHookOne(setIdealScreenObj);
  const countRefs = useCallback(
    (id) => (element) => {
      if (element) {
        elementRefs.current[id] = element;
      } else {
        delete elementRefs.current[id]; // Cleanup on unmount
      }
    },
    []
  );
  console.log(elementRefs);

  return (
    <div className="parent">
      <Children setRef={countRefs} />
    </div>
  );
}

export default Parent;

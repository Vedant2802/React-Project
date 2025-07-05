import Grandaughter from "./Grandaughter";
import Grandson from "./Grandson";
import FamilyContext from "./FamilyContext";

import { useContext } from "react";

//using props
// export default function Children({ secret }) {
//   return (
//     <div
//       style={{
//         width: "600px",
//         height: "200px",
//         border: "2px solid black",
//         padding: "4px",
//       }}
//     >
//       <Grandaughter secret={secret} />
//       <Grandson secret={secret} />
//       Children
//     </div>
//   );
// }

//using context
export default function Children() {
  const secret = useContext(FamilyContext);

  return (
    <div
      style={{
        width: "600px",
        height: "200px",
        border: "2px solid black",
        padding: "4px",
      }}
    >
      <Grandaughter />
      <Grandson />
      Children
    </div>
  );
}

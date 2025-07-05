import { useContext } from "react";
import FamilyContext from "./FamilyContext";

// using props
// export default function Grandaughter({ secret }) {
//   return (
//     <div
//       style={{
//         border: "2px solid black",
//         height: "50px",
//         width: "400px",
//         padding: "4px",
//       }}
//     >
//       <p>{`Grandaughter ${secret.onlyGrandChildrenShouldKnow()}`}</p>
//     </div>
//   );
// }

//using context
export default function Grandaughter() {
  const secret = useContext(FamilyContext);

  return (
    <div
      style={{
        border: "2px solid black",
        height: "50px",
        width: "400px",
        padding: "4px",
      }}
    >
      <p>{`Grandaughter ${secret.onlyGrandChildrenShouldKnow()}`}</p>
    </div>
  );
}

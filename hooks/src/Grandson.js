import { useContext } from "react";
import FamilyContext from "./FamilyContext";

//using props
// export default function Grandson() {
//   return (
//     <div
//       style={{
//         border: "2px solid black",
//         height: "50px",
//         width: "400px",
//         padding: "4px",
//       }}
//     >
//       <p>{`Grandson ${secret.onlyGrandChildrenShouldKnow()}`}</p>
//     </div>
//   );
// }

//context
export default function Grandson() {
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
      <p>{`Grandson ${secret.onlyGrandChildrenShouldKnow()}`}</p>
    </div>
  );
}

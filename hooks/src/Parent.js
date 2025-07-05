import Children from "./Children";
import FamilyContext from "./FamilyContext";

import { useContext } from "react";

//using props

// export default function Parent({ secret }) {
//   return (
//     <div
//       style={{
//         height: "300px",
//         width: "800px",
//         border: "2px solid black",
//         padding: "4px",
//       }}
//     >
//       {`Parent "${secret?.familyName}"`}
//       <p>{secret?.onlyParentCanSee()}</p>
//       <Children secret={secret} />
//     </div>
//   );
// }

//using context

export default function Parent() {
  const secret = useContext(FamilyContext);

  return (
    <div
      style={{
        height: "300px",
        width: "800px",
        border: "2px solid black",
        padding: "4px",
      }}
    >
      {`Parent "${secret?.familyName}"`}
      <p>{secret?.onlyParentCanSee()}</p>
      <Children />
    </div>
  );
}

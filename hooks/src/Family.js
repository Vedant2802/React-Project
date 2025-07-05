import Parent from "./Parent";
import FamilyContext from "./FamilyContext";
import { useContext } from "react";

// export default function Family({ secret }) {
//   const { familyName, onlyParentCanSee, onlyGrandChildrenShouldKnow } = secret;
//   console.log(familyName);

//   document.body.style.background = "gray";
//   // function Parent() {
//   //   return (
//   //     <div
//   //       style={{
//   //         height: "300px",
//   //         width: "300px",
//   //         border: "2px solid black",
//   //         padding: "4px",
//   //       }}
//   //     >
//   //       Parent
//   //       <Children />
//   //     </div>
//   //   );
//   // }

//   // function Children() {
//   //   return (
//   //     <div
//   //       style={{
//   //         width: "200px",
//   //         height: "200",
//   //         border: "2px solid black",
//   //         padding: "4px",
//   //       }}
//   //     >
//   //       <Grandaughter />
//   //       <Grandson />
//   //       Children
//   //     </div>
//   //   );
//   // }

//   // function Grandaughter() {
//   //   return (
//   //     <div
//   //       style={{
//   //         border: "2px solid black",
//   //         height: "40px",
//   //         width: "100px",
//   //         padding: "4px",
//   //       }}
//   //     >
//   //       Grandaughter
//   //     </div>
//   //   );
//   // }

//   // function Grandson() {
//   //   return (
//   //     <div
//   //       style={{
//   //         border: "2px solid black",
//   //         height: "40px",
//   //         width: "100px",
//   //         padding: "4px",
//   //       }}
//   //     >
//   //       Grandson
//   //     </div>
//   //   );
//   // }

//   //using props

//   return (
//     <div
//       style={{
//         border: "2px solid black",
//         height: "400px",
//         width: "1000px",
//         padding: "4px",
//       }}
//     >
//       <Parent secret={secret} />
//       Family
//     </div>
//   );
// }

// using context
export default function Family() {
  document.body.style.background = "gray";
  const secret = useContext(FamilyContext);
  // function Parent() {
  //   return (
  //     <div
  //       style={{
  //         height: "300px",
  //         width: "300px",
  //         border: "2px solid black",
  //         padding: "4px",
  //       }}
  //     >
  //       Parent
  //       <Children />
  //     </div>
  //   );
  // }

  // function Children() {
  //   return (
  //     <div
  //       style={{
  //         width: "200px",
  //         height: "200",
  //         border: "2px solid black",
  //         padding: "4px",
  //       }}
  //     >
  //       <Grandaughter />
  //       <Grandson />
  //       Children
  //     </div>
  //   );
  // }

  // function Grandaughter() {
  //   return (
  //     <div
  //       style={{
  //         border: "2px solid black",
  //         height: "40px",
  //         width: "100px",
  //         padding: "4px",
  //       }}
  //     >
  //       Grandaughter
  //     </div>
  //   );
  // }

  // function Grandson() {
  //   return (
  //     <div
  //       style={{
  //         border: "2px solid black",
  //         height: "40px",
  //         width: "100px",
  //         padding: "4px",
  //       }}
  //     >
  //       Grandson
  //     </div>
  //   );
  // }

  //using props

  return (
    <div
      style={{
        border: "2px solid black",
        height: "400px",
        width: "1000px",
        padding: "4px",
      }}
    >
      <Parent />
      Family
    </div>
  );
}

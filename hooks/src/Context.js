import Family from "./Family";
import FamilyContext from "./FamilyContext";

export default function Context() {
  const familySecret = {
    familyName: "The Smiths",
    onlyParentCanSee: function () {
      return "smiths are the best";
    },
    onlyGrandChildrenShouldKnow: function () {
      return "They are the best";
    },
  };
  return (
    <FamilyContext.Provider value={familySecret}>
      {/* <Family secret={familySecret} /> */}
      <Family />
    </FamilyContext.Provider>
  );
}

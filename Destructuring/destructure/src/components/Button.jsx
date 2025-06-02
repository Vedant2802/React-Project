import React from "react";

// function Button(props) {
//   console.log(props);
//   return <div>Button</div>;
// }

function Button({ type = "Not-submit", textStyle, imageStyle, ...props }) {
  console.log(props);
  return (
    <div
      className={`flex justify-center mt-24 border-2 rounded-xl bg-gray-300 cursor-pointer ${textStyle} ${imageStyle}`}
    >
      Button
    </div>
  );
}

export default Button;

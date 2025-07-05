import React, { useRef, useState } from "react";

function Focus() {
  const focusRef = useRef(null);
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const showPassword = () => {
    setShow((prev) => !prev);
  };

  const calculatedWidth = Math.max(150, value.length * 8 + 20);

  return (
    <>
      <label style={{ fontSize: "40px" }}>Input</label>
      <br />
      <input
        placeholder="Type"
        type={show ? "text" : "password"}
        ref={focusRef}
        value={value}
        onChange={handleChange}
        style={{
          border: "2px solid green",
          borderRadius: "10px",
          marginTop: "12px",
          height: "40px",
          width: `${calculatedWidth}px`,
          transition: "width 0.2s ease",
        }}
      />
      <br />
      <button onClick={showPassword} style={{ marginTop: "12px" }}>
        {" "}
        Show{" "}
      </button>
    </>
  );
}

export default Focus;

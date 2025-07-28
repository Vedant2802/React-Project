import React from "react";

function Children({ setRef }) {
  const listItems = Array.from({ length: 5 }, () => crypto.randomUUID());

  return (
    <div className="children">
      <ul>
        {listItems.map((id) => (
          <li key={id} ref={setRef(id)}>
            {id}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Children;

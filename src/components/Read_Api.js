import React from "react";

function Read_Api({ var_x }) {
  return (
    <div style={{ marginLeft: "1rem", maxWidth: "40rem", background: "#f6f6f6", borderRadius: "1rem"}}>
      <p style={{fontSize: "2rem",fontWeight: "bold" }}>{var_x.title}</p>
      <p>{var_x.body}</p>
    </div>
  );
}

export default Read_Api;

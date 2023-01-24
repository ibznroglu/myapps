import React from "react";

const Style2 = () => {
  const styleTitle = {
    fontSize: "2rem",
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
  };
  return (
    <div>
      <h2 style={styleTitle}>JSX Loops</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta fugiat
        earum tempora corrupti adipisci nobis quidem repudiandae, doloremque
        laborum, dolores ut eum! Quidem non adipisci soluta? Nam similique iusto
        iste?
      </p>
      <h2 style={{ ...styleTitle, color: "blue" }}>Component Props</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit deleniti
        a velit illum facere eligendi recusandae ipsam veniam unde, odit, totam
        qui non! Ab molestiae, quo laudantium eveniet vitae voluptatum.
      </p>
    </div>
  );
};

export default Style2;

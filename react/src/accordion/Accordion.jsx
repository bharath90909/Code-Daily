import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const accordions = Array.from({ length: 5 }, (_, i) => {
  return {
    id: i,
    heading: `Accordion ${i + 1}`,
    content: `Accordion ${i + 1} is Opened`,
  };
});

const styles = {
  "accordion-container": {
    width: "500px",
    margin: "0px auto",
    display: "flex",
    "flex-direction": "column",
    gap: "20px",
  },
  accordion: {
    border: "1px solid red",
    padding: "10px",
    cursor: "pointer",
  },
};

function Accordion() {
  const [openAccIndex, setOpenAccIndex] = useState(-1);
  const [expandAll, setExpandAll] = useState(false);

  const handleAccordion = (index) => {
    setOpenAccIndex((prevIndex) => (prevIndex !== index ? index : -1));
  };



  return (
    <div style={styles["accordion-container"]}>
      <div>
        <button onClick={() => {
            setExpandAll(true)
            setOpenAccIndex(-1)
            }}>Expand All</button>
        <button onClick={() => {
            setExpandAll(false)
            setOpenAccIndex(-1)
        }}>Close All</button>
      </div>
      {accordions.map((accordion, index) => (
        <div
          key={accordion.id}
          style={styles["accordion"]}
          onClick={() => handleAccordion(index)}
        >
          <h1>{accordion.heading}</h1>
          {(expandAll || index === openAccIndex) && <p>{accordion.content}</p>}
        </div>
      ))}
    </div>
  );
}

export default Accordion;

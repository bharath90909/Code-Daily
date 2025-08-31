import React, { useEffect } from "react";
import { useState } from "react";
import "./grid.css";
function GridLights() {
  const [selectedGrids, setSelectedGrids] = useState([]);
  const [isDeactivating, setIsDeactivating] = useState(false);

  useEffect(() => {
    let timer;
    if (selectedGrids.length === 9) setIsDeactivating(true);
    if (isDeactivating) {
      timer = setInterval(() => {
        const updatedGrids = [...selectedGrids];
        updatedGrids.pop();
        if (updatedGrids.length === 0) setIsDeactivating(false);
        setSelectedGrids(updatedGrids);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [selectedGrids, isDeactivating]);

  const handleGridSelection = (index) => {
    if (!selectedGrids.includes(index) && !isDeactivating) {
      setSelectedGrids((prevGrids) => [...prevGrids, index]);
    }
  };
  return (
    <div className="grid-container">
      {Array.from({ length: 9 }, (_, index) => (
        <div
          key={index}
          className={`grid-item grid-item-${index+1}`}
          onClick={() => handleGridSelection(index)}
          style={{
            background: selectedGrids.includes(index) ? "green" : "white",
          }}
        >
          Grid Item
        </div>
      ))}
    </div>
  );
}

export default GridLights;

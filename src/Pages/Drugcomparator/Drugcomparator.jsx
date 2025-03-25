import React, { useState } from "react";
import "./Drugcomparator.css";
import "bootstrap/dist/css/bootstrap.min.css";

const DrugComparator = () => {
  const [drugs, setDrugs] = useState([]);

  const addDrug = (e) => {
    if (e.key && e.key !== "Enter") return; // Ensure it only triggers on Enter key
  
    const input = document.getElementById("drug-input").value;
    if (input.trim() !== "") {
      setDrugs([...drugs, input]);
      document.getElementById("drug-input").value = "";
    }
  };
  
  return (
    <div className="body">
      {/* Search Section */}
      <div className="search-section">
        <h1 className="gradient-text">DRUG COMPARATOR</h1>
        <hr className="transparent-line" />
        <p>Enter two or more drugs that you want to compare</p>
        <div className="input-group">
          <input type="text" id="drug-input" placeholder="Enter drug name..." onKeyDown={addDrug}/>
          <button onClick={addDrug}>ADD</button>
        </div>
      </div>

      {/* Drug Comparison Section */}
      {drugs.length > 0 && (
        <div className="comparison-section">
          <h2>"Use medicines responsibly and as directed to ensure safe and effective treatment."</h2>
          <h1>DRUG COMPARISON</h1>
         
          <div className="drug-cards">
            {drugs.map((drug, index) => (
              <div className="drug-card" key={index}>
                <h1 className="gradient-text">{drug}</h1>
                <hr className="transparent-line" />
                <h4 className="gradient-text">Uses</h4>
                <p>Add a short bio for each drug. Make it brief and informative.</p>
                <h4 className="gradient-text">Composition</h4>
                <p>Add a short bio for each drug. Make it brief and informative.</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DrugComparator;

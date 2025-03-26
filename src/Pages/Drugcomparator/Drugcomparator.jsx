import React, { useState } from "react";
import "./Drugcomparator.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dna from "../../assets/Dna.jpg"; // Ensure your DNA image is saved in the src folder

const DrugComparator = () => {
  const [drugs, setDrugs] = useState([]);

  const addDrug = (e) => {
    if (e.key && e.key !== "Enter") return;

    const input = document.getElementById("drug-input").value;
    if (input.trim() !== "") {
      setDrugs([...drugs, input]);
      document.getElementById("drug-input").value = "";
    }
  };

  return (
    <div className="body">
      <div className="container">
        {/* Left Section - Input and Heading */}
        <div className="left-section">
          <h1 className="gradient-text title">DRUG COMPARATOR</h1>
          <p className="sub-text">
            Enter two or more drugs that you want to compare
          </p>

          {/* Input and Add Button */}
          <div className="input-group">
            <input
              type="text"
              id="drug-input"
              placeholder="Enter drug name..."
              onKeyDown={addDrug}
            />
            <button onClick={addDrug}>ADD</button>
            <div className="added-drugs">
            {drugs.map((drug, index) => (
              <span key={index} className="added-drug">
                {drug}
              </span>
            ))}
          </div>
          </div>
        </div>
        
        {/* Right Section - DNA Image */}
        <div className="right-section">
          <img src={Dna} alt="DNA Structure" className="dna-image" />
        </div>
      </div>

      {/* Drug Comparison Section */}
      {drugs.length > 0 && (
        <div className="comparison-section">
          <h2>
            "Use medicines responsibly and as directed to ensure safe and
            effective treatment."
          </h2>
          <h1>DRUG COMPARISON</h1>

          <div className="drug-cards">
            {drugs.map((drug, index) => (
              <div className="drug-card" key={index}>
                <h2 className="gradient-text">{drug}</h2>
                <hr className="transparent-line" />
                <h4 className="gradient-text">Uses</h4>
                <p>Aspirin is used to relieve pain, reduce inflammation, and lower fever. It is also used to prevent blood clots, reducing the risk of heart attacks and strokes.</p>
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
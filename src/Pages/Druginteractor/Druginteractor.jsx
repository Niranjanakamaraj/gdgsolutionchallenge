import React, { useState } from "react";
import "./Druginteractor.css";
import Crystal from "../../assets/Crystal.jpg";

const DrugInteraction = () => {
  const [molecules, setMolecules] = useState([]);
  const [input, setInput] = useState("");

  // Add molecule to the list
  const addMolecule = () => {
    if (input.trim() && !molecules.includes(input.trim())) {
      setMolecules([...molecules, input.trim()]);
      setInput("");
    }
  };

  // Remove molecule from the list
  const removeMolecule = (molecule) => {
    setMolecules(molecules.filter((m) => m !== molecule));
  };

  return (
    <div className="interaction-container">
      <div className="background-image">
        <img src={Crystal} alt="Drug Background" />
      </div>

      {/* Header */}
      <h1 className="drug-title">DRUG INTERACTOR</h1>

      {/* Input Section */}
      <div className="input-section">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search for a molecule..."
        />
        <button className="plus-button" onClick={addMolecule}>+</button>
      </div>

      {/* Molecule Display */}
      <div className="molecule-list">
        {molecules.map((molecule, index) => (
          <div key={index} className="molecule-item">
            {molecule}
            <span
              className="remove-btn"
              onClick={() => removeMolecule(molecule)}
            >
              ✖
            </span>
          </div>
        ))}
      </div>

      {/* Interaction Result */}
      {molecules.length >= 2 && (
        <div className="interaction-result">
          <h2>Possible Interactions:</h2>
          {molecules.map((molecule, index) => (
            <p key={index}>⚠️ Interaction with {molecule}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default DrugInteraction;
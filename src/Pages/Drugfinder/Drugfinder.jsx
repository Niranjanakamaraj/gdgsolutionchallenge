import React, { useState, useEffect } from "react";
import "./Drugfinder.css";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary chart components
Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Drugfinder = () => {
  const [search, setSearch] = useState("");
  const [drug, setDrug] = useState(null);
  const [predictions, setPredictions] = useState(null);

  // Function to simulate fetching drug data
  const handleSearch = () => {
    if (search.toLowerCase() === "paracetamol") {
      setDrug({
        name: "PARACETAMOL",
        description:
          "Paracetamol is a widely used pain reliever and fever reducer. It helps alleviate headaches, muscle pain, and fever.",
        warning:
          "Excessive use can cause liver damage. Avoid taking with alcohol. Consult a doctor if symptoms persist.",
        sideEffects:
          "Common side effects include nausea, vomiting, and stomach pain. Rare allergic reactions may occur.",
        composition:
          "Paracetamol (acetaminophen) - Chemical formula: C₈H₉NO₂.",
        uses:
          "Used to treat headaches, muscle aches, fever, and colds.",
      });

      // Simulate fetching model predictions (replace this with an actual API call)
      setPredictions({
        mw: 151.16, // Molecular weight (example)
        polararea: 23.45, // Polar area (example)
      });
    } else {
      setDrug(null);
      setPredictions(null);
    }
  };

  // Line chart data
  const data = {
    labels: ["Week 0", "Week 2", "Week 4", "Week 8", "Week 12"],
    datasets: [
      {
        label: "Placebo",
        data: [0, 2, 4, 6, 8],
        borderColor: "blue",
        borderWidth: 2,
        fill: false,
      },
      {
        label: "Abrocitinib 100 mg",
        data: [0, 5, 10, 18, 24],
        borderColor: "red",
        borderWidth: 2,
        fill: false,
      },
      {
        label: "Abrocitinib 200 mg",
        data: [0, 12, 28, 36, 44],
        borderColor: "cyan",
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
    },
    scales: {
      y: { beginAtZero: true, max: 50 },
    },
  };

  return (
    <div className="drug-body">
      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by drug name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
      </div>

      {/* Display Drug Info */}
      {drug && (
        <div className="drug-info">
          <h1>{drug.name}</h1>

          {/* Drug Details */}
          <div className="drug-details">
            <h3 className="gradient-text">Description</h3>
            <p>{drug.description}</p>

            <h3 className="warning-text">⚠️ Warning</h3>
            <p className="warning">{drug.warning}</p>

            <h3 className="gradient-text">Side Effects</h3>
            <p>{drug.sideEffects}</p>

            <h3 className="gradient-text">Composition</h3>
            <p>{drug.composition}</p>

            <h3 className="gradient-text">Used For</h3>
            <p>{drug.uses}</p>
          </div>

          {/* Displaying Predictions */}
          {predictions && (
            <div className="drug-predictions">
              <h3 className="gradient-text">Predicted Properties</h3>
              <p><strong>Molecular Weight (MW):</strong> {predictions.mw}</p>
              <p><strong>Polar Area:</strong> {predictions.polararea}</p>
            </div>
          )}

          {/* Severity Graph */}
          <div className="graph-container">
            <h2>Severity of Drug</h2>
            <Line key={JSON.stringify(data)} data={data} options={options} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Drugfinder;
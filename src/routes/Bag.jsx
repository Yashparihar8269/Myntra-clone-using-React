import React from "react";
import BagSummary from "../components/BagSummary";
import BagItem from "../components/BagItem";

function Bag() {
  return (
    <>
      <main>
      <div className="bag-page">
        <div className="bag-items-container">
        <BagItem />
        </div>
        <BagSummary />
      </div>
      </main>
    </>
  );
}

export default Bag;

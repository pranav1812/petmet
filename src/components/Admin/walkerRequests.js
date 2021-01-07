import React, { useState, useEffect } from "react";
import WalkerCard from "./WalkerCard";

const walkerRequests = () => {
  return (
    <div>
      <div className="row">
        <div className="col-12 col-md-6">
          <WalkerCard />
        </div>
      </div>
    </div>
  );
};
export default walkerRequests;

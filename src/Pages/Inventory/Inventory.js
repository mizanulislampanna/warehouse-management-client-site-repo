import React from "react";
import useBikes from "../Hooks/useBikes";
import Bike from "../Shared/Bike";

const Inventory = () => {
  const [bikes, setBikes] = useBikes([]);
  return (
    <div className="mt-20">
      <h1 className="text-4xl text-primary text-center font-bold my-10">
        Our Bikes
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        {bikes.map((bike) => (
          <Bike key={bike._id} bike={bike}></Bike>
        ))}
      </div>
    </div>
  );
};

export default Inventory;

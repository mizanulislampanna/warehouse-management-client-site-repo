import React from "react";
import { Link } from "react-router-dom";
import useBikes from "../Hooks/useBikes";
import Bike from "../Shared/Bike";

const HomepageBikes = () => {
  const [bikes, setBikes] = useBikes([]);
  const homeBikes = bikes.slice(1, 4);
  return (
    <div className="mt-20">
      <h1 className="text-3xl text-center font-bold">Our Bikes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        {homeBikes.map((bike) => (
          <Bike key={bike._id} bike={bike}></Bike>
        ))}
      </div>
      <div className="w-full">
        <Link className="btn btn-primary mb-10  mx-auto" to={"/manage"}>
          Manage Inventory
        </Link>
      </div>
    </div>
  );
};

export default HomepageBikes;

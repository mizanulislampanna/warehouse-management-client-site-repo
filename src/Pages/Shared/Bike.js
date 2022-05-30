import React from "react";
import { useNavigate } from "react-router-dom";

const Bike = ({ bike }) => {
  const navigate = useNavigate();

  const navigateToBikeDetail = (id) => {
    navigate(`/bike/${id}`);
  };
  return (
    <div class="card w-96 bg-base-100 shadow-xl mb-5">
      <figure>
        <img src={bike.img} alt="Bike" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{bike.name}</h2>
        <p>Description: {bike.description.slice(0, 80)}</p>
        <p>Supplier: {bike.supplier}</p>
        <p>Available: {bike.Avilable}</p>
        <p>
          Price: <span className="text-2xl font-bold">{bike.price}$</span>
        </p>
        <div class="card-actions justify-end">
          <button
            onClick={() => navigateToBikeDetail(bike._id)}
            class="btn btn-primary"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bike;

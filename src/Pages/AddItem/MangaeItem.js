import React from "react";
import useBikes from "../Hooks/useBikes";

const ManageItems = () => {
  const [bikes, setBikes] = useBikes();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `http://localhost:5000/bike/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = bikes.filter((bikes) => bikes._id !== id);
          setBikes(remaining);
        });
    }
  };
  return (
    <div className="w-50 mx-auto">
      <h2>Manage your bikes</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>*</th>
              <th>Name</th>
              <th>price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {bikes.map((bike) => (
              <tr key={bike._id}>
                <th>*</th>
                <td>{bike.name}</td>
                <td>{bike.price}</td>

                <td>
                  <button
                    className="bg-red-500 p-3 rounded-sm"
                    onClick={() => handleDelete(bike._id)}
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;

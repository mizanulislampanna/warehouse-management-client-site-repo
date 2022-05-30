import React from "react";
import { useForm } from "react-hook-form";

const AddItem = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/bike`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div className="w-50 mx-auto">
      <h2 className="text-center text-primary text-3xl font-bold my-10">
        Please add a bike
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto mb-10">
          <div class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                class="input input-bordered"
                {...register("name", { required: true, maxLength: 20 })}
              />
              <label class="label">
                <span class="label-text">Description</span>
              </label>
              <textarea
                rows="4"
                cols="50"
                className="mb-2 border-2"
                placeholder="Description"
                {...register("description")}
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Price</span>
              </label>
              <input
                type="number"
                placeholder="price"
                class="input input-bordered"
                {...register("price")}
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Available</span>
              </label>
              <input
                type="number"
                placeholder="Available"
                class="input input-bordered"
                {...register("Avlable")}
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Supplier</span>
              </label>
              <input
                type="text"
                placeholder="supplier"
                class="input input-bordered"
                {...register("supplier")}
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Photo url</span>
              </label>
              <input
                type="text"
                placeholder="photo url"
                class="input input-bordered"
                {...register("img")}
              />
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary">Add Item</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddItem;

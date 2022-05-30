import { useParams } from "react-router-dom";
import useBikeDetail from "../Hooks/useBikeDetail";

const BikeDetail = () => {
  const params = useParams();
  const bikeId = params.bikeId;
  const [bikes] = useBikeDetail(bikeId);
  console.log(bikeId);

  return (
    <div>
      <div class="card w-2/4 mx-auto my-10 card-side bg-base-100 shadow-xl">
        <figure className="w-2/4">
          <img src={bikes.img} alt="Movie" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{bikes.name}</h2>
          <p>Id: {bikes._id}.</p>
          <p>Supplier: {bikes.supplier}.</p>
          <p>QuanTity: {bikes.Avilable}.</p>
          <input
            className="border-md border-2 rounded-sm"
            placeholder="Restock"
            type="number"
          />
          <button className="btn btn-primary">Restock</button>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Delivered</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BikeDetail;

import { useEffect, useState } from "react";

const useBikeDetail = (bikeId) => {
  const [bikes, setBikes] = useState({});
  console.log(bikes);

  useEffect(() => {
    const url = `http://localhost:5000/bike/${bikeId}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBikes(data));
  }, [bikeId]);
  return [bikes];
};

export default useBikeDetail;

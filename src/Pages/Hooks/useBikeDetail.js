import { useEffect, useState } from "react";

const useBikeDetail = (bikeId) => {
  const [bikes, setBikes] = useState({});
  console.log(bikes);

  useEffect(() => {
    const url = `https://serene-savannah-36871.herokuapp.com/bike/${bikeId}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBikes(data));
  }, [bikeId]);
  return [bikes];
};

export default useBikeDetail;

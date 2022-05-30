import { useEffect, useState } from "react";

const useBikes = () => {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    fetch("https://serene-savannah-36871.herokuapp.com/bike")
      .then((res) => res.json())
      .then((data) => setBikes(data));
  }, []);
  return [bikes, setBikes];
};

export default useBikes;

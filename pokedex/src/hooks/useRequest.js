import axios from "axios";
import { useEffect, useState } from "react";


const useRequestData = (initial, url) => {
  const [data, setData] = useState(initial);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
        // alert("Ocorreu um erro, tente novamente");
      });
  }, [url]);

  return data;
};

export default useRequestData;
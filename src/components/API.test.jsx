import axios from "axios";
import React, { useEffect } from "react";

const APITest = () => {
  const getDataQuran = async () => {
    const response = await axios.get(
      "https://api.alquran.cloud/v1/page/1/en.asad"
    );
    console.log(response);
  };

  useEffect(() => {
    getDataQuran();
  }, []);
  return;
};

export default APITest;

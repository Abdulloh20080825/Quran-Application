import axios from "axios";
import React, { useEffect, useState } from "react";
import Search from "../constants/Search";

const GetDjuzQuran = () => {
  const [quranDjuzData, setQuranDjuzData] = useState([]);

  const getDataQuran = async () => {
    const response = await axios.get(
      "https://api.alquran.cloud/v1/juz/29/en.asad"
    );
  };

  useEffect(() => {
    getDataQuran();
  }, []);

  return (
    <div>
      <Search />
    </div>
  );
};

export default GetDjuzQuran;

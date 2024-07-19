import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./quran.private.css";

const ShowSelectedDjuzAyahs = ({ ayah }) => {
  return (
    <div>
      {ayah.surah.name}
      <div>
        <p>{ayah.text}</p>
      </div>
    </div>
  );
};

const GetDjuzQuran = () => {
  const [quranDjuzData, setQuranDjuzData] = useState({});
  const [numberOfDjuz, setNumberOfDjuz] = useState(1);
  const [selectedDjuzAyahs, setSelectedDjuzAyahs] = useState([]);

  const getDataQuran = async () => {
    try {
      const response = await axios.get(
        `https://api.alquran.cloud/v1/juz/${numberOfDjuz}/en.asad`
      );
      setQuranDjuzData(response.data.data);
      setSelectedDjuzAyahs(response.data.data.ayahs);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (numberOfDjuz >= 1) {
      getDataQuran();
    }
    // eslint-disable-next-line
  }, [numberOfDjuz]);

  const searchHandler = (e) => {
    e.preventDefault();
    getDataQuran();
    setNumberOfDjuz("");
  };

  return (
    <div className="get-djuz">
      <p>Search Djuz of quran</p>
      <form onSubmit={searchHandler}>
        <input
          type="number"
          min={1}
          max={30}
          value={numberOfDjuz}
          onChange={(e) => setNumberOfDjuz(e.target.value)}
        />
      </form>

      <h3>Selected Djuz: {quranDjuzData.number}</h3>
      {selectedDjuzAyahs.map((ayah, index) => (
        <ShowSelectedDjuzAyahs ayah={ayah} key={index} />
      ))}
    </div>
  );
};

export default GetDjuzQuran;

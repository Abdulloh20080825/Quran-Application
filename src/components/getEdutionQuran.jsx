import axios from "axios";
import React, { useEffect, useState } from "react";
import "./quran.private.css";
import { useNavigate } from "react-router-dom";

const GetEdutionQuran = () => {
  const [getEdutionQuran, setGetEdutionQuran] = useState({});
  const [getAllSurahs, setGetAllSuarhs] = useState([]);
  const navigate = useNavigate();

  const getDataQuran = async () => {
    try {
      const response = await axios.get(
        "https://api.alquran.cloud/v1/quran/en.asad"
      );
      setGetEdutionQuran(response.data.data);
      setGetAllSuarhs(response?.data?.data?.surahs);
    } catch (error) {}
  };

  useEffect(() => {
    getDataQuran();
  }, []);
  const viewsSurahHandler = (name) => {
    return name ? navigate(`/surah/${name}`) : navigate("/");
  };

  return (
    <div className="edution-quran">
      <h1>All Surahs</h1>
      <div className="surah-items">
        {getAllSurahs.map((item, index) => (
          <div key={index} className="surah-item">
            <p onClick={() => viewsSurahHandler(index + 1)}>
              {index + 1}: {item.englishName} - ({item.name} - (
              {item.englishNameTranslation}
              ))
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetEdutionQuran;

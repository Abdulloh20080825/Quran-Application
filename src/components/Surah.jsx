import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./surah.css";

const Surah = () => {
  const [surah, setSurah] = useState({});
  const [ayahs, setAyahs] = useState([]);
  const { id } = useParams();
  console.log(id);

  const getSurahData = async () => {
    const data = await axios.get(
      `https://api.alquran.cloud/v1/surah/${id}/ar.alafasy`
    );
    setSurah(data?.data?.data);
    setAyahs(data?.data?.data?.ayahs);
    console.log(data?.data?.data?.ayahs);
  };

  useEffect(() => {
    getSurahData();
  }, []);

  return (
    <div className="content">
      <div className="name-of-surah">
        <h1>
          {id}: {surah.englishName} ({surah.name}) -{" "}
          {surah.englishNameTranslation}
        </h1>
        <div className="surah-card">
          {ayahs.map((item, index) => (
            <div key={index} className="surah">
              <audio controls>
                <source src={item.audio} />
              </audio>
              <p>{item.text}</p>
              {item.sajda ? (
                item.sajda.recommended ? (
                  <p>Sajdah ayahs</p>
                ) : (
                  ""
                )
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Surah;

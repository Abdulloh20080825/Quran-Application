import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./surah.css";

const Surah = () => {
  const [surah, setSurah] = useState({});
  const [ayahs, setAyahs] = useState([]);
  const [isLoop, setIsLoop] = useState(true);
  const { id } = useParams();

  const getSurahData = async () => {
    const data = await axios.get(
      `https://api.alquran.cloud/v1/surah/${id}/ar.alafasy`
    );
    setSurah(data?.data?.data);
    setAyahs(data?.data?.data?.ayahs);
  };

  useEffect(() => {
    getSurahData();
  }, []);

  const toggleLoop = (event) => {
    setIsLoop(event.target.id === "on");
  };

  return (
    <div className="content">
      <div className="input-box">
        <p>Add autoplay ?</p>
        <div className="select-handler">
          <label htmlFor="on">On</label>
          <input
            type="radio"
            name="isloop"
            id="on"
            checked={isLoop}
            onChange={toggleLoop}
          />
        </div>
        <div className="select-handler">
          <label htmlFor="off">Off</label>
          <input
            type="radio"
            name="isloop"
            id="off"
            checked={!isLoop}
            onChange={toggleLoop}
          />
        </div>
      </div>
      <div className="name-of-surah">
        <h1>
          {id}: {surah.englishName} ({surah.name}) -{" "}
          {surah.englishNameTranslation}
        </h1>
        <div className="surah-card">
          {ayahs.map((item, index) => (
            <div key={index} className="surah">
              <audio controls loop={isLoop}>
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

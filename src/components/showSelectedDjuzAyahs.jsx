import React from "react";
import "./quran.private.css";

const ShowSelectedDjuzAyahs = ({ ayahs }) => {
  let currentSurahName = "";

  return (
    <div className="">
      {ayahs.map((ayah, index) => {
        if (ayah.surah.name !== currentSurahName) {
          currentSurahName = ayah.surah.name;
          return (
            <div key={index} className="container">
              <div className="surah-name">{currentSurahName}</div>
              <div className="ayah-text">
                <p>{ayah.text}</p>
              </div>
            </div>
          );
        } else {
          return (
            <div key={index} className="container">
              <div className="ayah-text">
                <p>{ayah.text}</p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default ShowSelectedDjuzAyahs;

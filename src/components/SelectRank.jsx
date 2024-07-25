import { useEffect, useState } from "react";
import Arrow from "../assets/Arrow.jpg";
import RankCalculate from "./RankCalculate";

const SelectRank = ({ actualRank, Api }) => {
  const actualRankName = Api.rank.filter(
    (rank) => rank.tierName === actualRank
  );

  const [calculated, setCalculated] = useState();

  useEffect(() => {
    setCalculated(RankCalculate(actualRankName, Api));
  }, [actualRank]);

  return (
    <>
      <div className="rankImgCon">
        <img
          src={
            actualRankName.length > 0
              ? `${actualRankName[0].largeIcon}`
              : `${Api.rank[0].largeIcon}`
          }
          alt={
            actualRankName.length > 0
              ? `${actualRankName[0].tierName}`
              : "No Image"
          }
          className="rankImg"
        />
      </div>
      <img src={Arrow} alt="Icon" className="arrowrank" />
      <div className="maxRankImgCon">
        <img
          src={`${calculated ? calculated.largeIcon : "imgLoading"}`}
          alt={`${calculated ? calculated.tierName : "ImgLoading"}`}
          className="maxRank"
        />
      </div>
    </>
  );
};

export default SelectRank;

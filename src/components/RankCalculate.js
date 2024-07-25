import React from "react";

const RankCalculate = (actuall, Api) => {
  const identi = actuall[0]
    ? Api.rank.filter((rank) => rank.tier === actuall[0].tier)
    : "UNRANKED";

  if (identi[0].tier <= 8) {
    return Api.rank[11];
  } else if (identi[0].tier <= 11) {
    return Api.rank[14];
  } else if (identi[0].tier <= 14) {
    return Api.rank[17];
  } else if (identi[0].tier <= 26) {
    return Api.rank[identi[0].tier + 1];
  } else if (identi[0].tier == 27) {
    return Api.rank[identi[0].tier];
  } else {
    return Api.rank[0];
  }
};

export default RankCalculate;

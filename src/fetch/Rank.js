const RankF = async () => {
  const RankUrl = "https://valorant-api.com/v1/competitivetiers";
  const response = await fetch(RankUrl);
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
  const json = await response.json();
  return json.data;
};

export default RankF;

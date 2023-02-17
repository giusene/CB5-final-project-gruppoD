const BASE_URL = "https://opentdb.com/api.php?amount=10&difficulty=";
const anwsersType = "&type=multiple";

const GET = async (difficulty) => {
  const res = await fetch(BASE_URL + difficulty + anwsersType);
  return res.json();
};

export { GET };

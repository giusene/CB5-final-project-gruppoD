const BASE_URL = "https://opentdb.com/api.php?amount=10&difficulty=";

const GET = async (difficulty) => {
  const res = await fetch(BASE_URL + difficulty);
  return res.json();
};

export { GET };

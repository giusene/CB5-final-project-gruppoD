const BASE_URL = "https://opentdb.com/api.php?amount=";

const GET = async endpoint => {
  const res = await fetch(BASE_URL + endpoint);
  return res.json();
};

export { GET };

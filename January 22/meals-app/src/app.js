const BASE_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";

export const getMeals = async (meal) => {
  const response = await axios.get(`${BASE_URL}${meal}`);
  const data = response.data;
  console.log(data);
  return data;
};



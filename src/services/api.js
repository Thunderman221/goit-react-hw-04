import axios from "axios";

const ACCESS_KEY = "LR1rSDe2-ILjSKqcE30lBZuQfEXqnVEDmhuxhh-1WNI";

export const fetchImages = async (query, page = 1, perPage = 12) => {
  try {
    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
      params: {
        query: query,
        client_id: ACCESS_KEY,
        page: page,
        per_page: perPage,
      },
    });

    return response.data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};

import axios from "axios";

const ACCESS_KEY = "LR1rSDe2-ILjSKqcE30lBZuQfEXqnVEDmhuxhh-1WNI";

export const fetchImages = async (query, page, perPage) => {
  try {
    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
      params: {
        query: query,
        client_id: ACCESS_KEY,
        page: page,
        per_page: perPage,
      },
    });

    return {
      results: response.data.results,
      total: response.data.total,
    };
  } catch (error) {
    console.error(error);
    return { results: [], total: 0 };
  }
};

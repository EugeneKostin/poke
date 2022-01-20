import axios from "axios";

export const pokeAPI = async (url) => {
  try {
    const response = await axios.get(url);
    return { data: response.data };
  } catch (err) {
    if (err.response) {
      return { err: '404 Not Found' }
    } else if (err.request) {
      return { err: 'Ошибка сети' }
    } else {
      return { err: 'Ошибка приложения' }
    }
  }
}
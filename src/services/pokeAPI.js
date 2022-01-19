import axios from "axios";

// export const pokeAPI = (url) => {
//   axios
//     .get(url)
//     .then(response => {
//       console.log("response", response);
//       return response;
//     })
//     .catch(error => {
//       console.log("error", error);
//     });
//   // error Error: Not Found
// };

export const pokeAPI = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
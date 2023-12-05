import axios from 'axios';
const BASE_URL = 'https://run.mocky.io/v3';

export const fetchDataFromAPI = async endpoint => {
  try {
    const response = await axios.get(
      `${BASE_URL}/4a76b093-b79d-49f5-9757-a709031c539d`,
    );
    const parsedData = JSON.parse(JSON.stringify(response.data)); // Explicitly parsing to JSON
    console.log('test userholding', parsedData?.userHolding);
    return parsedData?.userHolding;
  } catch (error) {
    throw new Error(error.message);
  }
  //   try {
  //     // const response = await fetch(`${BASE_URL}/${endpoint}`);
  //     const response = await fetch(
  //       `${BASE_URL}/4a76b093-b79d-49f5-9757-a709031c539d`,
  //     );
  //     // console.log('response', response);
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch data');
  //     }
  //     return await response.json();
  //   } catch (error) {
  //     throw new Error(error.message);
  //   }
};

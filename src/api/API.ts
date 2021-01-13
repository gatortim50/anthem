import axios from 'axios';

const HEADERS = {
  'x-rapidapi-key': '9c02a78a60msh311cd738b013cc0p1e7fcdjsnff95823ec49c',
  'x-rapidapi-host': 'mashape-community-urban-dictionary.p.rapidapi.com',
  useQueryString: true,
};

export default async function GetResults(searchTerm: string) {
  try {
    const response = await axios.get(
      `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${searchTerm}`,
      { headers: HEADERS }
    );
    console.log('RESPONSE:', response);
    return response;
  } catch (error) {
    console.log('ERROR:', error);
    return { message: 'failed', payload: error.response.data };
  }
}

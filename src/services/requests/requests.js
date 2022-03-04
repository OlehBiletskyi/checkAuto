import { openDataBotUrls } from '../../utils';

export const checkTransport = async (number) => {
  const settings = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  };
  try {
    const fetchResponse = await fetch(`${openDataBotUrls.getTransport}?number=${number}`, settings);
    const data = await fetchResponse.json();
    return data;
  } catch (e) {
    return e;
  }
};
export const PROD_API_URL = 'https://craving.yzy.vision'; // thank you robbie for the sub-domain last minute
export const DEV_API_URL = 'http://localhost:3000';

export const API_URL =
  process.env.NODE_ENV === 'production' ? PROD_API_URL : DEV_API_URL;

export const getCravingData = async (craving: string) => {
  const response = await fetch(`${API_URL}/api/v1/ai`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item: craving,
    }),
  });
  const data = await response.text();

  const toJSON = JSON.parse(data);
  return toJSON;
};

const BASE_URL = 'http://localhost:7777/';

export async function getAppsMeetingConfig(): Promise<any> {
  try {
    const data = await fetch(`${BASE_URL}hello-world`);
    const response = await data.json();
    const responseData = response.input;
    return {
      responseData,
    };
  } catch (error) {
    return error;
  }
}

import { config } from '../config';

const handleErrors = (e, exception) => {
  if (exception) {
    if (e.name && e.name === 'AbortError') {
      return { error: 'The server connection is taking too long and has been aborted. Please refresh to try again'}
    } else {
      return { error: 'Unable to connect to server'}
    }
  }
  return { error: `Unable to complete this operation: ${e}`}
}

export const tmdbReq = async (queryUrl, queryStrParams) => {
  const url = `${config.TMDB_API_URL}${queryUrl}?api_key=${config.TMDB_API_KEY}${queryStrParams}`;
  const controller = new AbortController();
  const signal = controller.signal;
  setTimeout(() => controller.abort(), config.FETCH_TIMEOUT);
  let response;
  try {
    response = await fetch(url, { signal });
  } catch (ex) {
    return handleErrors(ex, true);
  }
  const jsonData = await response.json();
  if (!response.ok) {
    return handleErrors(jsonData, false);
  }
  return jsonData;
}
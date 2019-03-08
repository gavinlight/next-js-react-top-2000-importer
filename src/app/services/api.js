import qs from 'qs';
import API_ENDPOINT from 'config/api';
import fetch from 'isomorphic-fetch';

const request = ({ path, options }) => new Promise((resolve, reject) => {
  fetch(path, options)
    .then((response) => {
      if (response.ok) return response.json();
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject({ status: response.status, statusText: response.statusText });
    })
    .then((json) => {
      console.info('API call succeeded:', json);
      resolve(json);
    })
    .catch((error) => {
      console.error('API call failed:', error);
      reject(error);
    });
});

const generateOptions = ({ method, path, withAuth = false, query, body }) => ({
  path: `${API_ENDPOINT}${path}${query ? '?' : ''}${qs.stringify(query || {})}`,
  options: {
    method,
    ...(body ? { body: JSON.stringify(body) } : {}),
  },
  handle401: withAuth,
});

/* eslint-disable implicit-arrow-linebreak */
export const get = ({ path, query, withAuth }) =>
  request(generateOptions({ method: 'GET', path, query, withAuth }));
export const del = ({ path, query, withAuth }) =>
  request(generateOptions({ method: 'DELETE', path, query, withAuth }));
export const post = ({ path, body, withAuth }) =>
  request(generateOptions({ method: 'POST', path, body, withAuth }));
export const put = ({ path, body, withAuth }) =>
  request(generateOptions({ method: 'PUT', path, body, withAuth }));
/* eslint-enable */

const getApiEndpoint = () => {
  switch (process.env.APP_ENV) {
    default:
      return '/api/v1';
  }
};

export default getApiEndpoint();

const baseApi = "https://sheetdb.io/api/v1/k9m42reb72uzv";

const fetchUser = async () => {
  const result = await axios.get(baseApi);
  if (result.status === 200) {
    return result.data;
  }
  return [];
};

const fetchUserBy = async (search) => {
  const result = await axios.get(`${baseApi}/search?` + search);
  if (result.status === 200) {
    return result.data;
  }
  return [];
};

const postUser = async (user) => {
  return await axios.post(`${baseApi}?sheet=user`, user);
};

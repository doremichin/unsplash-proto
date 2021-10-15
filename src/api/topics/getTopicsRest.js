import axios from 'axios';

export const getTopicsRest = async (params) => {
  try {
    const { data } = await axios({
      url: 'https://api.unsplash.com/topics',
      method: 'get',
      headers: {
        Authorization: 'Client-ID 6_2N9-xx9qq8gNRcyVQgQmNVMmbSRuaIqMc1KQYpwYA',
      },
      params,
    });

    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

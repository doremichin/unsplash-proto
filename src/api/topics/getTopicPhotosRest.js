import axios from 'axios';

import { BASE_API_URL } from '../../const/config';

export const getTopicPhotosRest = async (slug) => {
  try {
    const { data } = await axios({
      baseURL: BASE_API_URL,
      url: `/topics/${slug}/photos`,
      method: 'get',
      params: {
        client_id: '6_2N9-xx9qq8gNRcyVQgQmNVMmbSRuaIqMc1KQYpwYA',
      },
    });
    return data;
  } catch (err) {
    return err;
  }
};

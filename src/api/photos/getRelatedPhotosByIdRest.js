import axios from 'axios';

import { BASE_API_URL } from '../../const/config';

export const getRelatedPhotosByIdRest = async ({ id, client_id }) => {
  try {
    const { data } = await axios({
      baseURL: BASE_API_URL,
      url: `/photos/${id}/related`,
      method: 'get',
      params: {
        client_id,
      },
    });
    return data;
  } catch (err) {
    return err;
  }
};

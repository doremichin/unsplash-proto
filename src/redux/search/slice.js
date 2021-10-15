const initialState = {
  searchQuery: '',
  photos: {
    results: [],
    total: 0,
    total_pages: 0,
  },
};
export const Action = {
  Types: {
    SEARCH_QUERY: '@SEARCH/SEARCH_QUERY',
    SET_SEARCH_RESULTS: '@SEARCH/SET_SEARCH_RESULTS',
    SEARCH_PHOTOS: '@SEARCH/SEARCH_PHOTOS',
  },
  Creators: {

    setSearchQuery: (payload) => ({
      type: Action.Types.SEARCH_QUERY,
      payload,
    }),
    setSearchResults: (payload) => ({
      type: Action.Types.SET_SEARCH_RESULTS,
      payload,
    }),
    searchPhotos: (payload) => ({
      type: Action.Types.SEARCH_PHOTOS,
      payload,
    }),
  },
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
  default: return state;
  case Action.Types.SEARCH_QUERY: {
    return {
      ...state,
      searchQuery: action.payload,
    };
  }
  case Action.Types.SET_SEARCH_RESULTS: {
    return {
      ...state,
      ...action.payload,
    };
  }
  }
};

export default reducer;

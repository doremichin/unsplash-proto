import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import InfiniteScroll from '../../shared/components/InfiniteScroll';
import { Action } from '../../../redux/search/slice';
import { ACCESS_KEY } from '../../../const/config';
import SearchCollections from '../components/SearchCollections';

const SearchCollectionsContainer = ({ data }) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const { query } = useParams();

  const nextCollections = () => {
    dispatch(Action.Creators.getNextCollections({
      query,
      page,
      per_page: 15,
      client_id: ACCESS_KEY,
    }));
  };

  useEffect(() => {
    nextCollections();
  }, [page]);

  const next = () => {
    setPage((p) => p + 1);
  };
  return (
    <Container>
      {
        data.length > 0
        && (
          <InfiniteScroll next={next}>
            <SearchCollections data={data} />
          </InfiniteScroll>
        )
      }
    </Container>
  );
};

const Container = styled.div`

`;

export default SearchCollectionsContainer;
import React from 'react';
import styled from 'styled-components';
import { Link, Route } from 'react-router-dom';

import { IconLogo } from '../../../../icons';
import Nav from './Nav';
import SearchBoxContainer from '../../../search/containers/SearchBoxContainer';
import TopicsLnbContainer from '../../../topics/containers/TopicsLnbContainer';

function Header() {
  return (
    <>
      <Container>
        <Logo to="/">
          <IconLogo />
        </Logo>
        <SearchBoxContainer shape="round" />
        <Nav />
      </Container>
      <Route exact path={['/', '/topics', '/topics/:slug']}>
        <TopicsLnbContainer />
      </Route>
    </>
  );
}

const Container = styled.div`
  padding: 0 20px;
  height: 62px;
  display: flex;
  align-items: center;
`;
const Logo = styled(Link)`
  margin-right: 18px;
`;

export default Header;

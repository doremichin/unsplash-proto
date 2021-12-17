import React, { useState } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import { useMediaQuery } from 'react-responsive';
import { useHistory, useLocation, useParams } from 'react-router-dom';

import Contain from '../../../shared/components/common/Contain';
import OrientationFilter
  from '../../../shared/components/Filter/OrientationFilter/OrientationFilter';
import ColorFilter from '../../../shared/components/Filter/ColorFilter/ColorFilter';
import SortFilter from '../../../shared/components/Filter/SortFilter/SortFilter';
import FilterInMobile from '../../../shared/components/Filter/FilterInMobile';

const FiltersInLnbContainer = () => {
  const { category, query } = useParams();
  const { search } = useLocation();
  const history = useHistory();
  const [orientationToggle, setOrientationToggle] = useState(false);
  const [colorToggle, setColorToggle] = useState(false);
  const [sortToggle, setSortToggle] = useState(false);

  const clickOrientation = () => {
    setOrientationToggle((p) => !p);
    setColorToggle(false);
    setSortToggle(false);
  };
  const clickColor = () => {
    setColorToggle((p) => !p);
    setOrientationToggle(false);
    setSortToggle(false);
  };
  const clickSort = () => {
    setSortToggle((p) => !p);
    setOrientationToggle(false);
    setColorToggle(false);
  };
  const clickClear = () => {
    setOrientationToggle(false);
    setColorToggle(false);
    setSortToggle(false);
    history.push(`/search/photos/${query}`);
  };
  const clickOut = () => {
    setOrientationToggle(false);
    setColorToggle(false);
    setSortToggle(false);
  };
  const isTablet = useMediaQuery({ maxWidth: 991 });

  return (
    <Container>
      {
            category === 'photos'
            && (
              <Contain onClickOut={clickOut}>
                <Filters className={cn({ isTablet })}>
                  {
                    search !== ''
                    && <Clear onClick={clickClear}>Clear</Clear>
                  }
                  <FilterButton onClick={clickOrientation}>
                    <OrientationFilter orientationToggle={orientationToggle} />
                  </FilterButton>
                  <FilterButton onClick={clickColor}>
                    <ColorFilter colorToggle={colorToggle} />
                  </FilterButton>
                  <FilterButton onClick={clickSort}>
                    <SortFilter sortToggle={sortToggle} />
                  </FilterButton>
                </Filters>
              </Contain>
            )
          }
      {
            isTablet
            && (
              <FilterInMobile />
            )
          }
    </Container>
  );
};

const Container = styled.div`

`;
const Filters = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &.isTablet{
    display: none;
  }
`;
const FilterButton = styled.div`
  margin-left: 20px;
  position: relative;
  cursor: pointer;
`;
const Clear = styled.div`
  cursor: pointer;
  color: #767676;
`;

export default FiltersInLnbContainer;
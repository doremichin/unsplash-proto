import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useIntersection } from '../../../../hooks/useIntersection';

interface Props {
  children : JSX.Element
  next() : void
}

function InfiniteScroll({ children, next } : Props) {
  const [isInView, sentinelRef] = useIntersection();

  useEffect(() => {
    if (isInView) {
      next();
    }
  }, [isInView]);
  return (
    <Container>
      {children}
      <Sentinel ref={sentinelRef} />
    </Container>
  );
}

const Container = styled.div`

`;
const Sentinel = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    width: 30px;
    height: 30px;
  }
`;
export default InfiniteScroll;

import React from 'react';
import styled from 'styled-components';

const MainPhotoListTwoColumn = ({ data = [], renderItem = () => {} }) => {
  // 사진이 배치 될 때 다음 사진은 높이가 가장 낮은 그룹의 하단에 배치 되어야 한다
  // 매번 사진이 나열 될 때마다 그룹의 총 높이를 알고 있어야한다.
  // 가장 작은 높이값의 인덱스 번호를 알아야한다
  const photoGroups = [[], []];
  const photoGroupHeight = [0, 0];

  for (let i = 0; i < data.length; i++) {
    const minHeightIndex = photoGroupHeight.indexOf(Math.min(...photoGroupHeight));
    photoGroups[minHeightIndex].push(data[i]);
    photoGroupHeight[minHeightIndex] += (data[i].height / data[i].width);
  }

  return (
    <Container>
      <Row>
        {
          photoGroups.map((group, groupIndex) => (
            <Col key={groupIndex}>
              {
                group.map((item, index) => (
                  <ItemWrapper key={item.id || index}>
                    {renderItem(item)}
                  </ItemWrapper>
                ))
              }
            </Col>
          ))
        }
      </Row>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 10px;
`;

const Row = styled.div`
  display: flex;
  margin: 0 -10px;
`;
const Col = styled.div`
  width: 50%;
  padding: 0 10px;
`;
const ItemWrapper = styled.div`
  margin-bottom: 20px;
`;
export default MainPhotoListTwoColumn;
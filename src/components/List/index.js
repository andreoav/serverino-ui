import { memo } from 'react';
import styled from '@emotion/styled/macro';

export const ListItem = styled.li`
  padding: 20px 15px 18px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  background: red;
`;

export default memo(List);

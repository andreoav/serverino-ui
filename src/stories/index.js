import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import List, { ListItem } from '../components/List';
import GlobalStyles from '../components/GlobalStyles';

storiesOf('Item', module).add('list item', () => (
  <div>
    <GlobalStyles />
    <List>
      <ListItem>Some item</ListItem>
    </List>
  </div>
));

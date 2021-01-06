import React from 'react';
import { AddonsHomeScreen } from './AddonsHomeScreen';
import { addonItemsData } from '../../layout/addons/AddonsGrid.stories';

export default {
  title: 'Frontpage|screens/AddonsHomeScreen',
  component: AddonsHomeScreen,
};

export const Default = () => (
  <AddonsHomeScreen
    popularAddons={{ MONTH: addonItemsData.slice(0, 9), YEAR: addonItemsData.slice(-9) }}
    trendingAddons={addonItemsData.slice(-9)}
  />
);

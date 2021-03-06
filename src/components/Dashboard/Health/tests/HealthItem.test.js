import React from 'react';
import { shallow } from 'enzyme';

import { HealthItem } from '../HealthItem';
import { default as HealthItemFixtures } from '../fixtures/HealthItem.fixture';

// eslint-disable-next-line react/prop-types
const testHealthItem = ({ props }) => <HealthItem {...props} />;

describe('<HealthItem />', () => {
  it('renders correctly', () => {
    HealthItemFixtures.forEach(fixture => {
      const component = shallow(testHealthItem(fixture));
      expect(component).toMatchSnapshot();
    });
  });
});

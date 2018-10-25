import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';

const createComponent = newProps => {
  const component = shallow(
    <Button {...newProps} />
  );

  return {
    component
  };
};

describe('Button component', () => {
  it('should render', () => {
    const { component } = createComponent();
    expect(component).toMatchSnapshot();
  });
});

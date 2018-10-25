import React from 'react';
import { shallow } from 'enzyme';

import Input from './Input';

const createComponent = newProps => {
  const component = shallow(
    <Input {...newProps} />
  );

  return {
    component
  };
};

describe('Input component', () => {
  it('should render', () => {
    const { component } = createComponent();
    expect(component).toMatchSnapshot();
  });
});

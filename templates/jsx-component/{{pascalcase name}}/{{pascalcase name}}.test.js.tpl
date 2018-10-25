import React from 'react';
import { shallow } from 'enzyme';

import {{pascalcase name}} from './{{pascalcase name}}';

const createComponent = newProps => {
  const component = shallow(
    <{{pascalcase name}} {...newProps} />
  );

  return {
    component
  };
};

describe('{{pascalcase name}} component', () => {
  it('should render', () => {
    const { component } = createComponent();
    expect(component).toMatchSnapshot();
  });
});

import React from 'react';
import renderer from 'react-test-renderer';

import Button from './Button';

const createComponent = newProps => {
  const component = renderer.create(
    <Button {...props} />
  );

  return {
    component
  };
};

describe('Button component', () => {
  it('should render', () => {
    const { component } = createComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

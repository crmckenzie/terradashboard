import App from '../../../src/components/App/App.js';
import React from 'react';
import { shallow } from 'enzyme';

describe('App', () => {
  it('renders children correctly', () => {
    const wrapper = shallow(
      <App context={{ insertCss: () => {} }}>
        <div className="child" />
      </App>
    );
    expect(wrapper.contains(<div className="child" />)).toBe(true);
  });
});

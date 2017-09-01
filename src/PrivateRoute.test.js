import React from 'react'
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'

describe('PrivateRoute', () => {
  it('renders without crashing', () => {
    const FakeComponent = () =>
      <div>
        <h1>Test</h1>
      </div>
    shallow(<PrivateRoute component={FakeComponent} />)
  })
  it('should render passed component when a token is passed', () => {
    const FakeComponent = () =>
      <div className="fakeRoute">
        <h1>Test</h1>
      </div>
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute component={FakeComponent} token="fake.token" />
      </MemoryRouter>
    )
    expect(wrapper.find('.fakeRoute').length).toEqual(1)
  })
  it('should redirect passed component when no token is passed', () => {
    const FakeComponent = () =>
      <div className="fakeRoute">
        <h1>Test</h1>
      </div>
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute component={FakeComponent} />
      </MemoryRouter>
    )
    expect(wrapper.html()).toBeNull()
  })
})

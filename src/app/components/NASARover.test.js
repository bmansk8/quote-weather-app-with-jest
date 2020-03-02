import React from "react";
import renderer from 'react-test-renderer';
import { NASARover } from './NASARover';
import { shallow } from 'enzyme'

it('renders h1 correctly', () => {
  const tree = renderer
    .create(<h1 className='text-center'>Photos from mars</h1>)
    .toJSON();
  expect(tree).toMatchSnapshot();
})

jest.mock('./services/roverPhotos')

it('fetchs images from roverPhotos and renders them', done => {
  const wrapper = shallow(<NASARover />)

  setTimeout(()=>{
    wrapper.update();

    expect(wrapper.find('img').length).toEqual(3);

    done()
  });
  
});

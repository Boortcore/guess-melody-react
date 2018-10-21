// import React from 'react';
// import {Provider} from 'react-redux';
// import { shallow, mount} from 'enzyme';
// import Timer from './Timer';
// import configureStore from 'redux-mock-store'
// import initialState from '../../reducers/initState'
//
// import { configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// configure({ adapter: new Adapter() });
//
// const mockStore = configureStore();
// let store;
// let wrapper;
// describe('testing of Timer', () => {
//   beforeEach(() => {
//     store = mockStore({game: initialState});
//       wrapper = mount(
//       <Provider store={store}>
//         <Timer test={func}/>
//       </Provider>
//     );
//   });
//
//   it('Time transferred to the component', () => {
//     const timer = wrapper.find('Timer');
//     expect(timer.props().time).toEqual(120);
// });
//
// });
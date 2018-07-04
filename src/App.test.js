import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'

const mockStore = configureMockStore([thunk]);
const store = mockStore({
    currencies: {
        all: [],
        favoriteCodes: [],
        loading: false
    }
});
describe('App', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <Provider store={store}>
                <App/>
            </Provider>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});

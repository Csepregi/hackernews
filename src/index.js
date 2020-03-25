import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';
// import { getReadableStories } from './selectors/story';
// import { doArchiveStory } from './actions/archive';
// import { STORY_ARCHIVE } from './constants/actionTypes';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
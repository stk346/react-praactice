import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './chapter03/Library';
import Clock from './chapter04/Clock';
import CommentList from './chapter05/CommentList';
import NotificationList from './chapter06/NotificationList';
import Accommodate from './chapter07/Accommodate';
import ConfirmButtonClass from './chapter08/ConfirmButtonClass';
import ConfirmButtonFunction from './chapter08/ConfirmButtonFunction';

const rootNode = document.getElementById('root');
ReactDOM.createRoot(rootNode).render(
  <React.StrictMode>
    <ConfirmButtonFunction />
  </React.StrictMode>,
);



// const rootNode = document.getElementById('root');

// ReactDOM.createRoot(rootNode).render(
//   <React.StrictMode>
//     <ConfirmButtonClass />
//   </React.StrictMode>,
// );

// const rootNode = document.getElementById('root');

// ReactDOM.createRoot(rootNode).render(
//   <React.StrictMode>
//     <Accommodate />
//   </React.StrictMode>,
// );

// const rootNode = document.getElementById('root');

// ReactDOM.createRoot(rootNode).render(
//   <React.StrictMode>
//     <NotificationList />
//   </React.StrictMode>,
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// setInterval(() => {
//   root.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>
//   );
// }, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

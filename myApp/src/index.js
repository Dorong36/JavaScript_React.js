import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './ch03/Library';
import Clock from './ch04/Clock';
import CommentList from './ch05/CommentList';
import NotificationList from './ch06/NotificationList';
import Accommodate from './ch07/Accommodate';
import ConfirmButton from './ch08/ConfirmButton';

const root = ReactDOM.createRoot(document.getElementById('root'));

// ch03 예제
// root.render(
//   <React.StrictMode>
//     {/* App ==> Library 수정 */}
//     <Library />   
//   </React.StrictMode>
// );

// ch04 예제
// setInterval(()=>{
//   root.render(
//     <React.StrictMode>
//       <Clock />   
//     </React.StrictMode>
//   );
// }, 1000);
// 🌟 참고사항!!
// 과거 ReactDom.render(React 엘리먼트, 실제 DOM 엘리먼트) 문법이 아래 두 줄로 바뀜!!
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(React 엘리먼트)

// ch05
// root.render(
//   <React.StrictMode>
//     <CommentList />
//   </ React.StrictMode>
// );

// ch06
// root.render(
//     <NotificationList />
// )

//ch07
// root.render(
//     <React.StrictMode>
//         <Accommodate />
//     </ React.StrictMode>
    
// )

//ch08
root.render(
    <React.StrictMode>
        <ConfirmButton />
    </ React.StrictMode>
    
)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

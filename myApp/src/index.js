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
import LandingPage from './ch09/LandingPage';
import AttendanceBook from './ch10/AttendanceBook';
import SignUp from './ch11/SignUp';
import Calculator from './ch12/Calculator';
import ProfileCard from './ch13/ProfileCard';
import DarkOrLight from './ch14/DarkOrLight';
import Blocks from './ch15/Blocks';

const root = ReactDOM.createRoot(document.getElementById('root'));

//ch03
// root.render(
//   <React.StrictMode>
//     {/* App ==> Library 수정 */}
//     <Library />   
//   </React.StrictMode>
// );

// ch04
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

//ch07 ~
root.render(
    <React.StrictMode>
      {
        // <Accommodate />
        // <ConfirmButton />
        // <LandingPage />
        // <AttendanceBook /> 
        // <SignUp />
        // <Calculator />
        // <ProfileCard />
        // <DarkOrLight />
         <Blocks />
      }
    </ React.StrictMode>
)





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

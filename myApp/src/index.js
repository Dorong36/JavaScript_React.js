import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import Library from './ch03/Library';
import Clock from './ch04/Clock';

// ch04 예제
const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval(()=>{
  root.render(
    <React.StrictMode>
      <Clock />   
    </React.StrictMode>
  );
}, 1000);
// 🌟 참고사항!!
// 과거 ReactDom.render(React 엘리먼트, 실제 DOM 엘리먼트) 문법이 아래 두 줄로 바뀜!!
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(React 엘리먼트)


// ch03 예제
//const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     {/* App ==> Library 수정 */}
//     <Library />   
//   </React.StrictMode>
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

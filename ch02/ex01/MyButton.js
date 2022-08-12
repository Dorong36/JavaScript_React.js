function MyButton(props){
    const [isClicked, setIsClicked] = React.useState(false);

    return React.createElement(
        'button',
        {onClick: () => setIsClicked(true)},       // onClick에서 C는 대문자...!! 잊지말자...!!
        isClicked ? 'Clicked!' : 'Click Here!'
    )
}

// ReactDOM의 render 함수를 사용해서 리액트 컴포넌트를 DOM 컨테이너에 렌더링하는 코드
const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(MyButton), domContainer);


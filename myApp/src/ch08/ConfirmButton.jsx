import React, {useState} from "react";

// class ConfirmButton extends React.Component{
//     constructor(props) {
//         super(props);

//         this.state = {
//             isConfirmed : false,
//         };

//         // solution1
//         // this.handleConfirm = this.handleConfirm.bind(this);

//     }

//     // solution1
    // handleConfirm() {
    //     this.setState((prevState) => ({
    //         isConfirmed : !prevState.isConfirmed,
    //     }));
    // }

    // solution2 : 클래스 필드 문법 사용하기
    // handleConfirm = () => {
    //     this.setState((prevState) => ({
    //         isConfirmed: !prevState.isConfirmed,
    //     }));
    // }



//     render(){
//         return(
//             <button onClick={this.handleConfirm} disabled = {this.state.isConfirmed}>
//                 {this.state.isConfirmed? "confirmed" : "not confirmed"}
//             </button>
//         );
//     }

// }

function ConfirmButton(props) {
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    };

    return(
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {isConfirmed? "Confirmed" : "Not Confirmed"}
        </button>
    )
}

export default ConfirmButton;
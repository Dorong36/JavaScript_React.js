import React from "react";

const styles = {
    wrapper: {
        padding: 16,
        display: "flex",
        flexDirection: "row",
        borderBottom: "1px solid grey",
    },
    greeting: {
        marginRight: 8,
    },
};

function Toolbar(props){
    const {isLoggedIn, onClickLogin, onClickLogout} = props;

    return(
        <div style={styles.wrapper}>
            {isLoggedIn && <span style={styles.greeting}>Welcome!!</span>}

            {isLoggedIn? (
                <button onClick={onClickLogout}>Log-out</button>
            ) : (
                <button onClick={onClickLogin}>Log-in</button>
            )}

        </div>
    );
}

export default Toolbar;
// One without JSX & One with JSX

// import React from "react";

/* export const WelcomeWithoutJSX = () => {
    return React.createElement("div", {id: "container"},
        React.createElement("h1", null, "Hello Bhavik")
    )
} */

export const WelcomeWithJSX = () => {
    return (
        <div id="container">
            <h1>Hello Bhavik</h1>
        </div>
    )
}

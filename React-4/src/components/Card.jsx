// One without JSX & One with JSX

/* import React from "react";

export const CardWithoutJSX = () => {
    return React.createElement("div", {id: "card"},
        React.createElement("h2", null, "Product Section"),
        React.createElement("p", null, "This is a", React.createElement("span", {id:"highlight"}, "with text")),
        React.createElement("button", null, "Click Me")
    )
} */

/* export const CardWithJSX = () => {
    return (
        <div id="card">
            <h2>Product Section</h2>
            <p>This is a <span id="highlight">paragraph</span>with text</p>
            <button>Click Me</button>
        </div>
    )
} */


/* export const CardWithRuleOne = () => {
    return (
        <h1>Hello</h1>
        <h2>World</h2>
    )
} */ // throws error because not having a single parent
 

/* export const CardWithRuleOne = () => {
    return (
        <>
           <h1>Hello</h1>
           <h2>World</h2>
        </>
    )
} */
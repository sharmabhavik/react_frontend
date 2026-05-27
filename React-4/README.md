# This is all about JSX

- JSX means to write HTML Like Syntax inside JS

## Rules of JSX:

# Rule-1: Every Component must return a single root element: We can't return multiple elements sitting side by side.

```jsx
const UserProfile = () => {
    <h1>Save the</h1>
    <h2>World</h2>
}
```

- It will throw error because we must have to wrap this in a div element (root element) to be shown there.

- We have to write this as this:

```jsx
const UserProfile = () => {
    return (
        <>
            <h1>Save the</h1>
            <h2>World</h2>
        </>
    )
}
```

- Now it will not throw error because now we have wrapped it into a Fragment which is a root element

```jsx
const UserProfile = () => {
    return (
        <React.Fragment>
            <h1>Save the</h1>
            <h2>World</h2>
        </React.Fragment>
    )
}
```

- One more way: Now it will not throw error because now we have wrapped it into a React.Fragment which is a root element
- React.Fragment accepts the props but <React.Fragment> do not accepts the props like you can write
- <React.Fragment key={id}></React.Fragment> but <key={id}></> not accepts the props


## Rule-2: Just keep in mind that do use / to close all the closing tag.

### For ex:

``` jsx
const userForm = () => {
    return (
        <form>
            <input placeholder="Enter Your Name">
            <br>
            <input placeholder="Enter Your Number">
        </form>
    )
}
```

## Solution:

``` jsx
const userForm = () => {
    return (
        <form>
            <input placeholder="Enter Your Name" />
            <br />
            <input placeholder="Enter Your Number" />
        </form>
    )
}
```

# Rule-3: Attribute names must be written in camelCase.
- There are too many reserved keywords in Javscript so do not use them in this for those keywords write it in camelCase.

## For ex:
- htmlFor instead of for
- className instead of class
- tabIndex instead of for tabindex


# Rule-4: You can embed Javascript expressions directly in your markup using curly braces.

``` jsx 
export const designComponent = () => {
    const name = "Bhavik";
        
    <div>
        <h1>{name}</h1>
        <h2></h2>
        <p></p>
    </div>
}
```
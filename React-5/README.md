# Props:
- Now we will learn about Props

- Props means Properties
- Props are the way components talk to each other.

- A parent component can pass data down to its children through props.

- Arguments in JS:
``` js 
    function greet(name){
        return `Hello ${name}`
    }
```

- Arguments in JSX:
``` jsx 
    function greet(props){
        return `Hello ${props.name}`
    }
```

# Props Patterns:
- 1. Default Props.
- 2. Forwarding Props with Spread Operator.
- 3. Passing JSX as Children.
   - As Children You can pass anything that you want it doesn't care about it
   - Just Text
   - Multiple Elements
   - Other Components
   - Even Nothing at all


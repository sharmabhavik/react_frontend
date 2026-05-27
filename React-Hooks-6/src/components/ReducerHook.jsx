import { useReducer} from 'react'

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement"
}

const ReducerHook = () => {
  
  function reducer(state, action){
      switch (action.type){
        case ACTIONS.INCREMENT:
          return state.count + 1;
          
        case ACTIONS.DECREMENT:
          return state.count - 1;
          
        case ACTIONS.RESET:
          return state.count = 0;  
          
        default:
          return state;
      }    
  }
  
  function increment (){
    dispatch({type: ACTIONS.INCREMENT})
  }
  
  function decrement (){
    dispatch({type: ACTIONS.DECREMENT})
  }
  
  const [state, dispatch] = useReducer( reducer, { count : 0 })
    
  return (
    <div>
      <h1>Use Reducer Hook to Increment and Decrement</h1>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </div>
  )
}

export default ReducerHook

const Redux = require('redux')
const INITIAL_STATE = {
colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
index: 0,
};

const reducer = (state = INITIAL_STATE, action) =>{
  switch(expression){
    case action.type === "NEXT_COLOR":
        return {
            ...state,
            index: state.index === 5 ? state.index = 5 : state.index + 1,
        }
    case action.type === "PREVIOUS_COLOR":
        return{
            ...state,
            index: state.index === 0 ? state.index = 0 : state.index - 1,
        }
    default:
        state;
  } 
}
const store = Redux.createStore(reducer);
const next = document.getElementById('next');
const previous = document.getElementById('previous');
next.addEventListener(()=>{
  dispatch({type: "NEXT_COLOR"});
  console.log('teste')
})
previous.addEventListener(()=>{
  dispatch({type: "PREVIOUS_COLOR"})
})
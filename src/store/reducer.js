const defaultState = {
    inputValue:'hello',
    list:[1,2,3]
}
//reducer 可以接受state,但是不能修改state
export default (state = defaultState, action)=>{
    console.log(state, action)
    if(action.type === "change_input_value"){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState
    }else if(action.type==="add_todo_item"){
        debugger
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = ''
        return newState
    }
    return state;
}
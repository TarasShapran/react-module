const  reducer=(state, action)=> {
    if (action.obj === 'a' && action.action === '+') {
        return {...state, a: state.a++};
    } else if (action.obj === 'a' && action.action === '-') {
        return {...state, a: state.a--};
    }
    if (action.obj === 'b' && action.action === '+') {
        return {...state, b: state.b++};
    } else if (action.obj === 'b' && action.action === '-') {
        return {...state, b: state.b--};
    }if (action.obj === 'c' && action.action === '+') {
        return {...state, c: state.c++};
    } else if (action.obj === 'c' && action.action === '-') {
        return {...state, c: state.c--};
    }

    return {...state};

}

export default reducer;
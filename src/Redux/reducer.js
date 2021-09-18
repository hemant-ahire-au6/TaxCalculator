const initialState = {
    userName:"hemant@gmail.com",
    passWord:"Hemant@46"
}

const reducer = (state=initialState,action)=>{
    switch(action){
        default:
            return {
                ...state
            }
    }
}

export default reducer;
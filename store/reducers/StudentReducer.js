const INITIAL_STATE = {
    email: "",
    userName: "",
    password: ""
    
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "":
            return ({
                
            });
            
        default:
            return state;
    }
}
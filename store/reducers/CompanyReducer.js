const INITIAL_STATE = {
    email: "",
    userName: "",
    password: ""
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD":
            console.log("asdsdf")
            return ({
                
            });
            
        default:
            return state;
    }
}
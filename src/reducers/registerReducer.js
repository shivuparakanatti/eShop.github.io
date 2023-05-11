const initialState = []

const registerReducer =(state=initialState, action)=>{

    switch(action.type){
        case "REGISTER" : {
             return   [...state,{...action.payload}]
        }

       

        default : {
            return state
        }
    }
}

export default registerReducer
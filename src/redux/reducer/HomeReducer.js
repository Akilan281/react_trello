import { NEW_LIST} from "../action/Action"

const initialstate = {
    newlist: [],
  
}


const HomeReducer = (state = initialstate, action) => {
    switch (action.type) {
        case NEW_LIST:
            return Object.assign([], state, { newlist: action.payload })
               default:
            return state
    }
}

export default HomeReducer;
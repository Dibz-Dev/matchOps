const isHomePanelReducer = (state = true, action) => {
    
    switch(action.type) {
        case 'NoHomePanel':
           return state = false;
        case 'YesHomePanel':
           return state = true; 
        default:
            return state;

    }
    
}

export default isHomePanelReducer;
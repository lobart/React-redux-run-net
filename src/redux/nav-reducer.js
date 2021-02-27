
let initialState = {
    navData:[
        {name: 'Dialog', url:'/dialogs'},
        {name: 'Profile', url: '/profile'},
        {name: 'Friends', url: '/friends'},
        {name: 'Competitions', url: '/competitions'},

    ]
}

const navReducer = (state = initialState, action) => {
    return state;
}

export default  navReducer;
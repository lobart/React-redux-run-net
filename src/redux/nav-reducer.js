
let initialState = {
    navData:[
        {name: 'Dialog', url:'/dialogs'},
        {name: 'Profile', url: '/profile'},
        {name: 'Friends', url: '/friends'},
        {name: 'Competitions', url: '/competitions'},
        {name: 'Users', url: '/users'}

    ]
}

const navReducer = (state = initialState, action) => {
    return state;
}

export default  navReducer;
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_TOGGLE_IS_FETCHING = 'SET_TOGGLE_IS_FETCHING';

let initialState = {
    users: [],
    pageSize: 5, 
    totalUsersCount:0,
    currentPage:1,
    isFetching: false
}


const usersReducer = (state = initialState, action) =>{
    switch(action.type){
        case FOLLOW:
            return{
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId){
                        return{...user, followed:true}
                    }
                    return user;
                })
            };
        case UNFOLLOW:
            return{
                ...state,
                users: state.users.map(user =>{
                    if(user.id === action.userId){
                        return{...user, followed:false}
                    }
                    return user;
                })
            };
        case SET_USERS:
            return{
                ...state,
                users:[...action.users]
            };
        case SET_CURRENT_PAGE:
            return{
                ...state,
                currentPage: action.pageNumber
            }
        case SET_TOTAL_USERS_COUNT:
            return{
                ...state,
                totalUsersCount: action.count
            }
        case SET_TOGGLE_IS_FETCHING:
            return{
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
}



export let follow = (userId) =>{
    return{
        type:FOLLOW, userId
    }
}

export let unfollow = (userId) =>{
    return{
        type: UNFOLLOW, userId 
    }
}

export let setUsers = (users) =>{
    return{
        type:SET_USERS, users
    }
} 

export let setCurrentPage = (pageNumber) =>{
    return{
        type: SET_CURRENT_PAGE, pageNumber
    }
}
export let setTotalUsersCount = (totalCount) =>{
    return{
        type: SET_TOTAL_USERS_COUNT, count: totalCount
    }
}

export let toggleIsFetching = (isFetching) =>{
    return{
        type: SET_TOGGLE_IS_FETCHING, isFetching
    }
}

export default usersReducer;
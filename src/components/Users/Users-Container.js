import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import userAPI from "../../api/api";
import {
    follow, getUsers, onFollow, onUnfollow,
    setCurrentPage,
    setToggleIsFetching,
    setToggleIsFProgress,
    setTotalUsersCount,
    setUsers,
    unfollow
} from "../../redux/user-reducer";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    };
    onPageChanged =  (currentPage) =>{
        this.props.getUsers(currentPage, this.props.pageSize);
    };
    onFollow = (uId) => {
        this.props.onFollow(uId)
    }
    onUnfollow = (uId) => {
        this.props.onUnfollow(uId)
    }
    render() {
        return <>
            {this.props.isFetching ?
            <Preloader/> : null}
            <Users key='Users' {...this.props}
                   onPageChanged={this.onPageChanged}
                   onUnfollow={this.onUnfollow}
                   onFollow={this.onFollow}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setToggleIsFetching,
    setToggleIsFProgress,
    getUsers,
    onUnfollow,
    onFollow
})(UsersContainer);
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
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {
    getCurrentPage,
    getFollowingProgress,
    getIsFetching,
    getPageSize,
    getSelUsers,
    getTotalUsersCount
} from "./UsersSelector";

export class UsersContainer extends React.Component {
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
        users: getSelUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingProgress: getFollowingProgress(state)
    }
}
export default compose (
    ///withAuthRedirect,
    connect(mapStateToProps, {
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
    })
)(UsersContainer);


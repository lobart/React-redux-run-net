import React from "react";
import styles from "./Users.module.css";
import UserPhoto from "../../assets/Images/UserPhoto.jpeg";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize);
    let pages = [];
    for (let i=1; i <= pagesCount; i++){
        pages.push(i);
    }
    return (
        <div>
            <div>
                {pages.map(el => {
                    return <span className={el === props.currentPage ? styles.selectedPage : styles.Page }
                                 onClick={() => {props.onPageChanged(el)} }> {el} < /span>
                })}
            </div>
            <div>
                {
                    props.users.map(u =>
                        <div key = {u.id}>
                        <span>
                            <div>
                                <img src = {u.photos.small != null ? u.photos.small : UserPhoto} className={styles.ava}/>
                            </div>
                            <div>
                                {u.followed ? <button onClick={() => {props.unfollow(u.id)}}>Followed</button> : <button onClick={() => {props.follow(u.id)}}>Unfollowed</button>}
                            </div>
                        </span>
                            <span>
                            <div>{u.name}</div><div>{u.status}</div>
                            <div>{"u.location.city"}</div>
                            <div>{"u.location.country"}</div>
                        </span>
                        </div>)
                }
            </div>
            <div>
                {pages.map(el => {
                    return <span className={el === props.currentPage ? styles.selectedPage : styles.Page }> {el} < /span>
                })}
            </div>
        </div>
    )
}
export default Users;
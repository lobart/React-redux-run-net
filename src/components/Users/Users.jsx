import React from "react";
import "./Users.css";
import UserPhoto from "../../assets/Images/UserPhoto.jpeg";
import {NavLink} from "react-router-dom";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize);
    let pages = [];
    for (let i=1; i <= pagesCount; i++){
        pages.push(i);
    }
    let setPageSize = (size) =>{
        props.pageSize=size;
        props.setCurrentPage(props.currentPage);
    }
    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

// Close the dropdown menu if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {

            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
    let delta = 10;
    return (
        <div>
            <div className="dropdown">
                <button onClick={myFunction} className="dropbtn">Количество профилей на странице</button>
                <div id="myDropdown" className="dropdown-content">
                    <a  href="#">5</a>
                    <a  href="#">10</a>
                    <a  href="#">20</a>
                </div>
            </div>
            <div>
                <span className={"Page"} onClick={() => {props.onPageChanged((props.currentPage-1)?(props.currentPage-1):(props.currentPage))}}>...</span>
                {pages.slice(props.currentPage-1, props.currentPage + delta -1).map(el => {
                    return <span className={el === props.currentPage ? "selectedPage" : "Page" }
                                 onClick={() => {props.onPageChanged(el)} }> {el} < /span>
                })}
                <span className={"Page"} onClick={() => {props.onPageChanged((props.totalUsersCount-1-props.currentPage)?(props.currentPage+delta):(props.currentPage+delta-1))}}>...</span>
            </div>
            <div>
                {
                    props.users.map(u =>
                        <div key = {u.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : UserPhoto} className={"ava"}/>
                                </NavLink>
                            </div>
                            <div>
                                {u.followed ?
                                    <button disabled={props.followingProgress.some(id => id===u.id)} onClick={()=>{
                                        props.onUnfollow(u.id)} }>Unfollow</button>
                                    : <button disabled={props.followingProgress.some(id => id===u.id)} onClick={()=>{
                                    props.onFollow(u.id)} }>Follow</button>
                                }
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
                <span className={"Page"} onClick={() => {props.onPageChanged((props.currentPage-1)?(props.currentPage-1):(props.currentPage))}}>...</span>
                {pages.slice(props.currentPage-1, props.currentPage + delta -1).map(el => {
                    return <span className={el === props.currentPage ? "selectedPage" : "Page" }
                                 onClick={() => {props.onPageChanged(el)} }> {el} < /span>
                })}
                <span className={"Page"} onClick={() => {props.onPageChanged((props.totalUsersCount-1-props.currentPage)?(props.currentPage+delta):(props.currentPage+delta-1))}}>...</span>
            </div>
        </div>
    )
}
export default Users;
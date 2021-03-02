import React from "react";
import "./Users.css";
import UserPhoto from "../../assets/Images/UserPhoto.jpeg";
import {NavLink} from "react-router-dom";
import axios from "axios";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize);
    let pages = [];
    for (let i=1; i <= pagesCount; i++){
        pages.push(i);
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
                    <a href="#">5</a>
                    <a href="#">10</a>
                    <a href="#">20</a>
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
                                    <button onClick={() => {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{withCredentials:true, headers: {'API-KEY' : '5f4e0eb4-b44d-40ae-82dd-390855809b59'}}).then(response => {
                                            if(response.data.resultCode == 0){
                                                    props.unfollow(u.id)
                                                }
                                            })
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{withCredentials:true, headers: {'API-KEY' : '5f4e0eb4-b44d-40ae-82dd-390855809b59'}}).then(response => {
                                            if(response.data.resultCode == 0){
                                                props.follow(u.id)
                                            }
                                        })
                                        }}>Follow</button>
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
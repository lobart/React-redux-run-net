(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[5],{383:function(e,n,t){},391:function(e,n,t){"use strict";t.r(n),t.d(n,"UsersContainer",(function(){return m}));var o=t(1),s=t(13),r=t(14),i=t(17),c=t(16),l=t(0),a=t.n(l),u=t(26),g=(t(383),t.p+"static/media/UserPhoto.154c648f.jpeg"),d=t(51),h=t(389),f=t(2),j=function(e){for(var n=Math.ceil(e.totalUsersCount/e.pageSize),t=[],o=1;o<=n;o++)t.push(o);return window.onclick=function(e){if(!e.target.matches(".dropbtn")){var n,t=document.getElementsByClassName("dropdown-content");for(n=0;n<t.length;n++){var o=t[n];o.classList.contains("show")&&o.classList.remove("show")}}},Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{children:Object(f.jsx)(h.a,{showSizeChanger:!1,total:e.totalUsersCount,defaultPageSize:e.pageSize,defaultCurrent:1,onChange:function(n){e.onPageChanged(n)}})}),Object(f.jsx)("div",{children:e.users.map((function(n){return Object(f.jsxs)("div",{children:[Object(f.jsxs)("span",{children:[Object(f.jsx)("div",{children:Object(f.jsx)(d.b,{to:"/profile/"+n.id,children:Object(f.jsx)("img",{src:null!=n.photos.small?n.photos.small:g,className:"ava"})})}),Object(f.jsx)("div",{children:n.followed?Object(f.jsx)("button",{disabled:e.followingProgress.some((function(e){return e===n.id})),onClick:function(){e.onUnfollow(n.id)},children:"Unfollow"}):Object(f.jsx)("button",{disabled:e.followingProgress.some((function(e){return e===n.id})),onClick:function(){e.onFollow(n.id)},children:"Follow"})})]}),Object(f.jsxs)("span",{children:[Object(f.jsx)("div",{children:n.name}),Object(f.jsx)("div",{children:n.status})]})]},n.id)}))}),Object(f.jsx)("div",{children:Object(f.jsx)(h.a,{showSizeChanger:!1,total:e.totalUsersCount,defaultPageSize:e.pageSize,defaultCurrent:1,onChange:function(n){e.onPageChanged(n)}})})]})},p=t(75),b=(t(28),t(153)),w=t(21),O=(t(142),function(e){return e.usersPage.users}),C=function(e){return e.usersPage.pageSize},P=function(e){return e.usersPage.totalUsersCount},v=function(e){return e.usersPage.currentPage},x=function(e){return e.usersPage.isFetching},U=function(e){return e.usersPage.followingProgress},m=function(e){Object(i.a)(t,e);var n=Object(c.a)(t);function t(){var e;Object(s.a)(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(e=n.call.apply(n,[this].concat(r))).onPageChanged=function(n){e.props.getUsers(n,e.props.pageSize)},e.onFollow=function(n){e.props.onFollow(n)},e.onUnfollow=function(n){e.props.onUnfollow(n)},e}return Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(f.jsxs)(f.Fragment,{children:[this.props.isFetching?Object(f.jsx)(p.a,{}):null,Object(f.jsx)(j,Object(o.a)(Object(o.a)({},this.props),{},{onPageChanged:this.onPageChanged,onUnfollow:this.onUnfollow,onFollow:this.onFollow}),"Users")]})}}]),t}(a.a.Component);n.default=Object(w.d)(Object(u.b)((function(e){return{users:O(e),pageSize:C(e),totalUsersCount:P(e),currentPage:v(e),isFetching:x(e),followingProgress:U(e)}}),{follow:b.b,unfollow:b.k,setUsers:b.j,setCurrentPage:b.f,setTotalUsersCount:b.i,setToggleIsFetching:b.h,setToggleIsFProgress:b.g,getUsers:b.c,onUnfollow:b.e,onFollow:b.d}))(m)}}]);
//# sourceMappingURL=5.fdb40e77.chunk.js.map
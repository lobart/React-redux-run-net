(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{115:function(t,e,n){t.exports={userphoto:"ProfileInfo_userphoto__Mkeme",description:"ProfileInfo_description__2yWda",wallpaper:"ProfileInfo_wallpaper__1teYi",name:"ProfileInfo_name__1VvQB"}},140:function(t,e,n){t.exports={content:"Profile_content__2wLDD",myPosts:"Profile_myPosts__1Amim"}},143:function(t,e,n){t.exports={inputStatus:"ProfileStatus_inputStatus__3akKk",inputStatusEdit:"ProfileStatus_inputStatusEdit__17yBI"}},144:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n(1),a=n(13),o=n(14),s=n(17),c=n(16),i=n(0),u=n.n(i),l=n(22),p=n(2),d=function(t){return function(e){Object(s.a)(i,e);var n=Object(c.a)(i);function i(){return Object(a.a)(this,i),n.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return this.props.isAuth?Object(p.jsx)(t,Object(r.a)({},this.props)):Object(p.jsx)(l.a,{to:"/login"})}}]),i}(u.a.Component)}},154:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"c",(function(){return u}));var r=n(52),a=n(1),o="message/ADD-MESSAGE",s="message/UPDATE-TEXT-MESSAGE",c={messagesData:[{message:"Hello!"},{message:"Salut!"},{message:"Ty zdes!"}],newMessageText:"Type new message!"},i=function(t){return{type:o,text:t}},u=function(t){return{type:s,text:t}};e.b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case o:return Object(a.a)(Object(a.a)({},t),{},{messagesData:[].concat(Object(r.a)(t.messagesData),[{message:e.text}])});case s:return Object(a.a)(Object(a.a)({},t),{},{newMessageText:e.text});default:return t}}},155:function(t,e,n){"use strict";n.d(e,"b",(function(){return O})),n.d(e,"k",(function(){return m})),n.d(e,"j",(function(){return g})),n.d(e,"f",(function(){return x})),n.d(e,"i",(function(){return v})),n.d(e,"h",(function(){return P})),n.d(e,"g",(function(){return y})),n.d(e,"c",(function(){return w})),n.d(e,"e",(function(){return S})),n.d(e,"d",(function(){return _}));var r=n(18),a=n.n(r),o=n(29),s=n(52),c=n(1),i=n(28),u="user/FOLLOW",l="user/UNFOLLOW",p="user/SETUSERS",d="user/SETCURRENTPAGE",j="user/SETTOTALUSERSCOUNT",f="user/TOGGLE_IS_FETCHING",b="user/TOGGLE_IS_FPROGRESS",h={users:[],pageSize:5,totalUsersCount:20,currentPage:2,isFetching:!1,followingProgress:[]},O=function(t){return{type:u,userID:t}},m=function(t){return{type:l,userID:t}},g=function(t){return{type:p,users:t}},x=function(t){return{type:d,currentPage:t}},v=function(t){return{type:j,totalUsersCount:t}},P=function(t){return{type:f,isFetching:t}},y=function(t,e){return{type:b,isFetching:t,userID:e}},w=function(t,e){return function(){var n=Object(o.a)(a.a.mark((function n(r){var o;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(x(t)),r(P(!0)),n.next=4,i.d.getUsers(t,e);case 4:o=n.sent,r(P(!1)),r(g(o.items)),r(v(o.totalCount));case 8:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},S=function(t){return function(){var e=Object(o.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(y(!0,t)),e.next=3,i.b.toUnFollow(t);case 3:0==e.sent.resultCode&&n(m(t)),n(y(!1,t));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},_=function(t){return function(){var e=Object(o.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(y(!0,t)),e.next=3,i.b.toFollow(t);case 3:0==e.sent.resultCode&&n(O(t)),n(y(!1,t));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case u:return Object(c.a)(Object(c.a)({},t),{},{users:t.users.map((function(t){return t.id===e.userID?Object(c.a)(Object(c.a)({},t),{},{followed:!0}):t}))});case l:return Object(c.a)(Object(c.a)({},t),{},{users:t.users.map((function(t){return t.id===e.userID?Object(c.a)(Object(c.a)({},t),{},{followed:!1}):t}))});case p:return Object(c.a)(Object(c.a)({},t),{},{users:e.users});case d:return Object(c.a)(Object(c.a)({},t),{},{currentPage:e.currentPage});case j:return Object(c.a)(Object(c.a)({},t),{},{totalUsersCount:e.totalUsersCount});case f:return Object(c.a)(Object(c.a)({},t),{},{isFetching:e.isFetching});case b:return Object(c.a)(Object(c.a)({},t),{},{followingProgress:e.isFetching?[].concat(Object(s.a)(t.followingProgress),[e.userID]):Object(s.a)(t.followingProgress.filter((function(t){return t!=e.userID})))});default:return t}}},204:function(t,e,n){t.exports={button:"MyPosts_button__2WbpQ"}},205:function(t,e,n){t.exports={post:"Post_post__A0EJd"}},206:function(t,e,n){t.exports={preloader:"Preloader_preloader__2dvkO"}},28:function(t,e,n){"use strict";n.d(e,"d",(function(){return o})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return i}));var r=n(189),a=n.n(r).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"ed386668-28b4-45de-98f4-ed82c5c0ecc4"}}),o={getUsers:function(t,e){return a.get("users?page=".concat(t,"&count=").concat(e)).then((function(t){return t.data}))},getProfile:function(t){return console.warn("Obsolete warning! Please, use new method!"),c.getProfile(t)},authMe:function(){return console.warn("Obsolete warning! Please, use new method!"),i.me()}},s={toFollow:function(t){return a.post("follow/".concat(t)).then((function(t){return t.data}))},toUnFollow:function(t){return a.delete("follow/".concat(t)).then((function(t){return t.data}))}},c={getProfile:function(t){return a.get("profile/".concat(t)).then((function(t){return t.data}))},pushProfile:function(t){return a.put("profile",t,{headers:{"Content-Type":"application/json"}}).then((function(t){return console.log(t),t.data}))},getStatus:function(t){return a.get("profile/status/".concat(t)).then((function(t){return t.data}))},updateStatus:function(t){return a.put("profile/status",{status:t})},uploadPhoto:function(t){var e=new FormData;return e.append("image",t),a.put("profile/photo",e,{headers:{"Content-Type":"multipart/form-data"}})}},i={me:function(){return a.get("auth/me")},login:function(t,e,n){return a.post("auth/login",{email:t,password:e,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},318:function(t,e,n){},365:function(t,e,n){"use strict";n.r(e),n.d(e,"rendererer",(function(){return je}));var r=function(t){t&&t instanceof Function&&n.e(6).then(n.bind(null,391)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,o=e.getLCP,s=e.getTTFB;n(t),r(t),a(t),o(t),s(t)}))},a=n(21),o=n(1),s=n(18),c=n.n(s),i=n(29),u=n(28),l=n(70),p="auth/SET_AUTH_USER_DATA",d={userId:null,email:null,login:null,isAuth:!1},j=function(t,e,n,r){return{type:p,payload:{userId:t,email:e,login:n,isAuth:r}}},f=function(){return function(){var t=Object(i.a)(c.a.mark((function t(e){var n,r,a,o,s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.me();case 2:0===(n=t.sent).data.resultCode&&(r=n.data.data,a=r.id,o=r.email,s=r.login,e(j(a,o,s,!0)));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(){return function(){var t=Object(i.a)(c.a.mark((function t(e){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.logout();case 2:0===t.sent.data.resultCode&&e(j(null,null,null,!1));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case p:return Object(o.a)(Object(o.a)({},t),e.payload);default:return t}},O="dialogs/ADD-DIALOG",m={dialogsData:[{name:"Archi",id:1},{name:"Roma",id:2},{name:"Lex",id:3}]},g=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case O:var n={id:4,name:e.dialog},r=Object(o.a)({},t);return r.dialogsData=Object(o.a)({},t.dialogsData),r.dialogsData.push(n),r;default:return t}},x=n(52),v="profile/ADD-POST",P="profile/UPDATE-TEXT-POST",y="profile/SET_USER_PROFILE",w="profile/SET_STATUS",S="profile/SET_AVA",_={contentDataPosts:[{post:"Hello!"},{post:"Everybody!"},{post:"Vyshe Ruki!"},{post:"Suki Blyadi!"}],newPostText:"Type new Post!",profile:null,status:"Status"},C=function(t){return{type:y,profile:t}},D=function(t){return{type:w,status:t}},k=function(t){return{type:S,image:t}},I=function(t){return function(){var e=Object(i.a)(c.a.mark((function e(n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.c.getProfile(t);case 2:r=e.sent,n(C(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},A=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case v:return Object(o.a)(Object(o.a)({},t),{},{contentDataPosts:[].concat(Object(x.a)(t.contentDataPosts),[{post:e.text}])});case P:return Object(o.a)(Object(o.a)({},t),{},{newPostText:e.text});case y:return Object(o.a)(Object(o.a)({},t),{},{profile:e.profile});case w:return Object(o.a)(Object(o.a)({},t),{},{status:e.status});case S:return Object(o.a)(Object(o.a)({},t),{},{profile:Object(o.a)(Object(o.a)({},t.profile),{},{photos:e.image})});default:return t}},F=n(154),E={navData:[{name:"Dialog",url:"/dialogs"},{name:"Profile",url:"/profile/15362"},{name:"Friends",url:"/friends"},{name:"Competitions",url:"/competitions"},{name:"Users",url:"/users"}]},T=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E;return t},U=n(155),M="header/SET_USER_INFO",N="header/SET_USER_PHOTO",L={userData:{id:null,login:null},userPhoto:null},R=function(t){return{type:M,userData:t}},z=function(t){return{type:N,userPhoto:t}},H=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case M:return Object(o.a)(Object(o.a)({},t),{},{userData:{id:e.userData.id,login:e.userData.login}});case N:return Object(o.a)(Object(o.a)({},t),{},{userPhoto:e.userPhoto});default:return t}},B=n(190),G=n(185),J="SET_INITIALIZED",V={initialized:null},K=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case J:return{initialized:!0};default:return t}},W=Object(a.c)({dialogsPage:g,profilePage:A,messagesPage:F.b,navPage:T,usersPage:U.a,headerPage:H,auth:h,form:G.a,app:K}),Q=Object(a.e)(W,Object(a.a)(B.a));window.store=Q;var Y=Q,X=n(33),q=n.n(X),Z=n(13),$=n(14),tt=n(17),et=n(16),nt=(n(318),n(0)),rt=n.n(nt),at=(n(102),n(371)),ot=n(372),st=n(374),ct=n(375),it=n(376),ut=n(51),lt=n(59),pt=n(2),dt=(at.a.SubMenu,function(t){Object(tt.a)(n,t);var e=Object(et.a)(n);function n(){var t;Object(Z.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={collapsed:!1},t.toggleCollapsed=function(){t.setState({collapsed:!t.state.collapsed})},t.NavDataMap=t.props.navData.map((function(t){return Object(pt.jsx)(at.a.Item,{icon:Object(pt.jsx)(st.a,{}),children:Object(pt.jsx)(ut.b,{to:t.url,children:t.name})},t.name)})),t}return Object($.a)(n,[{key:"render",value:function(){return Object(pt.jsxs)(lt.b,{style:{width:256},collapsible:!0,defaultCollapsed:!0,collapsed:this.state.collapsed,children:[Object(pt.jsx)(ot.a,{type:"primary",onClick:this.toggleCollapsed,style:{marginBottom:16},children:rt.a.createElement(this.state.collapsed?ct.a:it.a)}),Object(pt.jsx)(at.a,{defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],mode:"inline",theme:"dark",inlineCollapsed:this.state.collapsed,children:this.NavDataMap})]})}}]),n}(rt.a.Component)),jt=n(26),ft=Object(jt.b)((function(t){return{navData:t.navPage.navData}}))(dt),bt=n(22),ht=n(140),Ot=n.n(ht),mt=n(204),gt=n.n(mt),xt=n(205),vt=n.n(xt),Pt=function(t){return Object(pt.jsxs)("div",{children:[Object(pt.jsx)("div",{className:vt.a.post,children:Object(pt.jsx)("img",{src:"https://www.old-games.ru/games/pc/postal/covers/146_5e5bceebe9096.jpg"})}),Object(pt.jsx)("span",{children:t.message}),Object(pt.jsxs)("div",{children:[Object(pt.jsx)("span",{children:"Like"}),Object(pt.jsx)("span",{children:"Dislike"})]})]})},yt=n(182),wt=n(183),St=n(68),_t=n(73),Ct=Object(St.a)(10),Dt=Object(wt.a)({form:"dialogsAddPostForm"})((function(t){return Object(pt.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(pt.jsx)("div",{children:Object(pt.jsx)(yt.a,{component:_t.b,name:"newPostBody",placeholder:"New post",validate:[St.b,Ct]})}),Object(pt.jsx)("div",{children:Object(pt.jsx)("button",{className:gt.a.button,children:"Add post"})})]})})),kt=rt.a.memo((function(t){var e=t.postsData.map((function(t){return Object(pt.jsx)(Pt,{message:t.post})}));return Object(pt.jsxs)("div",{children:[Object(pt.jsx)(Dt,{onSubmit:function(e){t.addPost(e.newPostBody),console.log(e.newPostBody)}}),Object(pt.jsx)("div",{children:e})]})})),It=Object(jt.b)((function(t){return{newPostText:t.profilePage.newPostText,postsData:t.profilePage.contentDataPosts}}),(function(t){return{onPostChange:function(e){t(function(t){return{type:P,text:t}}(e))},addPost:function(e){t(function(t){return{type:v,text:t}}(e))}}}))(kt),At=n(115),Ft=n.n(At),Et=n(77),Tt=n(10),Ut=n(143),Mt=n.n(Ut),Nt=function(t){var e=Object(nt.useState)(!1),n=Object(Tt.a)(e,2),r=n[0],a=n[1],o=Object(nt.useState)(t.status),s=Object(Tt.a)(o,2),c=s[0],i=s[1];Object(nt.useEffect)((function(){i(t.status)}),[t.status]);return Object(pt.jsxs)("div",{children:[!r&&Object(pt.jsx)("div",{className:Mt.a.inputStatus,children:Object(pt.jsx)("span",{onDoubleClick:function(){a(!0)},children:c})}),r&&Object(pt.jsx)("div",{className:Mt.a.inputStatusEdit,children:Object(pt.jsx)("input",{autoFocus:!0,onBlur:function(){a(!1),t.updateStatus(c)},value:c,onChange:function(t){i(t.currentTarget.value)}})})]})},Lt=function(t){return Object(pt.jsx)("div",{children:Object(pt.jsx)("input",{name:"myFile",type:"file",onChange:function(e){e.target.files&&t.uploadPhoto(e.target.files[0])}})})},Rt=n(11),zt=n(373),Ht=function(t){Object(tt.a)(n,t);var e=Object(et.a)(n);function n(){var t;Object(Z.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={size:"default",editMode:!1,profile:t.props.profile},t.onClick=function(){!0===t.state.editMode&&t.props.pushProfile(t.state.profile),t.setState({editMode:!t.state.editMode,profile:t.props.profile})},t.onChange=function(e){t.setState({size:e.target.value})},t.onChangeProfileProps=function(e){return function(n){t.setState({profile:Object(o.a)(Object(o.a)({},t.state.profile),{},Object(Rt.a)({},e,n.target.value))})}},t.onChangeProfileContactsProps=function(e){return function(n){t.setState({profile:Object(o.a)(Object(o.a)({},t.state.profile),{},{contacts:Object(o.a)(Object(o.a)({},t.state.profile.contacts),{},Object(Rt.a)({},e,n.target.value))})}),n.target.value=t.state.profile.contacts[e]}},t.InfoDataMap=Object.entries(t.state.profile.contacts).map((function(t){return Object(pt.jsxs)("div",{children:[t[0]+" : "+t[1],Object(pt.jsx)("br",{})]})})),t.InputDataMap=Object.entries(t.state.profile.contacts).map((function(e){return Object(pt.jsxs)("div",{children:[e[0],Object(pt.jsx)("input",{autoFocus:!0,value:t.state.profile.contacts[e[0]],onChange:t.onChangeProfileContactsProps(e[0])})]})})),t}return Object($.a)(n,[{key:"render",value:function(){return Object(pt.jsxs)("div",{children:[Object(pt.jsx)("br",{}),Object(pt.jsx)("br",{}),Object(pt.jsx)(zt.b,{fontcolor:"white",bordered:!0,title:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u043f\u0440\u043e\u0444\u0438\u043b\u0435",size:this.state.size,extra:Object(pt.jsx)(ot.a,{onClick:this.onClick,type:"primary",children:"Edit"}),children:this.state.editMode?Object(pt.jsxs)(pt.Fragment,{children:[Object(pt.jsx)(zt.b.Item,{label:"Name",children:Object(pt.jsx)("input",{autoFocus:!0,value:this.state.profile.fullName,onChange:this.onChangeProfileProps("fullName")})}),Object(pt.jsx)(zt.b.Item,{label:"Looking for a job",children:Object(pt.jsx)("input",{autoFocus:!0,value:this.state.profile.lookingForAJob,onChange:this.onChangeProfileProps("lookingForAJob")})}),Object(pt.jsx)(zt.b.Item,{label:"Resume",children:Object(pt.jsx)("input",{autoFocus:!0,value:this.state.profile.lookingForAJobDescription,onChange:this.onChangeProfileProps("lookingForAJobDescription")})}),Object(pt.jsx)(zt.b.Item,{label:"About me",children:Object(pt.jsx)("input",{autoFocus:!0,value:this.state.profile.aboutMe,onChange:this.onChangeProfileProps("aboutMe")})}),Object(pt.jsx)(zt.b.Item,{label:"Contacts",children:this.InputDataMap})]}):Object(pt.jsxs)(pt.Fragment,{children:[Object(pt.jsx)(zt.b.Item,{label:"Name",children:this.props.profile.fullName}),Object(pt.jsx)(zt.b.Item,{label:"Looking for a job",children:this.props.profile.lookingForAJob?"Yes":"No"}),Object(pt.jsx)(zt.b.Item,{label:"Resume",children:this.props.profile.lookingForAJobDescription}),Object(pt.jsx)(zt.b.Item,{label:"About me",children:this.props.profile.aboutMe}),Object(pt.jsx)(zt.b.Item,{label:"Contacts",children:this.InfoDataMap})]})}),Object(pt.jsx)("br",{}),Object(pt.jsx)("br",{})]})}}]),n}(rt.a.Component),Bt=function(t){return t.profile?Object(pt.jsx)("div",{className:Ft.a.wallpaper,children:Object(pt.jsxs)("div",{className:Ft.a.description,children:[Object(pt.jsx)("img",{className:Ft.a.userphoto,src:t.profile.photos.small?t.profile.photos.small:"https://homemania.ru/img/noavatar.png"}),Object(pt.jsx)("div",{children:t.isOwner&&Object(pt.jsx)(Lt,{uploadPhoto:t.uploadPhoto})}),Object(pt.jsx)("div",{children:Object(pt.jsx)(Ht,{getProfile:t.getProfile,pushProfile:t.pushProfile,profile:t.profile})}),Object(pt.jsx)(Nt,{status:t.status,updateStatus:t.updateStatus})]})}):Object(pt.jsx)(Et.a,{})},Gt=function(t){return Object(pt.jsxs)("div",{className:Ot.a.content,children:[Object(pt.jsx)(Bt,{pushProfile:t.pushProfile,uploadPhoto:t.uploadPhoto,isOwner:t.isOwner,profile:t.profile,status:t.status,updateStatus:t.updateStatus}),Object(pt.jsx)("div",{className:Ot.a.myPosts,children:Object(pt.jsx)(It,{store:t.store})})]})},Jt=n(144),Vt=function(t){Object(tt.a)(n,t);var e=Object(et.a)(n);function n(){return Object(Z.a)(this,n),e.apply(this,arguments)}return Object($.a)(n,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userID;t||(t=this.props.authUserId),console.log("Mount"),this.props.getProfile(t),this.props.getStatus(t)}},{key:"componentWillUnmount",value:function(){console.log("Unmount")}},{key:"componentDidUpdate",value:function(t,e,n){t.match.params.userID!==this.props.match.params.userID&&(this.props.getProfile(this.props.match.params.userID),this.props.getStatus(this.props.match.params.userID))}},{key:"render",value:function(){return Object(pt.jsx)("div",{children:Object(pt.jsx)(Gt,Object(o.a)(Object(o.a)({},this.props),{},{uploadPhoto:this.props.uploadPhoto,isOwner:this.props.match.params.userID,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))})}}]),n}(rt.a.Component),Kt=Object(a.d)(Object(jt.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,isAuth:t.auth.isAuth,authUserId:t.auth.userId}}),{setUserProfile:C,getProfile:I,getStatus:function(t){return function(){var e=Object(i.a)(c.a.mark((function e(n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.c.getStatus(t);case 2:r=e.sent,n(D(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},updateStatus:function(t){return function(){var e=Object(i.a)(c.a.mark((function e(n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.c.updateStatus(t);case 2:0===e.sent.data.resultCode&&n(D(t));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},getAuthUserData:f,uploadPhoto:function(t){return function(){var e=Object(i.a)(c.a.mark((function e(n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.c.uploadPhoto(t);case 2:0===(r=e.sent).data.resultCode&&n(k(r.data.data.photos));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},pushProfile:function(t){return function(){var e=Object(i.a)(c.a.mark((function e(n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.c.pushProfile(t);case 2:0===(r=e.sent).resultCode&&(console.log(r.messages),n(I(t.userId)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}),Jt.a,bt.f)(Vt),Wt=n(93),Qt=n.n(Wt),Yt=n(55),Xt=function(t){return Object(pt.jsxs)(Yt.c,{className:Qt.a.header,children:[Object(pt.jsxs)("div",{align:"right",children:[Object(pt.jsx)("img",{className:Qt.a.ava,src:t.photo?t.photo:"https://homemania.ru/img/noavatar.png"}),t.isAuth?Object(pt.jsx)("button",{onClick:t.logout,children:"Logout"}):Object(pt.jsx)(ut.b,{to:"/login"})]}),Object(pt.jsx)("div",{className:Qt.a.d1,children:Object(pt.jsx)("h3",{children:Object(pt.jsx)("span",{children:"RUSSbook"})})}),Object(pt.jsx)("div",{align:"left",className:Qt.a.log,children:Object(pt.jsx)("h4",{children:Object(pt.jsx)("span",{children:t.login})})})]})},qt=function(t){Object(tt.a)(n,t);var e=Object(et.a)(n);function n(){return Object(Z.a)(this,n),e.apply(this,arguments)}return Object($.a)(n,[{key:"componentDidMount",value:function(){this.props.setProfileHeader()}},{key:"render",value:function(){return Object(pt.jsx)(Xt,Object(o.a)(Object(o.a)({},this.props),{},{login:this.props.login,photo:this.props.userPhoto}))}}]),n}(rt.a.Component),Zt=Object(jt.b)((function(t){return{userPhoto:t.headerPage.userPhoto,isAuth:t.auth.isAuth,login:t.auth.login}}),{setUserInfo:R,setUserPhoto:z,setProfileHeader:function(){return function(){var t=Object(i.a)(c.a.mark((function t(e){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.d.authMe();case 2:return n=t.sent,e(R(n.data.data)),t.next=6,u.d.getProfile(n.data.data.id);case 6:r=t.sent,e(z(r.photos.small));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},logout:b})(qt),$t=n(90),te=n.n($t),ee=Object(St.a)(20),ne=Object(wt.a)({form:"loginForm"})((function(t){return Object(pt.jsxs)("form",{onSubmit:t.handleSubmit,action:"",children:[Object(pt.jsxs)("div",{children:[Object(pt.jsx)("div",{children:Object(pt.jsx)(yt.a,{component:_t.b,name:"email",placeholder:"login",validate:[St.b,ee]})}),Object(pt.jsx)("div",{children:Object(pt.jsx)(yt.a,{component:_t.b,name:"password",placeholder:"password",validate:[St.b,ee]})}),Object(pt.jsxs)("div",{children:[Object(pt.jsx)(yt.a,{component:_t.a,name:"rememberMe",type:"checkbox"})," Remember me"]})]}),t.error&&Object(pt.jsx)("div",{className:te.a.formSummaryError,children:t.error}),Object(pt.jsxs)("div",{children:[Object(pt.jsx)("button",{type:"submit",align:"left",children:"Login"}),Object(pt.jsx)("button",{type:"button",align:"right",children:"Log out"})]})]})})),re=function(t){return t.isAuth?Object(pt.jsx)(bt.a,{to:"/profile"}):Object(pt.jsx)("div",{children:Object(pt.jsx)(ne,{onSubmit:function(e){t.login(e.email,e.password,e.rememberMe),console.log(e)}})})},ae=function(t){Object(tt.a)(n,t);var e=Object(et.a)(n);function n(){return Object(Z.a)(this,n),e.apply(this,arguments)}return Object($.a)(n,[{key:"render",value:function(){return Object(pt.jsx)(re,Object(o.a)({},this.props))}}]),n}(rt.a.Component),oe=Object(jt.b)((function(t){return{email:t.auth.email,password:t.auth.password,rememberMe:t.auth.rememberMe,isAuth:t.auth.isAuth}}),{login:function(t,e,n){return function(){var r=Object(i.a)(c.a.mark((function r(a){var o,s;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.a.login(t,e,n);case 2:0===(o=r.sent).data.resultCode?(a(f()),console.log("Authorization is on!")):(s=o.data.messages.length?o.data.messages[0]:"Some wrong!",a(Object(l.a)("loginForm",{_error:s})),console.log("Invalid authorization!"));case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()},logout:b})(ae),se=n(370),ce=rt.a.lazy((function(){return n.e(4).then(n.bind(null,393))})),ie=rt.a.lazy((function(){return Promise.all([n.e(3),n.e(5)]).then(n.bind(null,394))})),ue=(se.a.Header,se.a.Footer),le=(se.a.Sider,se.a.Content),pe=function(t){Object(tt.a)(n,t);var e=Object(et.a)(n);function n(){return Object(Z.a)(this,n),e.apply(this,arguments)}return Object($.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){var t=this;return this.props.initialized?Object(pt.jsx)(pt.Fragment,{children:Object(pt.jsx)(ut.a,{basename:"/React-redux-run-net",children:Object(pt.jsxs)(se.a,{children:[Object(pt.jsx)(ft,{store:this.props.store}),Object(pt.jsxs)(se.a,{children:[Object(pt.jsx)(Zt,{}),Object(pt.jsxs)(le,{className:"site-layout-background",style:{margin:"24px 16px",padding:24,minHeight:280},children:[Object(pt.jsx)(rt.a.Suspense,{fallback:Object(pt.jsx)(Et.a,{}),children:Object(pt.jsxs)(bt.b,{exact:!0,path:"/dialogs",children:[" ",Object(pt.jsx)(ce,{store:this.props.store})]})}),Object(pt.jsx)(bt.b,{exact:!0,path:"/profile/:userID?",children:Object(pt.jsx)(Kt,{store:this.props.store})}),Object(pt.jsx)(rt.a.Suspense,{fallback:Object(pt.jsx)(Et.a,{}),children:Object(pt.jsx)(bt.b,{exact:!0,path:"/users",render:function(){return Object(pt.jsx)(ie,{store:t.props.store},"UserContainer")}})}),Object(pt.jsx)(bt.b,{exact:!0,path:"/login",render:function(){return Object(pt.jsx)(oe,{store:t.props.store},"LoginContainer")}})]}),Object(pt.jsx)(ue,{children:"Footer"})]})]})})}):Object(pt.jsx)(Et.a,{})}}]),n}(nt.Component),de=Object(a.d)(Object(jt.b)((function(t){return{initialized:t.app.initialized}}),{initializeApp:function(){return function(t){var e=t(f());Promise.all([e]).then((function(){var e;t({type:J,initialized:e})}))}}}))(pe),je=function(){return q.a.render(Object(pt.jsx)(rt.a.StrictMode,{children:Object(pt.jsx)(jt.a,{store:Y,children:Object(pt.jsx)(de,{})})}),document.getElementById("root"))};Y.subscribe(je),je(),r()},68:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}));var r=function(t){return function(e){if(e.length>t)return"Value is more then ".concat(t)}},a=function(t){if(!t)return"Value is required!"}},73:function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return l}));var r=n(1),a=n(27),o=(n(0),n(102),n(90)),s=n.n(o),c=n(2),i=function(t){t.input;var e=t.meta,n=Object(a.a)(t,["input","meta"]),r=e.touched&&e.error;return Object(c.jsx)("div",{className:s.a.formControl+" "+(r?s.a.error:""),children:Object(c.jsx)("div",{children:n.children})})},u=function(t){var e=t.input,n=(t.meta,t.child,Object(a.a)(t,["input","meta","child"]));return Object(c.jsx)(i,Object(r.a)(Object(r.a)({},t),{},{children:Object(c.jsx)("input",Object(r.a)(Object(r.a)({},e),n))}))},l=function(t){var e=t.input,n=(t.meta,t.child,Object(a.a)(t,["input","meta","child"]));return Object(c.jsx)(i,Object(r.a)(Object(r.a)({},t),{},{children:Object(c.jsx)("input",Object(r.a)(Object(r.a)({},e),n))}))}},77:function(t,e,n){"use strict";n(0);var r=n(366),a=n(367),o=n(206),s=n.n(o),c=n(2);e.a=function(t){return Object(c.jsx)("div",{className:s.a.preloader,children:Object(c.jsx)(r.a,{tip:"Loading...",children:Object(c.jsx)(a.a,{message:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435",description:"\u0418\u0434\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438.",type:"info"})})})}},90:function(t,e,n){t.exports={formControl:"FormControls_formControl__2SPvv",error:"FormControls_error__3zfBa",formSummaryError:"FormControls_formSummaryError__2ffxR"}},93:function(t,e,n){t.exports={header:"Header_header__1VCKf",ava:"Header_ava__1jVPU",log:"Header_log__mxIf0",d1:"Header_d1__3OQvB"}}},[[365,1,2]]]);
//# sourceMappingURL=main.a08ed677.chunk.js.map
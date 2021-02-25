import s from "./Post.module.css";

const Post = (props) => {
    return (
        <div>
            <div className={s.post}>
                <img src='https://www.old-games.ru/games/pc/postal/covers/146_5e5bceebe9096.jpg'/>
            </div>
            <span>{props.message}</span>
            <div>
            <span>Like</span>
            <span>Dislike</span>
            </div>
        </div>
    )
}

export default Post;
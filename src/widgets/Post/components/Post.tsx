import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import postStore from "../models/store.tsx"
import { useParams } from "react-router";
import Post from "../../../entities/Post/Post.tsx";
import Comment from "../../../entities/Post/Comment.tsx";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";


interface PostItem {
    post: Post
    comments: Comment[]
}
const PostItem: React.FC<PostItem> = observer(({ post, comments = [] }) => {
    return (
        <>
            <div className={styles.post}>
                <Link to="/">
                    <span className="material-symbols-outlined">
                        keyboard_backspace
                    </span></Link>

                <h2 className={styles["post-title"]}>Пост #{post?.id}</h2>
                <h1 className={styles["post-title"]}>{post?.title}</h1>
                {/* <p className={styles["post-author"]}>{post?.userId}</p> */}

                <p className={styles["post-content"]}>{post?.body}</p>
            </div>
            <div className={styles.comments}>
                <h2>Комментарии</h2>
                {comments.length === 0 ? <span>Пока что комментариев нет <span style={{ fontSize: "2rem" }}>&#129402;</span></span> : null}
                {comments?.map((el) => {
                    return (
                        <div className={styles.comment} key={el?.id}>
                            <div className={styles.avatar}></div>
                            <div className={styles["comment-content"]}>
                                <p className={styles["comment-text"]}>{el?.body}</p>
                                <span className={styles["comment-author"]}>Автор:</span><br></br>
                                <span className={styles["comment-author"]}>{el?.name}</span>
                            </div>
                        </div>
                    )
                })}

            </div>
        </>

    )

})

export default PostItem;
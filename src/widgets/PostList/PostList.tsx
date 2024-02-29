import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import PostItem from "../Post/components/Post.tsx";
import Post from "../../entities/Post/Post.tsx";
import styles from "./styles.module.scss"
import { Link } from "react-router-dom";
import { FixedSizeList as List } from 'react-window';
import InfiniteScroll from "react-infinite-scroll-component";
import postStore from "../Post/models/store.tsx";

interface PostList {
    post: Array<Post>,
}




const PostList: React.FC<PostList> = observer(({ post = [] }) => {

    return (
        <div className={styles.posts}>
            <InfiniteScroll
                dataLength={post.length}
                next={postStore.addPostsForScroll}
                hasMore={true}
            >
                <div className='container'>
                    <div className='row'>
                        {post &&
                            post.map((item, index) => {
                                return (
                                    <div className={styles.post} key={index} >
                                        <span>
                                            #{index + 1}
                                        </span>
                                        <h2>
                                            {item?.title}
                                        </h2>
                                        <p>
                                            {item?.body}
                                        </p>
                                        <div style={{ width: "100%", textAlign: "right", marginTop: "8px" }}>
                                            <Link to={`post/${item?.id}`} className={styles.link}>
                                                Посмотреть
                                                <span className="material-symbols-outlined">
                                                    arrow_right_alt
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                </div>
            </InfiniteScroll>

        </div>
    )

})

export default PostList;
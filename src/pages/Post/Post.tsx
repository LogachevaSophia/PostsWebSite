import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import PostItem from "../../widgets/Post/components/Post.tsx";
import postStore from "../../widgets/Post/models/store.tsx";
import { useParams } from "react-router";
import styles from "./styles.module.scss";

const PostPage = observer((props)=>{
    const { id } = useParams()
    useEffect(() => {
        postStore.fetchPostById(id);
        postStore.fetchCommentsPost(id)
    }, [])
    return (
        <div className={styles.container}>
            <PostItem post={postStore?.currentPost} comments={postStore?.currentPost?.commets}></PostItem>

        </div>
    )
})
export default PostPage
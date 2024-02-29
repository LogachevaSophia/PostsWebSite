import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import PostList from "../../widgets/PostList/PostList.tsx";
import postStore from "../../widgets/Post/models/store.tsx";
import styles from "./styles.module.scss"

const PostListPage = observer((props)=>{

    useEffect(() => {
        postStore.getdata();
    }, [])
    // useEffect(() => {
    //     const handleScroll = () => {
    //         console.log(window.innerHeight + document.documentElement.scrollTop)
    //         console.log(document.documentElement.offsetHeight)
    //         if (window.innerHeight + document.documentElement.scrollTop+10 >= document.documentElement.offsetHeight) {
                
    //             postStore.addPostsForScroll();
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);
    return(
        <div className={styles.container}>
            <PostList post={postStore.data}></PostList>
        </div>
    )
})
export default PostListPage
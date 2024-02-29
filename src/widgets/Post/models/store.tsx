import { makeAutoObservable, runInAction } from "mobx";
import Post from "../../../entities/Post/Post.tsx"
import Comment from "../../../entities/Post/Comment.tsx"
import API from "../api/api.tsx"

class PostStore{
    API_URL = 'https://jsonplaceholder.typicode.com';
    constructor(){
        makeAutoObservable(this)
    }
    currentPost:Post;
    data:Array<Post> = [];

    getdata = async()=>{
        try {
            const result = await API.getPosts()

            runInAction(()=>{

                this.data=result.data
                // console.log(this.data)

            })
            
            
            return result;
          } catch (error) {
            console.error('Error fetching posts:', error);
          }
    }
    fetchPostById = async(id)=> {
        try {

          const result = await API.GetPostById(id)

          runInAction(()=>{

            this.currentPost = result?.data
            this.currentPost.commets = []

          })
          return true;
        } catch (error) {

          console.error('Error fetching post by id:', error);

        }
      }
    fetchCommentsPost = async(id) =>{
      try {
        const result = await API.getCommetsPost(id)

        runInAction(()=>{

          this.currentPost.commets = result?.data
          // console.log(this.currentPost)


        })
        return true;


      } catch (error) {
        console.error('Error fetching post by id:', error);
      }
    }
    addPostsForScroll = () => {
      runInAction(()=>{
        this.data?.push(...this.data)
      })
     
    }
}

const postStore = new PostStore();
export default postStore;
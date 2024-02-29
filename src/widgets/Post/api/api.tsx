import axios from "../../../shared/configApi/configApi.tsx"

export default{
    getPosts () {
        return axios.get("/posts")
    } , 
    GetPostById (id) {
        return axios.get(`/posts/${id}`)
    },   
    getCommetsPost(id){
        return axios.get(`/posts/${id}/comments`)
    }
}

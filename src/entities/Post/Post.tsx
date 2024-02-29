import Comment from "./Comment"

export default interface Post {
    id: number,
    userId: number,
    title: string,
    body: string,
    commets: Array<Comment>
}


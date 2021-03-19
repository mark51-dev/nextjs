export interface IPost {
    id: number,
    title: string,
    body: string,
    comments?: Array<Comment>
}

export interface Comment {
    id?: number,
    postId: number,
    body: string
}

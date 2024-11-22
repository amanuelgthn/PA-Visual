export interface Post {
  author: string
  authImgUrl: string
  updatedat: string
  comment: string
  Likes: number
}

export interface LeaveCommentProps {
  posts: Post[]
}

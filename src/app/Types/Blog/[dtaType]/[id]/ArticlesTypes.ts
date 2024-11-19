export interface Post {
  author: string
  authImgUrl: string
  updatedat: string
  comment: string
  Likes: string
}

export interface LeaveCommentProps {
  posts: Post[]
}

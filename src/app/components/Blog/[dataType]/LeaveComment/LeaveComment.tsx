import React, { useState, ChangeEvent } from 'react'
import { LeaveCommentProps } from '../../../../Types/Blog/[dtaType]/[id]/ArticlesTypes'
import likeIcon from '../../../../../../public/ArticlesDisplay/Like.svg'
import editIcon from '../../../../../../public/ArticlesDisplay/Edit.svg'
import replyIcon from '../../../../../../public/ArticlesDisplay/Reply.svg'
import deleteIcon from '../../../../../../public/ArticlesDisplay/Delete.svg'
import './LeaveComment.scss'

const LeaveComment: React.FC<LeaveCommentProps> = ({ posts }) => {
  const [comments, setComments] = useState(posts) // Managing the state of the comments
  const [editIndex, setEditIndex] = useState<number | null>(null) // Track which comment is being edited
  const [replyIndex, setReplyIndex] = useState<number | null>(null) // Track which comment is being replied to
  const [newComment, setNewComment] = useState('') // Store the new comment input
  const [replyText, setReplyText] = useState('') // Store the reply input text

  // Handle new comment input
  const handleCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewComment(e.target.value)
  }

  // Add a new comment
  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([
        ...comments,
        {
          author: 'New User',
          comment: newComment,
          Likes: 0,
          updatedat: new Date().toISOString(),
          authImgUrl: '',
          // replies: [],
        },
      ])
      setNewComment('')
    }
  }

  // Like functionality

  const handleLike = (index: number) => {
    const updatedComments = [...comments] // Copy the comments array
    const currentLikes = Number(updatedComments[index].Likes) // Get the current number of likes
    updatedComments[index].Likes = currentLikes + 1 // Increment the likes

    setComments(updatedComments) // Update the state with the modified comments array
  }

  // Delete functionality
  const handleDelete = (index: number) => {
    const updatedComments = comments.filter((_, i) => i !== index)
    setComments(updatedComments)
  }

  // Edit functionality
  const handleEdit = (index: number) => {
    setEditIndex(index)
  }

  const handleSaveEdit = (index: number, updatedComment: string) => {
    const updatedComments = [...comments]
    updatedComments[index].comment = updatedComment // Update the comment
    setComments(updatedComments)
    setEditIndex(null) // Exit edit mode
  }

  // Reply functionality
  const handleReply = (index: number) => {
    setReplyIndex(index)
  }

  // const handleAddReply = (index: number) => {
  //   const updatedComments = [...comments]
  //   if (!updatedComments[index].replies) {
  //     updatedComments[index].replies = []
  //   }
  //   updatedComments[index].replies.push(replyText) // Add reply to the comment
  //   setComments(updatedComments)
  //   setReplyText('')
  //   setReplyIndex(null) // Exit reply mode
  // }

  return (
    <>
      <div className='LeaveComment-container'>
        <p className='LeaveComment-header'>Leave a Comment</p>
        <form method='post' action='' className='LeaveComment-post'>
          <input
            type='text'
            className='LeaveComment-input'
            placeholder='Share your thoughts...'
            value={newComment}
            onChange={handleCommentChange}
          />
        </form>
        <button className='LeaveComment-post-btn' onClick={handleAddComment}>
          Post Comment
        </button>
      </div>
      <div className='comments-container'>
        <div className='comments-container-list'>
          {comments.map((iter, index) => (
            <ul className='comments-container-listing' key={index}>
              <li className='listing-lists' key={index}>
                <div className='posts-list'>
                  <div className='posts-list-author'>
                    <img
                      className='posts-author-img'
                      src={iter.authImgUrl}
                      alt={iter.author}
                    ></img>
                    <div className='posts-details'>
                      <p className='posts-list-author-name'>{iter.author}</p>
                      <p className='posts-list-timePosted'>{iter.updatedat}</p>
                    </div>
                  </div>

                  {/* Edit functionality */}
                  {editIndex === index ? (
                    <input
                      type='text'
                      value={iter.comment}
                      onChange={(e) => handleSaveEdit(index, e.target.value)}
                    />
                  ) : (
                    <p className='posts-list-posts'>{iter.comment}</p>
                  )}

                  <div className='posts-list-interactions'>
                    <button
                      className='posts-list-item'
                      onClick={() => handleLike(index)}
                    >
                      <img src={likeIcon.src} alt='like' />
                      <p className='posts-list-numberofLikes'>({iter.Likes})</p>
                    </button>
                    <button
                      className='posts-list-item'
                      onClick={() => handleReply(index)}
                    >
                      <img src={replyIcon.src} alt='reply' />
                      <p className='posts-list-replys'>Reply</p>
                    </button>
                    <button
                      className='posts-list-item'
                      onClick={() => handleEdit(index)}
                    >
                      <img src={editIcon.src} alt='edit' />
                      <p className='posts-list-edit'>Edit</p>
                    </button>
                    <button
                      className='posts-list-item'
                      onClick={() => handleDelete(index)}
                    >
                      <img src={deleteIcon.src} alt='delete' />
                      <p className='posts-list-delete'>Delete</p>
                    </button>
                  </div>

                  {/* Reply functionality */}
                  {replyIndex === index && (
                    <div>
                      <input
                        type='text'
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        placeholder='Type your reply...'
                      />
                      {/* <button onClick={() => handleAddReply(index)}>
                        Reply
                      </button> */}
                    </div>
                  )}
                </div>
              </li>
            </ul>
          ))}
        </div>
        <div className='posts-list-more'>
          <button className='posts-viewmore-button'>VIEW MORE</button>
        </div>
      </div>
    </>
  )
}

export default LeaveComment

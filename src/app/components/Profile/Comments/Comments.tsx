'use client'

import Image from 'next/image'
import { FaStar } from 'react-icons/fa'
import './Comments.scss'
import { Comment } from '@/app/Types/Profile/ProfileTypes'

interface CommentsProps {
  comments: Comment[]
  profilePic: string
}

const Comments: React.FC<CommentsProps> = ({ comments, profilePic }) => {
  if (!comments || comments.length === 0) {
    return <p>No comments available</p>
  }

  return (
    <div className='comments'>
      <h3>Comments</h3>
      <div className='comments-list'>
        {comments.map((commentData, index) => (
          <div key={index} className='comment-card'>
            <div className='comment-header'>
              <div className='user-profile'>
                <Image
                  src={profilePic}
                  alt='User Profile Picture'
                  width={60}
                  height={60}
                  className='profile-pic'
                />
              </div>
              <div className='comment-content'>
                <div className='stars'>
                  {[...Array(commentData.rating)].map((_, i) => (
                    <FaStar key={i} color='#d7a86e' />
                  ))}
                </div>
                <p>{commentData.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Comments

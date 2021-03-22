import React from 'react'

const PostCardLink = ({ post }) => {
  return (
    <div>
      Link: {post.permalink_url}
    </div>
  )
}

export default PostCardLink

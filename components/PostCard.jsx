import React, { useState } from 'react'
import PropTypes from 'prop-types'

import FacebookIcon from '@/FacebookIcon'
import InstagramIcon from '@/InstagramIcon'
import LinkIcon from '@/LinkIcon'
import TickIcon from '@/TickIcon'
import InsightsIcon from '@/InsightsIcon'
import PostCardData from '@/PostCardData'
import PostCardLink from '@/PostCardLink'
import moment from 'moment'

import brandColors from '@/constants/brandColors'

const PostCard = ({ post }) => {
  const [promoteEnabled, updatePromoteEnabled] = useState(post.promotion_enabled)

  console.log('post', post)
  return (
    <div className="col-span-3 ml-5 mt-5">
      <div className="flex justify-between">
        { (post.platform === 'facebook')
          ? <FacebookIcon className="h-4 w-auto" fill={brandColors.facebook.bg} />
          : <InstagramIcon className="h-4 w-auto" fill={brandColors.instagram.bg} />}
        <p className="text-xs"> {moment(post.published_time).format('LL')}</p>
      </div>

      <div
        className="rounded-dialogue mb-4 mt-2 flex justify-center h-80"
        style={{ backgroundImage: post.post_type === 'story' ? `url(${post.thumbnails[0].url})` : 'none' }}
      >
        <img
          src={post.thumbnails[0].url}
          srcSet={post.thumbnails[1] && post.thumbnails[1].url}
          alt=""
        />
      </div>
      <div className="p-2 border-2 border-solid border-green rounded-2xl flex justify-between mb-2 rounded-sm">
        <p className="ml-2">Score</p>
        <p className="mr-2">{post.engagement_score}</p>
      </div>
      <button
        className={`${promoteEnabled ? 'bg-blue' : 'bg-gray-400'} p-2 mb-2 w-full flex flex-row justify-between focus:outline-none`}
        onClick={() => {
          updatePromoteEnabled(!promoteEnabled)
        }}
      >
        <p>Enable</p>
        <div className="h-5 w-5 p-1 bg-white rounded-sm">
          {promoteEnabled && (
            <TickIcon className="w-2 h-2" fill={brandColors.blue} />
          )}
        </div>
      </button>
      <div className="flex">
        <button
          className="h-12 bg-green mr-3 w-3/6 flxe-grow rounded-sm flex flex-row justify-center items-center focus:outline-none"
          onClick={() => {
            <PostCardLink post={post} />
          }}
        >
          <LinkIcon className="w-4 h-auto" fill="white" />
        </button>
        <button
          className="h-12 w-3/6 bg-green flxe-grow rounded-sm flex flex-row justify-center items-center focus:outline-none"
          onClick={() => {
            // TODO: open the sidepanel with PostCardData as its content
            console.log('Open PostCardData')
          }}
        >
          <InsightsIcon className="w-4 h-auto" fill="white" />
        </button>
      </div>
    </div>
  )
}

PostCard.propTypes = {

}

export default PostCard

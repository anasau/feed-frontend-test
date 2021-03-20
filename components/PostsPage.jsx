import React from 'react'
import PostCard from '@/PostCard'
import Sidepanel from '@/Sidepanel'
import fetchPosts from '../api/fetchPosts'

const PostsPage = () => {
  const [posts, setPosts] = React.useState([])

  React.useEffect(() => {
    async function fetch() {
      try {
        const posts = await fetchPosts()
        setPosts(posts)
      } catch (e) {
        console.log(e)
      }
    }
    fetch()
  }, [])

  const [sidepanelContent, setSidepanelContent] = React.useState(null)

  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        {posts.map((post) => {
          return <PostCard post={post} key={post.id} />
        })}
      </div>
      <Sidepanel content={sidepanelContent} setContent={setSidepanelContent} />
    </>
  )
}

export default PostsPage

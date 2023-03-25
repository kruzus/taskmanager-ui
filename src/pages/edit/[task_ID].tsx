import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { task_ID } = router.query

  return <p>{task_ID}</p>
}

export default Post
import { useRouter } from 'next/router'

const IDTask = () => {
  const router = useRouter().query ;
  const { task_ID  } = router;


  return <p>Task ID: {task_ID}</p>;
}

export default IDTask;
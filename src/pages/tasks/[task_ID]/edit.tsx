import { useRouter } from 'next/router'

const EDITPage = () => {
  const router = useRouter().query ;
  const { task_ID  } = router;


  return <p>EDIT ID: {task_ID}</p>;
}

export default EDITPage;
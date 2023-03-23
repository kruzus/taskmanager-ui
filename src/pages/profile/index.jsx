import Head from "next/head";


import UserCard from "../../components/UserCard";


import img from "../../../public/anakin.png"


export default function Profile() {
  return (
    <>
      <Head>
        <title>Profile Data</title>
      </Head>

   
<UserCard 
avatarUrl={img}
fullName={"Anakin Skywalker"}
postCount={66}
username={"ih8sand"}

/>
    </>
  );
}
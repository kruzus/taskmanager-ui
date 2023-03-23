import Image from 'next/image';

const UserCard = ({ username, fullName, postCount, avatarUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md">
      <div className="flex items-center">
        <div className="w-20 h-20 rounded-full overflow-hidden">
          <Image src={avatarUrl} alt={`${username}'s avatar`} width={80} height={80} />
        </div>
        <div className="ml-4">
          <h1 className="text-3xl font-bold">{username}</h1>
          <p className="text-gray-600">{fullName}</p>
          <p className="text-gray-600">{postCount} posts</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ id, name, email, username }) => {
  return (
    <div className='max-w-md mx-auto my-6 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
      <div className='mb-4'>
        <h2 className='text-xl font-bold text-gray-800'>{name}</h2>
        <p className='text-sm text-gray-500'>@{username}</p>
      </div>
      <p className='text-gray-600'>{email}</p>
      <div className='mt-4 text-sm text-gray-500'>
        <span>User ID: {id}</span>
      </div>
    </div>
  );
};

export default UserCard;

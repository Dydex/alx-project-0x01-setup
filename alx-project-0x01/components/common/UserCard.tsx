import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className='max-w-md mx-auto my-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
      <h2 className='text-2xl font-bold text-gray-800 mb-2'>{name}</h2>
      <p className='text-gray-600'>@{username}</p>
      <p className='text-gray-600'>{email}</p>

      {/* Address */}
      <div className='mt-4 text-sm text-gray-500'>
        <p className='font-semibold'>Address:</p>
        <p>
          {address.street}, {address.suite}, {address.city} - {address.zipcode}
        </p>
      </div>

      {/* Phone & Website */}
      <div className='mt-4 text-sm text-gray-500'>
        <p>
          <span className='font-semibold'>Phone:</span> {phone}
        </p>
        <p>
          <span className='font-semibold'>Website:</span> {website}
        </p>
      </div>

      {/* Company */}
      <div className='mt-4 text-sm text-gray-500'>
        <p className='font-semibold'>Company:</p>
        <p>{company.name}</p>
        <p className='italic'>"{company.catchPhrase}"</p>
        <p className='text-xs'>{company.bs}</p>
      </div>

      {/* ID */}
      <div className='mt-4 text-xs text-gray-400'>
        <p>User ID: {id}</p>
      </div>
    </div>
  );
};

export default UserCard;

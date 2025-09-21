import UserCard from '@/components/common/UserCard';
import UserModal from '@/components/common/UserModal';
import Header from '@/components/layout/Header';
import { UserData, UserProps } from '@/interfaces';
import { useState } from 'react';

const Users: React.FC<{ posts: UserProps[] }> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [user, setUser] = useState<UserData | null>(null);

  const handleAddPost = (newPost: UserData) => {
    setUser({ ...newPost, id: posts.length + 1 });
  };

  return (
    <div className='min-h-screen bg-gray-100'>
      <Header />

      <div className='max-w-6xl mx-auto px-4 py-8'>
        <h3 className='text-3xl font-bold text-gray-800 mb-6'>
          User Directory
        </h3>
        <div className='flex justify-between'>
          <h1 className=' text-2xl font-semibold'>Post Content</h1>
          <button
            onClick={() => setModalOpen(true)}
            className='bg-blue-700 px-4 py-2 rounded-full text-white'
          >
            Add User
          </button>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {posts.map((u) => (
            <UserCard key={u.id} {...u} />
          ))}

          {isModalOpen && (
            <UserModal
              onClose={() => setModalOpen(false)}
              onSubmit={handleAddPost}
            />
          )}
        </div>
      </div>
    </div>
  );
};

// Fetch data at build time
export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const posts: UserProps[] = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;

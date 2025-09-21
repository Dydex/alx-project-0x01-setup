import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { UserProps } from '@/interfaces';

interface UserPageProps {
  users: UserProps[];
}

const Users: React.FC<UserPageProps> = ({ users }) => {
  return (
    <div className='min-h-screen bg-gray-100'>
      <Header />

      <div className='max-w-6xl mx-auto px-4 py-8'>
        <h3 className='text-3xl font-bold text-gray-800 mb-6'>
          User Directory
        </h3>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {users?.map((u) => (
            <UserCard key={u.id} {...u} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Fetch data at build time
export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: UserProps[] = await response.json();

  return {
    props: {
      users,
    },
  };
}

export default Users;

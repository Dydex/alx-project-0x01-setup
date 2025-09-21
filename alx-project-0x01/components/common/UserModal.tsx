import { UserData, UserModalProps } from '@/interfaces';
import React, { useState } from 'react';

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setPost] = useState<UserData>({
    id: 1,
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: '',
        lng: '',
      },
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: '',
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPost((prevuser) => ({ ...prevuser, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className='fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center'>
      <div className='bg-white rounded-lg p-8 shadow-lg w-full max-w-md'>
        <h2 className='text-2xl font-bold mb-4 text-gray-800'>Add New Post</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label
              htmlFor='userId'
              className='block text-gray-700 font-medium mb-2'
            >
              ID
            </label>
            <input
              type='number'
              id='userId'
              name='userId'
              value={user.id}
              onChange={handleChange}
              className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='Name'
              className='block text-gray-700 font-medium mb-2'
            >
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={user.name}
              onChange={handleChange}
              className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Enter user title'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='username'
              className='block text-gray-700 font-medium mb-2'
            >
              Username
            </label>
            <textarea
              id='username'
              name='username'
              value={user.username}
              onChange={handleChange}
              rows={4}
              className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Enter user content'
            />
          </div>

          <div className='flex justify-between items-center'>
            <button
              type='button'
              onClick={onClose}
              className='px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none'
            >
              Cancel
            </button>
            <button
              type='submit'
              className='px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition'
            >
              Add user
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;

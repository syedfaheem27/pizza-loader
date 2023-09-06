import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { updateName } from '../user/userSlice';
import { useState } from 'react';

function CreateUser() {
  const [userName, setUserName] = useState('');
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (userName.length > 15) return;
    dispatch(updateName(userName));
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        className="input mb-8 w-72"
        type="text"
        placeholder="Your full name <= 15 characters"
        value={userName}
        onChange={e => setUserName(e.target.value)}
      />

      {userName !== '' && (
        <div>
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;

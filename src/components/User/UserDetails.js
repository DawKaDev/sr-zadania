import { useLocation } from 'react-router-dom';
import User from './User';

export default function UserDetails() {
  const location = useLocation();
  const user = location.state.user;
  return (
    <User user={user}/>
  )
}
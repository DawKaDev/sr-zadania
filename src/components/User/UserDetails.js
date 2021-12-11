import { useLocation } from 'react-router-dom';
import User from './User';
import Map from './Map';

export default function UserDetails() {
  const location = useLocation();
  const user = location.state.user;
  return (
    <div className="user__profile">
      <User user={user}/>
      <div className="user__map">
        <Map coordinates={[user.location.coordinates.latitude, user.location.coordinates.longitude]}/>
      </div>
    </div>
  )
}
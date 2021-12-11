import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { formatDate } from 'components/utils';
import Subscribers from 'services/subscribers';

export default function Profile() {
  let { profileID } = useParams();
  
  const [profile, setProfile] = useState(null);

  const fetchProfile = async () => {
    const user = await Subscribers.getOneById(profileID);
    setProfile(user);
  }

  useEffect(() => {
    fetchProfile();
  },[profileID])

  return (
    <>
    {profile &&
    <div className="profile">
      <div className="profile__name">{profile.name}</div>
      <div className="profile__email">{profile.email}</div>
      <div className="profile__date">{formatDate(profile.created_at)}</div>
    </div>
    }
    </>
  )
}
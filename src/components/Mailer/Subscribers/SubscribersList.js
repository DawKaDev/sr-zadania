import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { formatDate } from 'components/utils';
import List from 'components/List';

function SubscribersList({data, onClick}) {
  const handleClick = (element) => {
    return onClick ? () => onClick("edit", "subscriber", element) : null;
  }
  return (
    <List>
      {data.map((user) => (
        <List.Item key={`subscriber-${user.id}`} onClick={handleClick(user)}>
            <p className="subscriber">
              <Link to={`subscriber/${user.id}`} className="list__link subscriber__name">
                {user.name}
              </Link>
              <Link to={`subscriber/${user.id}`} className="list__link subscriber__email">
                {user.email}
              </Link>
              <span className="subscriber__created text--muted">{formatDate(user.createdAt)}</span>
            </p>
        </List.Item>
      ))}
    </List>
  )
}

SubscribersList.propTypes = {
  data: PropTypes.array.isRequired,
  onClick: PropTypes.func
}

export default SubscribersList;
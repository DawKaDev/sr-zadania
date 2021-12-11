import React from 'react';
import PropTypes from 'prop-types';
import { formatDate } from 'components/utils';
import List from 'components/List';

function CampaignsList({data, onClick}) {
  const handleClick = (element, action) => {
    return onClick ? () => onClick(action, "campaign", element) : null;
  }
  return (
    <List>
      {data.map((campaign) => (
        <List.Item key={`campaign-${campaign.id}`} className={campaign.status ? "list__item--success" : "list__item--warning"}>
            <p className="campaign" onClick={handleClick(campaign, "edit")}>
              <span className="campaign__subject">
                {campaign.subject}
              </span>
              <span className="campaign__status">{campaign.status ? "Send" : "Draft"}</span>
              <span className="campaign__created text--muted">{formatDate(campaign.createdAt)}</span>
            </p>
            {!campaign.status
            &&
            <div className="actions">
              <button className="btn btn-remove" onClick={handleClick(campaign, "remove")}>x</button>
            </div>
            }
        </List.Item>
      ))}
    </List>
  )
}

CampaignsList.propTypes = {
  data: PropTypes.array.isRequired,
  onClick: PropTypes.func
}

export default CampaignsList;
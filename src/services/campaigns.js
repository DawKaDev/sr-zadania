import api from '../api';
import { getAll as getSubscribers } from './subscribers';

const TABLE_NAME = "campaign";

const Campaigns = {
  getAll,
  add,
  send,
  update,
  remove
}

export async function getAll() {
  const newData = [];
  await api.get(TABLE_NAME)
  .then(data => {
    data.records.forEach(item => {
      newData.push({
        id: item.id,
        subject: item.fields["Subject"],
        content: item.fields["Content"],
        status: item.fields["Status"],
        createdAt: item.fields["Created_at"]
      })
    })
  })
  return newData;
}

export async function add(data) {
  await api.post(TABLE_NAME, {
    records: [{
      fields: {
        "Subject": data.subject,
        "Content": data.content,
        "Status": false
      }
    }]
  })
}

export async function send(id, data) {
  let campaign = {};
  const subscribers = await getSubscribers();
  if(id) {
    await api.patch(TABLE_NAME, {
      records: [{
        id: id,
        fields: {
          "Subject": data.subject,
          "Content": data.content,
          "Status": true
        }
      }]
    }).then(d => campaign = {...d.records[0].fields})
  } else {
    await api.post(TABLE_NAME, {
      records: [{
        fields: {
          "Subject": data.subject,
          "Content": data.content,
          "Status": true
        }
      }]
    }).then(d => campaign = {...d.records[0].fields});
  }
    await fetch("/mailer/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        subscribers: subscribers.map(subscriber => ({name: subscriber.name, email: subscriber.email})),
        campaign: {
          subject: campaign["Subject"],
          content: campaign["Content"]
        }
      })
    });
}

export async function update(id, data) {
  if(id) {
    await api.patch(TABLE_NAME, {
      records: [{
        id: id,
        fields: {
          "Subject": data.subject,
          "Content": data.content
        }
      }]
    })
  } else {
    await api.post(TABLE_NAME, {
      records: [{
        fields: {
          "Subject": data.subject,
          "Content": data.content,
          "Status": false
        }
      }]
    })
  }
}

export async function remove(id) {
  return await api.delete(`${TABLE_NAME}/${id}`)
  .then(data => {
    if(data.error) {
      console.error(`Error: type[${data.error.type}], ${data.error.message}`);
      return false;
    } else {
      return true
    }
  })
}

export default Campaigns;
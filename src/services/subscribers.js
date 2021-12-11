import api from '../api';

const TABLE_NAME = "subscribers";

const Subscribers =  {
  add,
  update,
  getAll,
  getOneById
}

export async function getAll() {
  const newData = [];
  await api.get(TABLE_NAME)
  .then(data => {
    data.records.forEach(item => {
      newData.push({
        id: item.id,
        name: item.fields["Name"],
        email: item.fields["E-mail"],
        createdAt: item.fields["Created_at"]
      })
    })
  })
  return newData;
}

export async function getOneById(profileID) {
  return await api.get(`${TABLE_NAME}/${profileID}`)
    .then(data => {
      return {
        id: data.id,
        name: data.fields.Name,
        email: data.fields["E-mail"],
        created_at: data.fields.Created_at
    }})
}

export async function add(data) {
  await api.post(TABLE_NAME, {
    records: [{
      fields: {
        "Name": data.name,
        "E-mail": data.email
      }
    }]
  })
}

export async function update(id, data) {
  await api.patch(TABLE_NAME, {
    records: [{
      id: id,
      fields: {
        "Name": data.name,
        "E-mail": data.email
      }
    }]
  })
}

export default Subscribers;
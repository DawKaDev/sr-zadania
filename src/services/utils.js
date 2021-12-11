import api from '../api';

const Utils = {
  remove
}

export async function remove(table, id) {
  return await api.delete(`${table}/${id}`)
  .then(data => {
    if(data.error) {
      console.error(`Error: type[${data.error.type}], ${data.error.message}`);
      return false;
    } else {
      return true
    }
  })
}

export default Utils;
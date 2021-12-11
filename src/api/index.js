const {REACT_APP_API_URL, REACT_APP_API_KEY, REACT_APP_DB_ID} = process.env;

async function request(endpoint, method = 'GET', data){
  const config = {
    method,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${REACT_APP_API_KEY}`
    }
  };
  if(method === 'POST' || method === 'PATCH'){
    config.body = JSON.stringify(data);
  }
  const url = `${REACT_APP_API_URL}${REACT_APP_DB_ID}/${endpoint}`;
  return await fetch(url, config)
  .then(response => {
    return response.json()
  });
}

function get(endpoint){
  return request(endpoint);
}

function post(endpoint, data){
  return request(endpoint, 'POST', data);
}

function patch(endpoint, data){
  return request(endpoint, 'PATCH', data);
}

function _delete(endpoint){
  return request(endpoint, 'DELETE');
}

export default {
  get,
  post,
  patch,
  delete: _delete
}
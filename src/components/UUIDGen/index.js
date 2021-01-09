function uuid() {
  let id = "";
  const strLength = 32;
  const breakepoint = "-";
  const breakepoints = [9,14,19,24];
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charsAmount = characters.length;

  for(let i = 1; i <= strLength; i++) {
    if(breakepoints.includes(i)) {
      id += breakepoint;
    } else {
      id += characters.charAt(Math.floor(Math.random() * charsAmount));
    }
  }
  return id;
}

export default uuid;
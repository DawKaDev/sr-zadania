export function cutText(text, strLength = 25, ellipsis = "...") {
  return text.length > strLength
  ? text.substr(0,strLength-1) + ellipsis
  : text
}

export function formatDate(date, locales = "en-EN", options = { weekday: 'long', day: 'numeric', month: 'long' }){
  const newDate = new Date(date);
  return new Intl.DateTimeFormat(locales, options).format(newDate);
}

export function prepareMessage(content, keys, data) {
  let newMessage = "";
  keys.forEach((key, index) => {
    newMessage = content.replaceAll(`{{ ${key} }}`, data[index])
  })
  return newMessage;
}
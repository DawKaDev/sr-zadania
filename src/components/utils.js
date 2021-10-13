export function cutText(text, strLength = 25, ellipsis = "...") {
  return text.length > strLength
  ? text.substr(0,strLength-1) + ellipsis
  : text
}
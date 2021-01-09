import React from "react";

const styles = {
  post: {
    borderBottom: "1px solid #333",
    textAlign: "left"
  },
  title: {
    fontSize: "16px",
    color: "#fff",
    background: "#19a540",
    textTransform: "uppercase",
    margin: 0,
    padding: "15px"
  },
  intro: {
    fontSize: "12px",
    padding: "0 15px"
  }
}

function BlogTile({item, strLength, ellipsis}) {
  return (
    <div style={styles.post}>
      <h2 style={styles.title}>{item.title}</h2>
      <p style={styles.intro}>
        {item.intro.length > strLength
        ? item.intro.substr(0,strLength-1) + ellipsis
        : item.intro}
      </p>
    </div>
  );
}

export default BlogTile;
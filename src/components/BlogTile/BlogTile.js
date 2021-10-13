import React from "react";

const styles = {
  post: {
    borderBottom: "1px solid #333",
    textAlign: "left"
  },
  title: {
    fontSize: 16,
    color: "#fff",
    background: "#19a540",
    textTransform: "uppercase",
    margin: 0,
    padding: 15
  },
  intro: {
    fontSize: 12,
    padding: "0 15px"
  }
}

BlogTile.Title =  function BlogTitle({children}) {
  return (
    <h2 style={styles.title}>
      {children}
    </h2>
  )
}

BlogTile.Intro = function BlogIntro({children}) {
  return (
    <p style={styles.intro}>
      {children}
    </p>
  )
}

export default function BlogTile({children}) {
  return (
    <div style={styles.post}>
      {children}
    </div>
  );
}
import React from "react";
import BlogTile from "../components/BlogTile";
import uuid from "../components/UUIDGen";

function Komponenty() {
  const posts = [
    { id: 1, title: 'Pilne: Co to był za dzień!', intro: 'Tego świat jeszcze nie widział'},
    { id: 2, title: 'Wszyscy zazdroszą Polakom!', intro: 'Takiego clickbajtowego tytułu jeszcze nikt nie wymyślił'},
    { id: 3, title: 'Adam Małysz Zgolił wąs',
      intro: 'Po przegranym zakładzie z Piotrem Żyłą nasz mistrz olimpijski zgolił wąsy'
    }
  ]
  const strLength = 25;
  const ellipsis= "...";

  return (
    <>
    {posts.map((post) => (
      <BlogTile 
        key={post.id}
        item={post}
        strLength={strLength}
        ellipsis={ellipsis}
      />
    ))}
    <p>Twój uid: {uuid()}</p>
    </>
  )
}

export default Komponenty;
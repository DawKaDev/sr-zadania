import React from "react";

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
      <div key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.intro.length > strLength
            ? post.intro.substr(0,strLength-1) + ellipsis
            : post.intro}</p>
      </div>
    ))}
    </>
  )
}

export default Komponenty;
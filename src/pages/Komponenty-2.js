import React from "react";
import { cutText } from "components/utils";
import BlogTile from "../components/BlogTile";
import Uuid from "../components/UUIDGen";
import { FunctionTimer, ClassTimer } from "../components/Timer";

function Komponenty() {
  const posts = [
    { id: 1, title: 'Pilne: Co to był za dzień!', intro: 'Tego świat jeszcze nie widział'},
    { id: 2, title: 'Wszyscy zazdroszą Polakom!', intro: 'Takiego clickbajtowego tytułu jeszcze nikt nie wymyślił'},
    { id: 3, title: 'Adam Małysz Zgolił wąs',
      intro: 'Po przegranym zakładzie z Piotrem Żyłą nasz mistrz olimpijski zgolił wąsy'
    }
  ]

  return (
    <>
    {posts.map((post) => (
      <BlogTile key={post.id}>
        <BlogTile.Title>{post.title}</BlogTile.Title>
        <BlogTile.Intro>{cutText(post.intro)}</BlogTile.Intro>
      </BlogTile>
    ))}
    <p>Twój uid: <Uuid/></p>
    <FunctionTimer/>
    <ClassTimer/>
    </>
  )
}

export default Komponenty;
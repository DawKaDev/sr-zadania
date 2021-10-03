import React, { useState } from "react";
import { Button } from "components/Form";
import "./styles.css";

function Card({ title, intro, content, image, showMore }) {
  const [active, setActive] = useState(showMore);
  const handleShowMore = () => {
    setActive(!active)
  }
  
  return (
    <div className="card">
      <div className="card__header">
        <div className="circle">
          <span>{title.charAt(0)}</span>
        </div>
        <div className="title">{title}</div>
      </div>
      <div className="card__media">
        <img src={image} alt={title} className="image"/>
      </div>
      <div className="card__intro">{intro}</div>
      <div className="card__actions">
        <Button icon="heart" bgColor="clouds" color="wisteria"/>
        <Button icon="share-alt" bgColor="clouds" color="wisteria"/>
        <Button 
          icon={active ? "chevron-up" : "chevron-down"}
          bgColor="clouds"
          color="wisteria"
          onClick={handleShowMore}/>
      </div>
      <div class={`card__content${active ? " active" : ""}`}>
        <p>{content}</p>
      </div>
    </div>
  )
}

export default Card;
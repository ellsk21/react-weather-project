import React from "react";

export default function Icon(props) {
console.log(props);
  let url = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.code}.png`;
  return (
   
      <img className="w-40" src={url} alt={props.alt} size={95} />
      
  );
}
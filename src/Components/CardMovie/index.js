import React from "react";
import { Link } from "react-router-dom";

const CardMovies = ({ data, mediaType }) => {
  console.log("data", data);
  const id = data.id;
  const media_Type = data.media_type? data.media_type: data.type? data.type: mediaType;
  const original_title = data.original_title || data.name
  console.log(original_title );
  console.log(media_Type);
  const imageUrl = '';
  const title = '';
  return (
    <div>
      <div className="container">
      <div className="col-lg-4 col-md-4 col-sm-6 col-12">
        <Link to={`/details/${id}/${media_Type}`} >
        <img src={imageUrl} class="card-img-top" alt={title}/>
        </Link>
      </div>
      </div>
    </div>
  );
};

export default CardMovies;

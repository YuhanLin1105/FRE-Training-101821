import "../styles/album.css";
import React from "react";



interface Props {
    albumArray:{collectionId:string, artworkUrl100:string,collectionName:string}[]
}



const Album:React.FC <Props> = (props) => {
    const albumList = props.albumArray.map((album) => {
        return (
          <li key={album.collectionId} className="album-wrap">
            <img
              src={`${album.artworkUrl100}`}
              alt="album image"
              className="card_img"
            ></img>
            <h4 className="card_name"> {album.collectionName} </h4>
          </li>
        );
      });
    
      return <>{albumList}</>;
    }


export default Album;
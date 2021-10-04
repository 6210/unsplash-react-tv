import React from 'react'

export const GridPhoto = ( {photo} ) => {
    return (
        <div key={photo.id} className="PhotoContainer">
            <img className="PhotoItem" src={photo.urls.regular} alt={photo.description} />
            <div className="Photo">
                <a href={photo.user.links.html} target="_blank" rel="noreferrer">
                     {photo.user.name}
                </a>
            </div>
            <div>{photo.user.social.instagram_username}</div>
        </div>
    )
}

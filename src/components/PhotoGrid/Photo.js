import React from 'react'
import UnsplashLogo from './img/unspl-span.svg';

export const GridPhoto = ( {photo} ) => {
    return (
        <div key={photo.id} className="PhotoContainer">
            <div className="PhotoLinks">
                <a 
                    href={photo.user.links.html} 
                    className="PhotoUnSplashLogo" 
                    target="_blank" rel="noreferrer">
                        <img className="PhotoLogo" alt="View Unsplash Link" src={UnsplashLogo} />
                </a>
            </div>
            <img className="PhotoItem" src={photo.urls.regular} alt={photo.description} />
        </div>
    )
}

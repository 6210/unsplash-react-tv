import userEvent from '@testing-library/user-event'
import React from 'react'

export const GridPhoto = ( {photo} ) => {
    return (
        <div key={photo.id} className="grid-photo">
            <img src={photo.urls.small} alt={photo.description} />
            <div>
                <a href={photo.user.links.html} target="_blank">
                     {photo.user.name}
                </a>
            </div>
            <div>{photo.user.social.instagram_username}</div>
        </div>
    )
}

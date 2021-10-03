import React from 'react'

export const GridPhoto = ( {photo} ) => {
    return (
        <div>
            <div key={photo.id} className="grid-photo">
                <img key={photo.id} src={photo.urls.small} alt={photo.description} />
            </div>
        </div>
    )
}

import React from 'react'

export const TopicsOpenBtn = (props) => {
    const { closeModal  } = props;

    return (
        <div className="offTopicNav">
            <button 
                className="triggerMenu"
                onClick={() => closeModal(true)}>
                Browse Topics
            </button>
        </div>
    )
}
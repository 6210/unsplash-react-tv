import React from "react";

export const Modal = ( {closeModal} ) => {

    return (
      
        <div className="Modal">
            <div className="modalBackground">
                <div className="modalContainer">
                    <button onClick={() => closeModal(false)}> Close Navigation </button>
                </div>
            </div>
        </div>

    );
  };
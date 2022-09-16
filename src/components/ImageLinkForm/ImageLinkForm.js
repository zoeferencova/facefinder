import React from 'react';
import styles from './ImageLinkForm.module.css'

const ImageLinkForm = ({ onInputChange, onImageSubmit }) => {
    return (
        <div className={styles.linkForm}>
            <input 
                type='text' 
                className={`input ${styles.searchInput}`}
                onChange={onInputChange}
            />
            <button 
                className={`button ${styles.searchButton}`}
                onClick={onImageSubmit}>
                    Detect
            </button>
        </div>
    )
}

export default ImageLinkForm;
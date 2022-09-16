import React from 'react';
import styles from './FaceRecognition.module.css'

const FaceRecognition = ({ imageUrl, box }) => {
    return (
        <div className={styles.faceRecognition}>
             <div className={styles.imageContainer}>
                <img id='inputimage' className={styles.image} alt='' src={imageUrl} height='auto' width='500px' />
                <div className={styles.boundingBox} style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>
            </div>
        </div>
    )
}

export default FaceRecognition;
import styles from './Modal.module.css'
import {Fragment} from 'react'
import {createPortal} from 'react-dom'


const Backdrop = props => {
    return <div className={styles.backdrop} onClick={props.onClose}></div>
}

const ModalOverlay = props => {
    return <div className={styles.modal}>
        <div className={styles.content}>
        {props.children}
        </div>
    </div>
}

const Modal = props => {
    return (
        <Fragment>
            
            {createPortal(<Backdrop onClose={props.onBackdropClick} />, document.querySelector('#overlays')) }
            {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.querySelector('#overlays')) }
        </Fragment>
        
    )
}

export default Modal
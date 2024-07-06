import './Modal.css';

export default function Modal(props) {
    return(
        <div class="modalMode">
            <div class="modal-content">
                <div className='modal-text'>
                    <p className='textRules'>RULES</p>
                    <p className='X' onClick={props.caché}>X</p>
                </div>
            </div>
        </div>
    )
}
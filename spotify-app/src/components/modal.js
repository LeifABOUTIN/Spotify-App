import react from 'react'

const Modal = ({setModalOn, ModalOn}) => {
    return (
        <div className="modal">
            <h1>Hi! here's what you can do here</h1>
            <p>Check your favorites tracks and listen to them by clicking on the cover</p>
            <p>Check and listen to Spotif's weekly 'released songs' selected just for you by clicking the cover</p>
            <p>Check the list of songs you last listened to on your account</p>
            <hr/>
            <p>to add: add a song to favorites, delete one, create my own audio player so I can tweak the volume levels.. search for a specific song etc...</p>
            <button onClick={() => {
                setModalOn(false)
                localStorage.setItem('modal-seen', true)
            }}>close</button>
        </div>
    )
}

export default Modal
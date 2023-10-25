import ReactDOM from 'react-dom';
import './OverlayView.css';

function OverlayView({ onClick, hidden }) {
    return ReactDOM.createPortal(
        <div
            onClick={onClick}
            className={`overlay`}
        />,
        document.body,
    );
}

export default OverlayView;
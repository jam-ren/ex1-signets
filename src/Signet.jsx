import './Signet.scss';

export default function Signet(props) {
    return (
        <li className="Signet">
            <img src={'images-signets/' + props.id + '.jpg'} alt=""/>
            <div className="titreSignet">{props.titre}</div>
            <div className="dateModification">{props.ddm}</div>
        </li>
    );
}
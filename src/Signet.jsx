import './Signet.scss';

export default function Signet(props) {
    return (
        <li className="Signet">
            <img src={'image-produits/' + props.id + '.jpeg'} alt=""/>
            <div className="titreSignet">{props.titre}</div>
            <div className="dateModification">{props.ddm}</div>
        </li>
    );
}
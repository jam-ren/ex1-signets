import './Entete.scss';

export default function Entete(props) {
    return(
        <header className="Entete">
            <div className="Titre">
                Signets
            </div>
            <div className="Utilisateur">
                <div className="nomUtilisateur"> Camille Semaan</div>
                <div className="imageUtilisateur"> Image <img src="" alt=""/> </div>
            </div>
        </header>
    );
}
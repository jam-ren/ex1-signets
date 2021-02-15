import './ListeSignets.scss';
import Signet from './Signet';
import tabSignets from './data/signet.json';

export default function ListeSignets() {
    return (
        <ul>
            {tabSignets.map(sgt =>
                <Signet id={sgt.id} titre={sgt.titre} couleur={sgt.couleur} ddm={sgt.ddm}  /> 
            )}
        </ul>
    );
}
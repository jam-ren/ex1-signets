import './Appli.scss';
import Entete from './Entete';
import ListeSignets from './ListeSignets';
import BtnAjoutSignet from './BtnAjoutSignet';

export default function Appli() {
  return (
    <div className="Appli">
        <Entete/>
        <section className="contenuPrincipal">
        <ListeSignets/>
        <BtnAjoutSignet/>
        </section>
    </div>
  );
}

import "./capivara.css";
const Capivara = (props) => {
    return <p className="card__text">{props.text}</p>;
};

Capivara.defaultProps = {
    text: "Capivaras são mamíferos aquáticos nativos da América do Sul. São conhecidos por serem grandes e por sua capacidade de nadar e subir em árvores. Sua pele é dura e suas presas afiadas são capazes de cortar e roer grandes pedaços de comida. Sua dieta consiste principalmente de frutas, raízes, insetos, peixes e plantas aquáticas.",
};

export default Capivara;


import "./Prova.css";
function Card({nome,preco,cor,proj}){
    return(
        <div className="prin" > 

                   <p className={nome}>
                             {nome}

                    </p>
                    <p>{preco} </p>
                    <p>{cor} </p>
                    <p>{proj}</p>
                    
        </div>
    );
}
export default Card;
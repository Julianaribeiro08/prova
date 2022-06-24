
import "./Prova.css";
function Card({nome,preco,cor,proj}){
    return(
        <div className="texto"> 
                    
                   <div> <strong><h1>{nome}</h1></strong></div>
                    
                    <strong><p>{preco}</p></strong>

                  <div className="junta"><p>{cor}</p>
                    <p>{proj}</p></div>
                
                    <button>Order now</button>
                    
        </div>
    );
}
export default Card;
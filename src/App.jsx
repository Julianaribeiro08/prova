import Card from "./Card";
import Title from "./Title";
import "./Prova.css"
function App() {
   
   const titulo=[
      {
         titulo: "Premium Plans",
         subtitulo: "Sampla text. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,  illum repudiandae atque ",
      }
   ];

    const centro=[
      {
         nome: "Start",
         preco: "Free",
         cor: "1 User",
         proj:"1 Projects"
      },
      {
         nome: "Basic",
         preco: "$19.99",
         cor: "5 User",
         proj:"20 Projects"
      },
      {
         nome: "Expert",
         preco: "$129.99",
         cor: "unilimited Users",
         proj:"unilimited Projects"
      }
    ];
    return(
		<div className="pai">
			{
            titulo.map((tit) => {
               return <Title
                     titulo={tit.titulo}
                     subtitulo={tit.subtitulo}
                  />;
				
				})
			};
         <div className="topo">
             {

                  centro.map((cen, nome) => {
                     return <Card key={nome}
                           nome={cen.nome}
                           preco={cen.preco}
                           cor={cen.cor}
                           proj={cen.proj}
                        />;
                  })
               } 
         </div> 
      </div>
         
      );
}

export default App

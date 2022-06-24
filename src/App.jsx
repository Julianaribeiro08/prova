import Card from "./Card";
function App() {
   
   
   
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
	);
}
export default App

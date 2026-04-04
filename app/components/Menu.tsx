import MenuCard from "./MenuCard";

const itens = [
  {
    categoria: "Antepastos",
    pratos: [
      { nome: "Burrata com Tomate", descricao: "Burrata cremosa com tomate sweet grape e azeite extravirgem.", preco: "R$ 62,00" },
      { nome: "Carpaccio di Manzo", descricao: "Finas fatias de filé mignon cru com rúcula, parmesão e alcaparras.", preco: "R$ 58,00" },
    ],
  },
  {
    categoria: "Massas",
    pratos: [
      { nome: "Fettuccine al Ragù", descricao: "Massa fresca ao molho de carne bovina cozida lentamente.", preco: "R$ 74,00" },
      { nome: "Gnocchi di Patate", descricao: "Nhoque de batata artesanal ao molho de gorgonzola e nozes.", preco: "R$ 68,00" },
      { nome: "Spaghetti alla Carbonara", descricao: "Receita clássica romana com guanciale, ovo e pecorino romano.", preco: "R$ 72,00" },
    ],
  },
  {
    categoria: "Risotos",
    pratos: [
      { nome: "Risoto de Limão Siciliano", descricao: "Arroz arbóreo cremoso com limão siciliano e parmesão.", preco: "R$ 76,00" },
      { nome: "Risoto de Camarão", descricao: "Camarões salteados com arroz arbóreo, açafrão e ervas frescas.", preco: "R$ 89,00" },
    ],
  },
  {
    categoria: "Carnes",
    pratos: [
      { nome: "Filé à Parmegiana", descricao: "Filé mignon empanado com molho de tomate e parmesão gratinado.", preco: "R$ 98,00" },
      { nome: "Ossobuco alla Milanese", descricao: "Clássico italiano com músculo bovino braseado e gremolata.", preco: "R$ 112,00" },
    ],
  },
  {
    categoria: "Sobremesas",
    pratos: [
      { nome: "Tiramisù", descricao: "Receita tradicional com mascarpone, café espresso e cacau.", preco: "R$ 38,00" },
      { nome: "Panna Cotta", descricao: "Creme cozido italiano com calda de frutas vermelhas.", preco: "R$ 34,00" },
    ],
  },
];

export default function Menu() {
  return (
    <section id="cardapio" className="bg-stone-100 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-amber-700 uppercase tracking-widest text-sm text-center mb-2">
          Nossa Cozinha
        </p>
        <h2 className="text-4xl font-bold text-stone-800 text-center mb-16">
          Cardápio
        </h2>
        {itens.map((categoria) => (
          <div key={categoria.categoria} className="mb-14">
            <h3 className="text-2xl font-semibold text-stone-700 border-b border-amber-300 pb-2 mb-6">
              {categoria.categoria}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoria.pratos.map((prato) => (
                <MenuCard
                  key={prato.nome}
                  nome={prato.nome}
                  descricao={prato.descricao}
                  preco={prato.preco}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

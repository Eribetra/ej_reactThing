export default function MenuCard({ nome, descricao, preco }: { nome: string; descricao: string; preco: string }) {
  return (
    <div className="bg-amber-600 p-6 flex flex-col gap-2 hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-bold uppercase tracking-widest text-stone-800">{nome}</h3>
        <span className="text-green-100 font-bold text-sm whitespace-nowrap ml-4">
          {preco}
        </span>
      </div>
      <p className="text-white text-sm uppercase tracking-wide">{descricao}</p>
    </div>
  );
}

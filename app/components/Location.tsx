export default function Location() {
  return (
    <section id="localizacao" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-amber-700 uppercase tracking-widest text-sm text-center mb-2">
          Onde Estamos
        </p>
        <h2 className="text-4xl font-bold text-stone-800 text-center mb-16">
          Localização
        </h2>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 flex flex-col gap-6">
            <div className="bg-stone-100 rounded-none p-6">
              <h3 className="text-lg font-bold text-stone-800 mb-1">Endereço</h3>
              <p className="text-stone-500">
                Av. Giovanni Gronchi, 5930 — Morumbi Town Shopping
              </p>
              <p className="text-stone-500">Vila Andrade, São Paulo — SP</p>
              <p className="text-stone-500">CEP: 05724-002</p>
            </div>
            <div className="bg-stone-100 rounded-none p-6">
              <h3 className="text-lg font-bold text-stone-800 mb-1">
                Horário de Funcionamento
              </h3>
              <p className="text-stone-500">Segunda a Sexta: 12h — 23h</p>
              <p className="text-stone-500">Sábado: 12h — 23h30</p>
              <p className="text-stone-500">Domingo: 12h — 22h</p>
            </div>

            <a href="https://maps.google.com/?q=Av.+Giovanni+Gronchi,+5930,+São+Paulo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-600 hover:bg-amber-700 text-white text-center px-8 py-3 rounded-none uppercase tracking-widest text-sm transition-colors duration-300"
            >
              Abrir no Google Maps
            </a>
          </div>
          <div className="flex-1 w-full rounded-none overflow-hidden shadow-lg h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.9!2d-46.7278!3d-23.6234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57b3b5a3b1%3A0x1!2sMorumbi+Town+Shopping!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}


import React from 'react';

const CtaSection: React.FC = () => {
  return (
    <section id="cta" className="bg-white py-20 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="bg-primary-600 rounded-2xl shadow-xl text-white p-10 md:p-16 text-center transform-gpu hover:scale-[1.02] transition-transform duration-500">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Pronto para organizar suas publis de uma vez por todas?
          </h2>
          <p className="mt-4 text-lg text-primary-200 max-w-2xl mx-auto">
            Abandone as planilhas e a confusão. Comece a usar o PublisTracker hoje mesmo e ganhe mais tempo para o que realmente importa: criar conteúdo incrível.
          </p>
          <a
            href="/success"
            className="mt-8 inline-block bg-white text-primary-600 font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-lg shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75 transition-all transform hover:scale-105 duration-300"
          >
            Quero meu acesso gratuito
          </a>
           <p className="mt-4 text-sm text-primary-300">Não precisa de cartão de crédito.</p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

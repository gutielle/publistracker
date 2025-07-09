
import React from 'react';

const KanbanCard: React.FC<{ brand: string; value: string; color: string }> = ({ brand, value, color }) => (
    <div className="bg-white p-3 rounded-lg shadow border-l-4" style={{ borderColor: color }}>
        <h4 className="font-semibold text-sm text-gray-800">{brand}</h4>
        <p className="text-xs text-gray-500 mt-1">{value}</p>
    </div>
);

const KanbanColumn: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-gray-100 rounded-lg p-3 w-56 sm:w-60 flex-shrink-0">
        <h3 className="font-semibold text-gray-600 text-sm mb-3 px-1">{title}</h3>
        <div className="space-y-3">{children}</div>
    </div>
);

const Hero: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Chega de caos nas suas <span className="text-primary-600">"publis"</span>.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          O mini-CRM que transforma o caos das suas parcerias em um fluxo de trabalho simples e visual. Organize propostas, prazos e pagamentos em um só lugar.
        </p>
        <div className="mt-10">
          <a
            href="#cta"
            className="inline-block bg-primary-600 text-white font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-lg shadow-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-75 transition-transform transform hover:scale-105 duration-300"
          >
            Organize suas publis gratuitamente
          </a>
        </div>
      </div>
      <div className="container mx-auto px-0 sm:px-6 mt-16 lg:mt-24">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-indigo-600 rounded-2xl transform -rotate-1"></div>
          <div className="relative bg-white p-4 sm:p-6 rounded-2xl shadow-2xl">
              <div className="relative">
                  <div className="absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none z-10 md:hidden"></div>
                  <div className="flex space-x-4 text-left overflow-x-auto pb-4 -mb-4 scrollbar-hide px-4 sm:px-0">
                      <KanbanColumn title="Proposta">
                          <KanbanCard brand="Marca de Roupas Z" value="R$ 1.500" color="#f59e0b" />
                          <KanbanCard brand="App de Fitness" value="R$ 2.000" color="#f59e0b" />
                      </KanbanColumn>
                      <KanbanColumn title="Negociando">
                          <KanbanCard brand="Bebida Energética" value="R$ 3.500" color="#3b82f6" />
                      </KanbanColumn>
                      <KanbanColumn title="Aprovado">
                          <KanbanCard brand="Game de Celular" value="R$ 4.000" color="#10b981" />
                          <KanbanCard brand="Loja de Eletrônicos" value="R$ 2.800" color="#10b981" />
                      </KanbanColumn>
                      <KanbanColumn title="Publicado">
                           <KanbanCard brand="Serviço de Streaming" value="R$ 5.000" color="#6366f1" />
                      </KanbanColumn>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

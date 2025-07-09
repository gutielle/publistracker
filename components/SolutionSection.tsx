import React from 'react';
import { InboxArrowDownIcon, ViewColumnsIcon, BellAlertIcon, BanknotesIcon, CalendarIcon } from './icons/FeatureIcons';

const SolutionFeature: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  mockup: React.ReactNode;
  reverse?: boolean;
}> = ({ icon, title, description, mockup, reverse = false }) => (
  <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
    <div className="lg:w-1/2 text-center lg:text-left">
      <div className="inline-flex items-center gap-3 bg-primary-100 text-primary-700 font-semibold px-4 py-2 rounded-full mb-4">
          {icon}
          <span>{title}</span>
      </div>
      <h3 className="text-3xl font-bold text-gray-900">{title}</h3>
      <p className="mt-4 text-lg text-gray-600">{description}</p>
    </div>
    <div className="lg:w-1/2 w-full">
      {mockup}
    </div>
  </div>
);

const SolutionSection: React.FC = () => {
  return (
    <section id="solucao" className="py-20 sm:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            PublisTracker: Sua paz de espírito como criador.
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Uma plataforma super simples para centralizar, visualizar e gerenciar todo o ciclo de vida das suas parcerias.
          </p>
        </div>
        <div className="mt-20 space-y-24">
          <SolutionFeature
            icon={<InboxArrowDownIcon />}
            title="Centralize Tudo"
            description="Cadastre cada nova proposta em segundos. Diga adeus à caça por informações em e-mails e DMs. Tenha tudo em um só lugar."
            mockup={
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <h4 className="font-semibold text-gray-700 mb-4">Nova Proposta</h4>
                <div className="space-y-3">
                  <div className="w-full bg-white p-3 rounded-lg border border-gray-300">
                    <p className="text-gray-900">Marca Incrível</p>
                  </div>
                  <div className="w-full bg-white p-3 rounded-lg border border-gray-300">
                    <p className="text-gray-900">2500</p>
                  </div>
                  <div className="w-full bg-white p-3 rounded-lg border border-gray-300 flex justify-between items-center">
                    <p className="text-gray-500">dd/mm/aaaa</p>
                    <CalendarIcon className="h-5 w-5 text-gray-400" />
                  </div>
                   <div className="w-full bg-primary-600 text-white font-semibold p-3 rounded-lg text-center cursor-default">
                     Adicionar Proposta
                   </div>
                </div>
              </div>
            }
          />

          <SolutionFeature
            icon={<ViewColumnsIcon />}
            title="Visualize seu Funil"
            description="Acompanhe o progresso de cada 'publi' com um quadro Kanban intuitivo. Mova os cards e saiba exatamente em que pé está cada negociação."
            reverse={true}
            mockup={
              <div className="bg-white rounded-xl p-4 shadow-xl border border-gray-200 transform rotate-1">
                 <div className="flex space-x-3">
                    <div className="bg-gray-100 rounded-lg p-2 flex-1"><h3 className="font-semibold text-gray-500 text-xs mb-2">Proposta</h3><div className="bg-white p-2 rounded-md shadow-sm border-l-4 border-yellow-500"><p className="text-xs font-semibold">Marca X</p></div></div>
                    <div className="bg-gray-100 rounded-lg p-2 flex-1"><h3 className="font-semibold text-gray-500 text-xs mb-2">Negociando</h3><div className="bg-white p-2 rounded-md shadow-sm border-l-4 border-blue-500"><p className="text-xs font-semibold">Marca Y</p></div></div>
                    <div className="bg-primary-600 rounded-lg p-2 flex-1 shadow-lg"><h3 className="font-semibold text-white text-xs mb-2">Aprovado</h3><div className="bg-white p-2 rounded-md shadow-sm border-l-4 border-green-500"><p className="text-xs font-semibold">Marca Z</p></div></div>
                 </div>
              </div>
            }
          />

          <SolutionFeature
            icon={<BellAlertIcon />}
            title="Nunca Mais Perca um Prazo"
            description="O PublisTracker te envia lembretes automáticos sobre datas de entrega importantes e pagamentos pendentes. Foco total na criação!"
            mockup={
              <div className="bg-gray-100 rounded-xl p-6 shadow-lg border border-gray-200 flex flex-col items-center">
                  <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md w-full">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center"><BellAlertIcon /></div>
                      <div>
                          <p className="font-semibold text-gray-800">Prazo de entrega amanhã!</p>
                          <p className="text-sm text-gray-500">Vídeo para "Game de Celular"</p>
                      </div>
                  </div>
                   <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md w-full mt-4">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center"><BanknotesIcon /></div>
                      <div>
                          <p className="font-semibold text-gray-800">Pagamento recebido</p>
                          <p className="text-sm text-gray-500">R$ 5.000 de "Serviço de Streaming"</p>
                      </div>
                  </div>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;

import React from 'react';
import { MailIcon, DocumentTextIcon, CalendarIcon, CurrencyDollarIcon, PresentationChartLineIcon } from './icons/FeatureIcons';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 text-primary-600 mb-4">
            {icon}
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const ProblemSection: React.FC = () => {
    return (
        <section id="problema" className="py-20 sm:py-24">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Sua caixa de entrada virou um pesadelo?</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Se você é criador, provavelmente já sentiu a dor de gerenciar dezenas de "publis" ao mesmo tempo. É fácil se perder.
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <FeatureCard 
                        icon={<MailIcon />} 
                        title="Propostas Perdidas" 
                        description="E-mails e DMs se acumulam e propostas valiosas acabam esquecidas ou não respondidas."
                    />
                    <FeatureCard 
                        icon={<DocumentTextIcon />}
                        title="Contratos e Prazos"
                        description="Lembrar de cada data de entrega, contrato assinado e briefing específico é um desafio."
                    />
                    <FeatureCard 
                        icon={<CurrencyDollarIcon />}
                        title="Pagamentos Atrasados"
                        description="Controlar quem pagou, quando pagou e cobrar os atrasados toma um tempo precioso."
                    />
                     <FeatureCard 
                        icon={<CalendarIcon />}
                        title="Datas Confusas"
                        description={'"Entregar o vídeo quando? O post era para hoje?" - A falta de um calendário centralizado gera estresse.'}
                    />
                     <FeatureCard 
                        icon={<PresentationChartLineIcon />}
                        title="Planilhas Caóticas"
                        description="Planilhas quebram, ficam desatualizadas e não foram feitas para um fluxo de trabalho visual."
                    />
                    <div className="bg-primary-50 text-primary-700 p-6 rounded-xl shadow-md border border-primary-200 flex flex-col justify-center items-center text-center">
                        <h3 className="text-lg font-semibold mb-2">Seu foco deveria ser criar, não gerenciar.</h3>
                        <p>Deixe a organização com a gente e volte a fazer o que você ama.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;

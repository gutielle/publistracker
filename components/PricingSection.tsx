import React from 'react';
import { CheckIcon } from './icons/FeatureIcons';

const PricingCard: React.FC<{
  plan: string;
  price: string;
  description: string;
  features: string[];
  isRecommended?: boolean;
}> = ({ plan, price, description, features, isRecommended = false }) => {
  const cardClasses = isRecommended
    ? 'bg-primary-600 text-white shadow-2xl border-primary-600 transform lg:scale-105'
    : 'bg-white text-gray-800 shadow-lg border-gray-200';
  const buttonClasses = isRecommended
    ? 'bg-white text-primary-600 hover:bg-gray-100'
    : 'bg-primary-600 text-white hover:bg-primary-700';
  const textColor = isRecommended ? 'text-primary-200' : 'text-gray-600';
  const featureTextColor = isRecommended ? 'text-primary-100' : 'text-gray-700';
  const checkColor = isRecommended ? 'text-green-300' : 'text-green-500';

  return (
    <div className={`p-8 rounded-2xl border transition-all duration-300 relative w-full ${cardClasses}`}>
      {isRecommended && (
        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 font-semibold px-4 py-1 rounded-full text-sm shadow-md">
          Recomendado
        </div>
      )}
      <h3 className="text-2xl font-bold">{plan}</h3>
      <p className={`mt-2 ${textColor}`}>{description}</p>
      <div className="mt-6">
        <span className="text-4xl font-extrabold">{price}</span>
        { price !== 'R$0' && <span className={`ml-2 ${textColor}`}>/mês</span> }
      </div>
      <ul className="mt-8 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <CheckIcon className={`w-5 h-5 ${checkColor}`} />
            <span className={featureTextColor}>{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="/success"
        className={`block w-full text-center font-semibold mt-10 px-6 py-3 rounded-lg shadow-md transition-colors duration-300 ${buttonClasses}`}
      >
        {plan === 'Gratuito' ? 'Começar Gratuitamente' : 'Escolher o Pro'}
      </a>
    </div>
  );
};

const PricingSection: React.FC = () => {
  return (
    <section id="precos" className="py-20 sm:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Um preço que faz sentido</h2>
          <p className="mt-4 text-lg text-gray-600">
            Comece de graça e evolua para o plano Pro quando precisar de mais poder. Simples e transparente.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-10 max-w-4xl mx-auto">
          <PricingCard
            plan="Gratuito"
            price="R$0"
            description="Perfeito para organizar suas primeiras parcerias."
            features={[
              'Até 5 publis ativas',
              'Funil Kanban visual',
              'Lembretes de prazos',
              'Cadastro de propostas',
            ]}
          />
          <PricingCard
            plan="Pro"
            price="R$29"
            description="Para criadores que levam a monetização a sério."
            features={[
              'Tudo do plano Gratuito',
              'Publis ativas ilimitadas',
              'Lembretes de pagamento',
              'Relatórios de faturamento',
              'Suporte prioritário',
            ]}
            isRecommended={true}
          />
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
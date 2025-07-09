
import React from 'react';

const TestimonialCard: React.FC<{
  quote: string;
  name: string;
  handle: string;
  avatar: string;
}> = ({ quote, name, handle, avatar }) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col h-full">
    <p className="text-gray-600 flex-grow">"{quote}"</p>
    <div className="flex items-center mt-6">
      <div className="w-12 h-12 rounded-full bg-primary-200 text-primary-700 flex items-center justify-center font-bold text-lg mr-4">
        {avatar}
      </div>
      <div>
        <p className="font-semibold text-gray-900">{name}</p>
        <p className="text-sm text-gray-500">{handle}</p>
      </div>
    </div>
  </div>
);

const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">O que os criadores estão dizendo</h2>
          <p className="mt-4 text-lg text-gray-600">
            Descubra como o PublisTracker está ajudando a transformar o caos em organização para criadores de conteúdo.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            quote="Finalmente um lugar para ver todas as minhas publis! Antes era uma bagunça de planilhas e e-mails. Agora, bato o olho e sei exatamente o que preciso fazer."
            name="Julia Campos"
            handle="Lifestyle | 80k seguidores"
            avatar="JC"
          />
          <TestimonialCard
            quote="O funil visual é genial. Mover um card de 'Negociando' para 'Aprovado' é muito satisfatório. Me deu uma clareza que eu não tinha sobre o meu próprio negócio."
            name="Marcos Andrade"
            handle="Tech Vlogger | 120k seguidores"
            avatar="MA"
          />
          <TestimonialCard
            quote="Perder prazos e esquecer de cobrar pagamentos era meu maior estresse. Os lembretes automáticos do PublisTracker salvaram minha sanidade e meu faturamento."
            name="Beatriz Lima"
            handle="Gamer & Streamer | 150k seguidores"
            avatar="BL"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

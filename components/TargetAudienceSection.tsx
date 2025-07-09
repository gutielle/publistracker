
import React from 'react';
import { YoutubeIcon, InstagramIcon, TiktokIcon } from './icons/SocialIcons';

const AudienceCard: React.FC<{ icon: React.ReactNode; name: string }> = ({ icon, name }) => (
    <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100 transform hover:-translate-y-2 transition-transform duration-300">
        <div className="w-20 h-20 mb-4">{icon}</div>
        <p className="text-xl font-semibold text-gray-800">{name}</p>
    </div>
);

const TargetAudienceSection: React.FC = () => {
    return (
        <section className="py-20 sm:py-24">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Feito para criadores como você.</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Se você está começando a monetizar seu conteúdo e o volume de propostas está crescendo, o PublisTracker é a ferramenta perfeita para você.
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <AudienceCard icon={<YoutubeIcon />} name="YouTubers" />
                    <AudienceCard icon={<InstagramIcon />} name="Instagrammers" />
                    <AudienceCard icon={<TiktokIcon />} name="TikTokers" />
                </div>
            </div>
        </section>
    )
}

export default TargetAudienceSection;

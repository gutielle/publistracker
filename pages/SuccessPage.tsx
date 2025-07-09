import React from 'react';

const SuccessPage: React.FC = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 antialiased min-h-screen flex items-center justify-center p-4">
        <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-xl max-w-lg mx-auto text-center border-t-4 border-primary-500">
            <div className="w-24 h-24 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                Tudo pronto!
            </h1>
            <p className="mt-4 text-lg text-gray-600">
                Sua conta no PublisTracker foi criada com sucesso. Comece agora a organizar suas parcerias e foque no que você faz de melhor: criar conteúdo incrível.
            </p>
            <div className="mt-8">
                <a
                    href="/"
                    className="inline-block bg-primary-600 text-white font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-75 transition-all transform hover:scale-105 duration-300"
                >
                    Ir para o painel
                </a>
            </div>
        </div>
    </div>
  );
};

export default SuccessPage;

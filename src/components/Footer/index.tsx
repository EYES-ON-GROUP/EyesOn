import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Email soumis:', email);
    setEmail('');
  };

  return (
    <footer className="w-full bg-[#ecf2f8] font-sans mt-14 pt-6">
      {/* Section Newsletter */}
      <div className="bg-[#4B49AC] flex flex-col md:flex-row justify-between items-center mx-auto lg:w-[50%] gap-6  md:rounded-lg p-6 text-center md:text-left">
        <div>
          <h2 className="text-white text-3xl font-semibold">Newsletter</h2>
          <p className="text-white/90 mb-4">Restez alerte sur notre actualité !</p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="yourmail@you.com"
            className="flex-grow px-4 py-2 rounded-md focus:ring-2 focus:ring-[#FF6B35] outline-none"
            required
          />
          <button
            type="submit"
            className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white px-8 py-2 rounded-md flex items-center justify-center"
            aria-label="S'abonner à la newsletter"
          >
            <svg
              className="h-4 w-4 rotate-[-45deg]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </form>
      </div>

      {/* Contenu principal du footer */}
      <div className="bg-[#ecf2f8] pt-16 pb-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et Informations de contact */}
          <div className="space-y-4 text-center lg:text-left">
            <img
              src="/assets/images/ON.png"
              alt="logo"
              className="w-20 h-16 mx-auto lg:mx-0 transition-transform duration-300 ease-in-out hover:translate-x-1"
            />
            <div className="space-y-2 text-gray-500">
              <a href="https://www.maisoft-group.com" className="block hover:text-gray-700">
                www.maisoft-group.com
              </a>
              <a href="mailto:contact@maisoft-group.com" className="block hover:text-gray-700">
                contact@maisoft-group.com
              </a>
              <p>(+237) 691806617 / 699135252</p>
            </div>
          </div>

          {/* Liens Entreprise */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-center lg:text-left">Entreprise</h3>
            <ul className="space-y-3 text-center lg:text-left">
              {['Produits', 'À propos', 'Tarifs', 'Assistance', 'Blog'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-500 hover:text-gray-700">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Liens Légal */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-center lg:text-left">Légal</h3>
            <ul className="space-y-3 text-center lg:text-left">
              {['Police de confidentialité', 'Conditions d\'utilisation', 'Sécurité'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-500 hover:text-gray-700">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Liens Ressources */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-center lg:text-left">Ressources</h3>
            <ul className="space-y-3 text-center lg:text-left">
              {['Manuel', 'FAQ'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-500 hover:text-gray-700">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Barre du bas */}
      <div className="bg-[#4B49AC] py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-white">
            © Copyright 2024 <span className="text-[#FF6B35]">EyesOn</span>. All Rights Reserved.
          </p>
          <div className="flex gap-4">
            {['facebook', 'instagram', 'twitter', 'linkedin'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-white hover:text-[#FF6B35]"
                aria-label={`Visitez notre page ${social}`}
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d={getSocialIconPath(social)} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

// Fonction utilitaire pour obtenir les chemins SVG des icônes sociales
const getSocialIconPath = (social: string): string => {
  switch (social) {
    case 'facebook':
      return "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z";
    case 'instagram':
      return "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z";
    case 'twitter':
      return "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z";
    case 'linkedin':
      return "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z";
    default:
      return "";
  }
};

export default Footer;

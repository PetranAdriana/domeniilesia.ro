import { FaMapMarkerAlt, FaClock, FaPhone, FaStar } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 font-[family-name:var(--font-geist-sans)]">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-amber-900 mb-4">Domeniile Sia</h1>
          <div className="h-1 w-32 bg-amber-600 mx-auto mb-8"></div>
          <h2 className="text-3xl md:text-4xl font-semibold text-amber-800 italic">În curând</h2>
        </header>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-amber-800 mb-6">Despre noi</h3>
            <p className="text-lg text-gray-700 mb-6">
              Bine ați venit la Domeniile Sia, o experiență unică de degustare de vinuri în inima naturii. 
              Vă invităm să descoperiți vinurile noastre excepționale într-un cadru pitoresc înconjurat de podgorii.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Un loc liniștit, aproape de natură, unde puteți savura un pahar de vin în timp ce copiii se pot juca în aer liber. 
              Perfect pentru un weekend departe de aglomerația orașului!
            </p>
            <div className="flex flex-col gap-4 text-gray-700">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-amber-700 flex-shrink-0" />
                <span>Capu Piscului, Bunești 117446</span>
              </div>
              <div className="flex items-center gap-3">
                <FaClock className="text-amber-700 flex-shrink-0" />
                <span>Program: Deschis · Se închide la 17:00</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-amber-700 flex-shrink-0" />
                <span>Telefon: 0723 148 171</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-6">
              <h3 className="text-2xl font-semibold text-amber-800">Recenzii</h3>
              <div className="ml-4 flex items-center">
                <FaStar className="text-amber-500" />
                <FaStar className="text-amber-500" />
                <FaStar className="text-amber-500" />
                <FaStar className="text-amber-500" />
                <FaStar className="text-amber-500" />
                <span className="ml-2 text-gray-700">5/5 (10 recenzii)</span>
              </div>
            </div>
            
            <div className="space-y-6 max-h-80 overflow-y-auto pr-2">
              <div className="border-b border-gray-200 pb-4">
                <p className="text-gray-700 italic">&ldquo;Un loc liniștit unde să servești un pahar de vin timp în care cel mic să se joace în natură. Perfect pentru un weekend departe de aglomerația orașului!&rdquo;</p>
                <p className="text-amber-800 mt-2">— Iulia Cosmina L.</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <p className="text-gray-700 italic">&ldquo;Evadează într-o fermecătoare cramă de țară înconjurată de podgorii. Experimentează bucuria de a degusta vinuri excepționale, în timp ce te bucuri de priveliști uimitoare.&rdquo;</p>
                <p className="text-amber-800 mt-2">— Andrei Smidu</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <p className="text-gray-700 italic">&ldquo;Experimentează o cramă de țară care întâmpină întreaga familie. Bucură-te de vinuri delicioase în mijlocul podgoriilor frumoase în timp ce copiii se distrează jucându-se.&rdquo;</p>
                <p className="text-amber-800 mt-2">— Adeline Soare</p>
              </div>
            </div>
          </div>
        </div>
        
        <footer className="text-center mt-16">
          <p className="text-xl font-semibold text-amber-800 mb-2">Deschiderea oficială în curând</p>
          <p className="text-gray-700">Vă mulțumim pentru interes și abia așteptăm să vă întâmpinăm la Domeniile Sia!</p>
          <p className="text-sm text-amber-700 mt-4">Powered by <a href="https://frontforgeweb.com/" className="underline hover:text-amber-900 transition-colors" target="_blank" rel="noopener noreferrer">FrontForge Solutions SRL</a></p>
        </footer>
      </div>
    </div>
  );
}

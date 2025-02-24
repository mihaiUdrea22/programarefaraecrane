"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Menu, X } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";




// Tip (opțional, dacă ești pe TypeScript)
interface ModuleItem {
  id: number;
  title: string;
  description: string;
  image: string;
  extraDetails: string;
  
}

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedModule, setSelectedModule] = useState<ModuleItem | null>(null);

  const [messageSent, setMessageSent] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const modules = [
    {
      id: 1,
      title: "Exploratori Logici",
      description: "Dezvoltă gândirea critică și capacitatea de rezolvare a problemelor.",
      image: "/images/logica.webp",
      extraDetails: "Jocurile logice îmbunătățesc memoria și dezvoltă atenția la detalii!",
    },
    {
      id: 2,
      title: "Aventură în Cod",
      description: "Învață bazele programării prin jocuri interactive.",
      image: "/images/aventura.webp",
      extraDetails: "Copiii care învață codare dezvoltă abilități de rezolvare a problemelor mai rapid!",
    },
    {
      id: 3,
      title: "Creativitate și Algoritmi",
      description: "Încurajează creativitatea prin provocări logice.",
      image: "/images/creativitate.webp",
      extraDetails: "Algoritmii sunt folosiți zilnic, de la căutări Google până la recomandări pe YouTube!",
    },
    {
      id: 4,
      title: "Puzzle-ul Minții",
      description: "Exersează memoria și logica prin activități captivante.",
      image: "/images/puzzel.webp",
      extraDetails: "Puzzle-urile ajută la dezvoltarea răbdării și a gândirii critice!",
    },
  ];
  

  return (
    <div className="relative w-full">
  {/* ====================== HERO SECTION ====================== */}
  <motion.div
    className="relative h-screen w-full bg-cover bg-center flex flex-col items-center justify-center text-center text-white p-6"
    style={{ backgroundImage: "url('/images/ideea.jpg')" }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-70" />

    <div className="relative z-10 flex flex-col items-center">
    <motion.h2
        className="text-2xl md:text-4xl font-semibold mb-4 tracking-tight"
        style={{ fontFamily: "'Poppins', sans-serif" }}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
      >
        Învățare prin joc și distracție
      </motion.h2>

      <motion.h1
        className="text-5xl md:text-7xl font-bold mb-6 tracking-wide"
        style={{ fontFamily: "'Playfair Display', serif" }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
      >
        Dezvoltă gândirea logică a copilului tău!
      </motion.h1>

      

      <motion.p
        className="max-w-2xl mx-auto text-lg md:text-xl font-light tracking-wider leading-relaxed"
        style={{ fontFamily: "'Poppins', sans-serif" }}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
      >
        Ajută-l pe copilul tău să-și dezvolte gândirea logică prin jocuri interactive și captivante create special pentru el!
      </motion.p>

      {/* Smooth Scroll Button to Modules Section */}
      <motion.button
        className="mt-8 px-6 py-3 text-lg font-semibold bg-yellow-400 text-black rounded-lg shadow-md transition-transform transform hover:scale-110 hover:shadow-xl"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 100 }}
        onClick={() => document.getElementById("modules")?.scrollIntoView({ behavior: "smooth" })}
      >
        Descoperă Modulele →
      </motion.button>
    </div>
  </motion.div>




{/* ====================== ENHANCED MODERN NAVBAR ====================== */}
<nav
      className={`fixed top-0 left-0 w-full px-6 md:px-12 py-4 flex items-center justify-between transition-all duration-300 z-50 ${
        isScrolled ? "bg-black/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      {/* 🔹 Logo - Scroll to Top */}
      <h1
        className="text-2xl font-extrabold text-white cursor-pointer mx-auto md:mx-0 tracking-wide hover:scale-105 transition-transform"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Programare Fără Ecrane
      </h1>

      {/* 🔹 Desktop Navigation */}
      <div className="hidden md:flex space-x-8 text-white text-lg">
        {[
          { name: "Module", href: "#modules" },
          { name: "Despre Noi", href: "#about" },
          { name: "Contact", href: "#contact" },
        ].map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="relative group transition-transform duration-300 hover:scale-105"
          >
            {item.name}
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>

      {/* 🔹 Social Media Icons - Desktop */}
      <div className="hidden md:flex space-x-5">
        {[
          { href: "https://facebook.com", icon: faFacebookF, color: "text-blue-500" },
          { href: "https://instagram.com", icon: faInstagram, color: "text-pink-500" },
          { href: "https://tiktok.com", icon: faTiktok, color: "text-black" },
        ].map((social) => (
          <a
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 text-2xl transition-transform duration-300 hover:scale-110 hover:text-white"
          >
            <FontAwesomeIcon icon={social.icon} />
          </a>
        ))}
      </div>

      {/* 🔹 Mobile Menu Button */}
      <button
        className="md:hidden text-white text-3xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* 🔹 Mobile Dropdown Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-lg shadow-lg flex flex-col items-center py-6 space-y-4"
        >
          {[
            { name: "Module", href: "#modules" },
            { name: "Despre Noi", href: "#about" },
            { name: "Contact", href: "#contact" },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white text-lg transition hover:text-blue-400"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}

          {/* 🔹 Social Media in Mobile Menu */}
          <div className="flex space-x-5 pt-4">
            {[
              { href: "https://facebook.com", icon: faFacebookF, color: "text-blue-500" },
              { href: "https://instagram.com", icon: faInstagram, color: "text-pink-500" },
              { href: "https://tiktok.com", icon: faTiktok, color: "text-black" },
            ].map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 text-2xl transition-transform duration-300 hover:scale-110 hover:text-white"
              >
                <FontAwesomeIcon icon={social.icon} />
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>



  {/* ====================== NEW & MODERNIZED SECTION ====================== */}
<section className="py-20 bg-gradient-to-r from-blue-50 via-white to-purple-50 text-black text-center relative overflow-hidden">
  {/* Decorative background shapes */}
  <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 opacity-30 blur-3xl rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-200 opacity-30 blur-3xl rounded-full"></div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">
    {/* Section Title */}
    <h2 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-wide">
      De Ce Să Alegi <span className="text-blue-600">Programarea Fără Ecrane?</span>
    </h2>
    <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
      Descoperă beneficiile metodei noastre inovatoare de învățare, care combină jocul cu educația.
    </p>

    {/* Benefits Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { icon: "🧠", title: "Dezvoltare Cognitivă", desc: "Stimulăm gândirea logică și creativitatea prin jocuri interactive." },
        { icon: "🧩", title: "Învățare prin Joc", desc: "Folosim puzzle-uri și jocuri educative pentru a preda concepte de programare." },
        { icon: "👥", title: "Socializare", desc: "Încurajăm interacțiunea și colaborarea între copii." },
        { icon: "❤️", title: "Fără Ecrane", desc: "Protejăm ochii și reducem dependența de tehnologie." },
        { icon: "📚", title: "Materiale Educative", desc: "Folosim cărți și materiale special concepute pentru vârsta lor." },
        { icon: "⭐", title: "Rezultate Dovedite", desc: "Program testat și apreciat de părinți și educatori." }
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white bg-opacity-80 backdrop-blur-md shadow-xl rounded-xl p-6 text-left flex flex-col items-start transition transform hover:scale-105 hover:shadow-2xl hover:bg-opacity-100 duration-300"
        >
          <span className="text-5xl">{item.icon}</span>
          <h3 className="text-2xl font-bold text-gray-900 mt-4">{item.title}</h3>
          <p className="text-gray-700 mt-2 leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>




<section id="modules" className="py-20 bg-gray-100 text-black text-center flex justify-center">
  <div className="w-full max-w-[95%] lg:max-w-[1400px] bg-gradient-to-r from-orange-400 via-red-400 to-pink-500 text-white rounded-2xl shadow-lg p-14">
    {/* Titlul secțiunii */}
    <h2 className="text-4xl font-bold mb-6">Călătoria Cunoașterii</h2>
    <p className="max-w-4xl mx-auto text-lg mb-10">
      La <strong>Programare fără Ecrane</strong>, oferim o varietate de module educative, concepute pentru copiii cu vârste între 2 și 5 ani. Aceste activități stimulează creativitatea, gândirea logică și colaborarea, oferind un mediu captivant și sigur pentru învățare.
    </p>

    {/* Grid Module */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 lg:px-20">
      {modules.map((module) => (
        <div key={module.id} 
          className="bg-white text-black rounded-xl shadow-md p-6 flex flex-col items-center transition transform hover:scale-105 cursor-pointer w-full"
          onClick={() => setSelectedModule(module)}
        >
          <img src={module.image} alt={module.title} className="w-full h-48 object-cover rounded-lg mb-4" />
          <h3 className="text-2xl font-bold text-gray-800">{module.title}</h3>
          <p className="text-gray-600 mt-2">{module.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>


{/* ====================== SKILLS SECTION - MODERNIZED ====================== */}
<section className="py-20 bg-gradient-to-r from-blue-50 via-white to-purple-50 text-black text-center relative overflow-hidden">
  {/* Floating decorative elements */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 opacity-30 blur-3xl rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-200 opacity-30 blur-3xl rounded-full"></div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">
    {/* Section Title */}
    <h2 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-wide">
      <span className="text-blue-600">Ce competențe</span> dezvoltăm?
    </h2>
    <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
      Copiii își dezvoltă abilități esențiale prin joacă, colaborare și rezolvare de probleme.  
    </p>

    {/* Skills Grid */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {[
        { color: "bg-purple-500", icon: "💡", title: "Rezolvarea Problemelor", desc: "Copiii învață să găsească soluții creative prin jocuri logice și activități interactive." },
        { color: "bg-pink-500", icon: "🤝", title: "Lucru în Echipă", desc: "Prin colaborare, copiii descoperă importanța muncii în echipă și a comunicării eficiente." },
        { color: "bg-yellow-500", icon: "🧠", title: "Gândire Algoritmică", desc: "Explorăm pașii esențiali ai gândirii logice și algoritmice prin activități ludice." },
        { color: "bg-orange-500", icon: "🚀", title: "Dezvoltarea Perseverenței", desc: "Jocurile educative ajută la formarea unei mentalități de creștere și a perseverenței în fața provocărilor." }
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white bg-opacity-80 backdrop-blur-md shadow-xl rounded-xl p-6 text-left flex flex-col items-center transition transform hover:scale-105 hover:shadow-2xl hover:bg-opacity-100 duration-300"
        >
          <div className={`w-16 h-16 flex items-center justify-center ${item.color} text-white rounded-full mb-4 text-3xl`}>
            {item.icon}
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mt-4">{item.title}</h3>
          <p className="text-gray-700 mt-2 leading-relaxed text-center">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

  {/* ====================== PRICING SECTION ====================== */}
  <section className="py-10 bg-gray-100 text-center">
  <div className="max-w-4xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">💰 Tarif: 100 RON / oră / copil</h2>
    <p className="text-lg text-gray-700">
      Oferim sesiuni educative captivante și interactive, fără ecrane, care stimulează gândirea logică și creativitatea copiilor.
    </p>
    <div className="mt-6">
      <a
        href="#contact"
        className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
      >
        Înscrie-l pe copilul tău 🚀
      </a>
    </div>
  </div>
</section>

     {/* ====================== ADDITIONAL SECTION ====================== */}
<section className="py-20 bg-gradient-to-r from-blue-100 via-white to-blue-100 text-black flex flex-col items-center relative overflow-hidden">
  {/* Pattern / shape de fundal modernizat */}
  <div className="absolute inset-0 bg-[url('/images/pattern-modern.svg')] bg-no-repeat bg-center bg-cover opacity-15 pointer-events-none"></div>

  <div className="max-w-7xl w-full flex flex-col md:flex-row items-center bg-black rounded-3xl shadow-2xl overflow-hidden transform transition-transform hover:scale-105 relative z-10">
    {/* Partea stângă: imagine artistică */}
    <div className="hidden md:block w-1/3 bg-blue-300 p-6 relative">
      <img
        src="/images/tower.jpg"
        alt="Explorare creativă"
        className="w-full h-auto rounded-xl shadow-lg object-cover"
      />
      {/* Mic supratext inspirativ */}
      <div className="absolute bottom-4 left-4 bg-gray-800 bg-opacity-60 text-white text-sm px-3 py-1 rounded-md">
        Inspirație prin joc
      </div>
    </div>

    {/* Conținut principal */}
    <div className="w-full md:w-2/3 flex flex-col items-center p-12 bg-gradient-to-r from-gray-900 to-gray-900 text-white min-h-full">
      <h2 className="text-5xl font-bold mb-6 text-yellow-400">
        Descoperă Potențialul prin Programare Fără Ecrane
      </h2>
      <p className="text-lg text-gray-300 mb-6 leading-relaxed">
        Într-o lume digitală, este esențial ca cei mici să își dezvolte abilitățile de gândire logică și creativă
        prin metode inovatoare și interactive. Oferim experiențe captivante care pun bazele unui viitor plin
        de curiozitate și descoperire.
      </p>
      <ul className="text-green-300 space-y-4 text-lg">
        <li className="flex items-center">
          <CheckCircle className="mr-3 text-yellow-400" /> Cultivă gândirea logică și creativitatea
        </li>
        <li className="flex items-center">
          <CheckCircle className="mr-3 text-yellow-400" /> Încurajează colaborarea și spiritul de echipă
        </li>
        <li className="flex items-center">
          <CheckCircle className="mr-3 text-yellow-400" /> Pregătește copiii pentru viitor prin metode educative interactive
        </li>
      </ul>
    </div>
  </div>
</section>



{/* ====================== ABOUT US - MODERNIZED ====================== */}
<section id="about" className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 text-black relative overflow-hidden">
  {/* Floating decorative elements */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 opacity-30 blur-3xl rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-200 opacity-30 blur-3xl rounded-full"></div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">
    {/* Section Title */}
    <h2 className="text-5xl font-extrabold text-gray-900 text-center mb-6 tracking-wide">
      Cine <span className="text-blue-600">Suntem?</span>
    </h2>
    <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
      Suntem dedicați transformării fiecărui moment de învățare într-o aventură interactivă și captivantă.
    </p>

    {/* Grid for Image + Content */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left - Image */}
      <div className="relative w-full h-[400px] flex justify-center">
        <img
          src="/images/happy.jpg"
          alt="Despre Noi"
          className="rounded-3xl shadow-lg w-full h-auto object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 rounded-3xl"></div>
      </div>

      {/* Right - Text Content */}
      <div className="space-y-6">
        <h3 className="text-3xl font-bold text-gray-800">Misiunea Noastră</h3>
        <p className="text-gray-600 leading-relaxed">
          La <strong>Programare fără Ecrane</strong>, credem în puterea jocului și a interacțiunilor reale pentru a forma abilități esențiale.
          Ne dorim să oferim experiențe unice, care combină educația interactivă cu bucuria descoperirii.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Echipa noastră este formată din specialiști în educație, psihologie și programare, cu o viziune comună:
          <em> crearea unui mediu sigur și distractiv</em> pentru dezvoltarea copiilor.
        </p>
      </div>
    </div>

    {/* Mission / Vision / Motivation Cards */}
    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      {[
        { color: "bg-blue-500", icon: "🎯", title: "Misiune", desc: "Să dezvoltăm gândirea logică și creativitatea copiilor prin activități interactive." },
        { color: "bg-green-500", icon: "🌟", title: "Viziune", desc: "Creăm un mediu de învățare care stimulează curiozitatea și explorarea prin joacă." },
        { color: "bg-red-500", icon: "💡", title: "Motivație", desc: "Oferim fiecărui copil oportunitatea de a învăța prin experiențe reale, fără tehnologie." }
      ].map((item, index) => (
        <div
          key={index}
          className={`p-8 rounded-2xl shadow-xl text-white ${item.color} bg-opacity-90 hover:bg-opacity-100 transition-all duration-300`}
        >
          <div className="text-5xl mb-4">{item.icon}</div>
          <h3 className="text-2xl font-bold">{item.title}</h3>
          <p className="text-lg mt-2">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* ====================== CONTACT US - MODERNIZED ====================== */}
<section id="contact" className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 text-black">
  {/* Decorative Background Elements */}
  <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 opacity-30 blur-3xl rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-200 opacity-30 blur-3xl rounded-full"></div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">
    {/* Section Title */}
    <h2 className="text-5xl font-extrabold text-gray-900 text-center mb-6 tracking-wide">
      📬 Hai să <span className="text-blue-600">Discutăm!</span>
    </h2>
    <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
      Trimite-ne un mesaj și îți vom răspunde cât mai curând posibil!
    </p>

 {/* Contact Form - Floating Card Style */}
{/* Contact Form - Floating Card Style */}
<div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-10 relative">
  {messageSent ? (
    <div className="text-green-600 text-lg text-center font-semibold">
      ✅ Mesajul tău a fost trimis cu succes! Te vom contacta în curând.
    </div>
  ) : (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target as HTMLFormElement);

        // Send email
        const response = await fetch("https://formspree.io/f/mwpvdbky", {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        });

        if (response.ok) {
          setMessageSent(true);

          // Simulate a delay before redirecting
          setTimeout(() => {
            window.location.href = "#contact"; // Redirect user back to contact section
          }, 3000);

          (e.target as HTMLFormElement).reset(); // Reset form after submission
        } else {
          alert("❌ Oops! A apărut o eroare. Încearcă din nou.");
        }
      }}
    >
      {/* Name Input */}
      <div className="mb-6 relative">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
          Nume
        </label>
        <div className="relative">
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Introdu numele tău"
            required
          />
          <span className="absolute right-4 top-3 text-gray-400">👤</span>
        </div>
      </div>

      {/* Email Input */}
      <div className="mb-6 relative">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
          Email
        </label>
        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Introdu adresa de email"
            required
          />
          <span className="absolute right-4 top-3 text-gray-400">📧</span>
        </div>
      </div>

      {/* Message Input */}
      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
          Mesaj
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          placeholder="Scrie mesajul tău aici..."
          required
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:from-blue-700 hover:to-purple-700 transition-transform transform hover:scale-105"
      >
        Trimite Mesaj 🚀
      </button>
    </form>
  )}
</div>





  {/* Call-to-Action Box */}
<div className="mt-16 max-w-5xl mx-auto bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-2xl text-center shadow-xl">
  <h3 className="text-2xl font-bold">📞 Preferi să ne suni?</h3>
  <p className="mt-2 text-lg">
    Ne poți contacta la{" "}
    <a href="tel:+40726106381" className="underline font-bold hover:text-yellow-300 transition">
      +40 726 106 381
    </a>
  </p>
</div>

  </div>
</section>


{selectedModule && (
  <motion.div
    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-lg z-50"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={() => setSelectedModule(null)}
  >
    {/* Modal Card */}
    <motion.div
      className="relative bg-white/80 backdrop-blur-xl shadow-2xl rounded-2xl p-8 w-[95%] max-w-lg text-center"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-gray-700 hover:text-red-600 text-xl font-bold transition"
        onClick={() => setSelectedModule(null)}
      >
        ✖
      </button>

      {/* Title */}
      <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
        {selectedModule.title}
      </h2>

      {/* Image */}
      <img
        src={selectedModule.image}
        alt={selectedModule.title}
        className="w-full h-52 object-cover rounded-xl shadow-lg mb-4"
      />

      {/* Description */}
      <p className="text-gray-700 text-lg leading-relaxed">
        {selectedModule.description}
      </p>

      {/* Extra Details Box - Unique for Each Module */}
      {selectedModule.extraDetails && (
        <div className="mt-6 bg-gray-100 p-4 rounded-xl shadow-inner text-gray-600 text-sm">
          📌 <span className="font-semibold">Știai că?</span> {selectedModule.extraDetails}
        </div>
      )}

      {/* CTA Button */}
      <div className="mt-6">
        <button
          className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-purple-700 transition-transform transform hover:scale-105"
          onClick={() => setSelectedModule(null)}
        >
          Închide
        </button>
      </div>
    </motion.div>
  </motion.div>
)}


      {/* ====================== FOOTER ====================== */}
      <footer className="bg-black text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} Programare fără Ecrane. Toate drepturile rezervate.</p>
      </footer>
    </div>
  );
}

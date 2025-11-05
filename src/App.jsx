import { motion } from "framer-motion";
import { Linkedin, Globe, Twitter } from "react-feather";
import logo0 from "./assets/logo0.jpeg";
import logo1 from "./assets/logo1.png";
import logo2 from "./assets/logo2.jpeg";
import logo3 from "./assets/logo3.png";
import logo4 from "./assets/logo4.png";
import logo5 from "./assets/logo5.png";
import logo6 from "./assets/logo6.png";
import logo7 from "./assets/logo7.png";
import logo8 from "./assets/logo8.png";
import logo9 from "./assets/logo9.png";
import logo10 from "./assets/logo10.png";
import akalya from "./assets/akalya.png"; 
const socials = [
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-5 h-5" />,
    link: "https://www.linkedin.com/in/akalya-thirumurugan/",
  },
  {
    name: "Portfolio",
    icon: <Globe className="w-5 h-5" />,
    link: "https://linktr.ee/akalyadesigns",
  },
  {
    name: "Twitter / X",
    icon: <Twitter className="w-5 h-5" />,
    link: "https://x.com/Akalya_T03",
  },
];
const logos = [
  {
    src: logo8,
    title: "Signature meat",
    desc: "A meat brand -The bold knife and chicken thigh (fish) resembel logo -mockuop tile.",
  },

  {
    src: logo3,
    title: "Signature meat",
    desc: "A meat brand -The bold knife and chicken thigh (fish) resembel logo -mockuop Tshirt.",
  },
  {
    src: logo4,
    title: "Sacred Vine Church",
    desc: "A meat brand -The bold knife and chicken thigh (fish) resembel logo.",
  },
  {
    src: logo5,
    title: " Obsidian Athletic club",
    desc: "The letter mark ",
  },
  {
    src: logo6,
    title: " Obsidian Athletic club",
    desc: "The letter mark-Tshirt mockup.",
  },
  {
    src: logo7,
    title: "Obsidian Athletic club",
    desc: "The letter mark-Bag mockup",
  },
  {
    src: logo0,
    title: "Sacred Vine Church",
    desc: "A monogram represents the church identity",
  },

  {
    src: logo2,
    title: "Sacred Vine church",
    desc: "A monogram represents the church identity-Mockup",
   
  },
  {
    src: logo10,
    title: "Boutique Pilates Club",
    desc: "Elegant minimal logo crafted for a modern fitness brand-Mockup.",
  },
  {
    src: logo1,
    title: "Boutique Pilates Club",
    desc: "Elegant minimal logo crafted for a modern fitness brand.",
  },
  {
    src: logo9,
    title: "Boutique Pilates Club",
    desc: "Elegant minimal logo crafted for a modern fitness brand-Mockup.",
  },
];

const App = () => {
  return (
    <section className="min-h-screen bg-[#f9f6f1] text-[#3c2f2f] py-20 px-6 md:px-16 lg:px-24">
      {/* Header */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight">
          Logo Design Gallery
        </h1>
        <p className="text-lg md:text-xl text-[#5c4a3d] max-w-2xl mx-auto leading-relaxed">
          A collection of my selected logo works .
        </p>
      </motion.div>

      {/* Logo Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {logos.map((logo, i) => (
          <motion.div
            key={i}
            className="relative bg-[#efe9e3] rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.03 }}
          >
            <img
              src={logo.src}
              alt={logo.title}
              className="w-full h-64 object-contain bg-[#f9f6f1] p-6 transform group-hover:scale-105 transition-transform duration-700"
            />

            {/* Hover Overlay */}
            <motion.div
              className="absolute inset-0 bg-[#3c2f2f]/60 opacity-0 hover:opacity-100 flex flex-col justify-center items-center text-center text-[#f9f6f1] px-6 transition-opacity duration-500"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <h3 className="text-xl font-semibold mb-2">{logo.title}</h3>
              <p className="text-sm md:text-base opacity-90">{logo.desc}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="relative mt-24 max-w-4xl mx-auto bg-[#efe9e3] rounded-2xl p-8 md:p-10 shadow-md text-left flex flex-col md:flex-row items-center gap-8 md:gap-12 overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#8b5e3c] mb-3">
            Who am I ?
          </h2>
          <p className="text-[#5c4a3d] text-base md:text-lg leading-relaxed">
            I’m{" "}
            <span className="font-medium text-[#8b5e3c]">
              Akalya Thirumurugan
            </span>{" "}
            a designer who started with logos and fell in love with storytelling
            through visuals. Over time, I transitioned into development,
            bringing my designs to life with motion, interactivity, and
            experience-driven detail.
            <br />
            <br />
            My journey from crafting static symbols to building living digital
            spaces taught me one thing — good design isn’t just seen, it’s felt.
            Every logo, every line of code carries that belief.
          </p>
        </div>

        {/* Profile Image */}
        <motion.img
          src={akalya}
          alt="Akalya Thirumurugan"
          className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-[#f9f6f1] shadow-md hover:shadow-xl transition-all hover:scale-105"
          whileHover={{
            scale: 1.08,
            boxShadow: "0 0 25px rgba(139, 94, 60, 0.4)",
          }}
        />
      </motion.div>

      {/* Footer */}
      <motion.footer
        className="mt-20 text-center text-[#8b5e3c] text-sm opacity-80 flex flex-col items-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Social Icons */}
        <div className="flex gap-6 justify-center">
          {socials.map((social, i) => (
            <motion.a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#8b5e3c] text-[#f9f6f1] px-4 py-2 rounded-xl font-medium hover:bg-[#734a2d] transition-all shadow-md hover:shadow-lg"
              whileHover={{
                scale: 1.08,
                boxShadow: "0 0 20px rgba(139, 94, 60, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              {social.icon}
              <span className="hidden sm:inline">{social.name}</span>
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <p className="opacity-70 text-sm text-[#5c4a3d] mt-4">
          Crafted by{" "}
          <span className="font-medium text-[#8b5e3c]">
            Akalya Thirumurugan
          </span>{" "}
          © 2025 — All rights reserved.
        </p>
      </motion.footer>
    </section>
  );
};

export default App;

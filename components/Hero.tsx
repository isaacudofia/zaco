import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa6";

const Hero = () => {
  return (
    /* The outer container uses max-w-7xl and mx-auto 
       to match the Footer's alignment exactly.
    */
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 font-sans">
        
        {/* LEFT CARD: Profile Information */}
        <div className="md:col-span-4 bg-[#121212] rounded-[40px] p-8 border border-gray-800/50 flex flex-col items-center text-center">
          <div className="relative w-full aspect-square bg-[#f06543] rounded-[40px] overflow-hidden mb-8">
            <Image 
              src="/image 1.jpg" 
              alt="Isaac" 
              fill
              className="object-cover grayscale brightness-110 object-top"
              priority 
            />
          </div>
          
          <h1 className="text-3xl font-bold mb-2 text-white">Bentos Walker</h1>
          <p className="text-[#999999] text-sm mb-8 tracking-tight">I am a Web Designer based in san francisco.</p>
          
          <div className="flex gap-4">
            {[FaFacebookF, FaXTwitter, FaLinkedinIn, FaGithub].map((Icon, index) => (
              <Link key={index} href="#" className="w-12 h-12 rounded-2xl bg-black border border-gray-800/50 flex items-center justify-center text-[#999999] hover:text-white hover:border-white transition-all">
                <Icon size={18} />
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: Two stacked cards */}
        <div className="md:col-span-8 flex flex-col gap-6">
          
          {/* TOP RIGHT CARD: Introduction */}
          <div className="bg-[#121212] rounded-[40px] p-10 border border-gray-800/50 flex flex-col justify-center flex-grow">
            <p className="text-[#999999] uppercase tracking-[0.2em] text-[10px] font-bold mb-4">Hello There!</p>
            <h2 className="text-4xl md:text-5xl font-medium leading-[1.2] mb-6 text-white">
              I’m Bentos Walker, a product designer crafting user-centric design with pixel-perfect precision.
            </h2>

            <div className="flex items-center gap-3 mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#36D399] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#36D399]"></span>
              </span>
              <span className="text-[#999999] text-sm font-medium">Available for Freelancing</span>
            </div>

            <Link 
              href="#" 
              className="inline-flex items-center justify-center gap-2 bg-[#f06543] text-white w-fit px-8 py-3 rounded-2xl font-semibold hover:bg-[#d95636] transition-all"
            >
              Download CV <span className="text-lg">↓</span>
            </Link>
          </div>

          {/* BOTTOM RIGHT CARD: Companies */}
          <div className="bg-[#121212] rounded-[40px] p-8 border border-gray-800/50">
            <p className="text-[#999999] text-[10px] font-bold uppercase tracking-[0.2em] mb-8">Company I Worked With</p>
            <div className="flex flex-wrap items-center justify-between gap-8 opacity-20 grayscale">
                <span className="text-xl font-bold italic tracking-tighter text-white uppercase">LinkedIn</span>
                <span className="text-xl font-bold tracking-tighter text-white">Google</span>
                <span className="text-xl font-bold lowercase tracking-tighter text-white">slack</span>
                <span className="text-xl font-bold tracking-tighter text-white uppercase">Amazon</span>
                <span className="text-xl font-bold tracking-tighter text-white">Walmart *</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
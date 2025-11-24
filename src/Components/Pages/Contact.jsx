export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-[120px] w-full bg-[#FFF2F1] py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-10">
            Got a question, <br /> or want to chat?
          </h1>

          <form className="space-y-6">

            <div>
              <label className="block text-gray-800 font-semibold mb-2">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 
                           focus:ring-2 focus:ring-red-300 outline-none bg-white"
              />
            </div>

            <div>
              <label className="block text-gray-800 font-semibold mb-2">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Type your message..."
                className="w-full px-4 py-3 rounded-xl border border-gray-300 
                           focus:ring-2 focus:ring-red-300 outline-none bg-white"
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-10 py-2 bg-[#FF7A59] text-white font-semibold 
                         rounded-sm text-lg shadow-md hover:bg-[#ff6a40] transition cursor-pointer"
            >
              Submit
            </button>

          </form>
        </div>

        <div className="relative hidden md:flex justify-center items-center">

          <svg
            width="430"
            height="430"
            viewBox="0 0 430 430"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-90"
          >
            <circle cx="215" cy="215" r="200" fill="#FFEFE9" />

            <rect x="90" y="250" width="250" height="120" rx="14" fill="#FFFFFF" stroke="#F66F61" strokeWidth="2"/>
            <rect x="110" y="260" width="210" height="85" rx="6" fill="#FFF5F5" />

            <rect x="100" y="120" width="230" height="140" rx="8" fill="white" stroke="#F66F61" strokeWidth="2"/>
            
            <rect x="120" y="150" width="160" height="10" rx="3" fill="#F66F61" />
            <rect x="120" y="170" width="190" height="10" rx="3" fill="#FFD2C8" />
            <rect x="120" y="190" width="130" height="10" rx="3" fill="#FFD2C8" />
            <rect x="120" y="210" width="160" height="10" rx="3" fill="#FFD2C8" />

            <circle cx="320" cy="130" r="22" fill="#E3F2FD"/>
            <text x="309" y="137" fontSize="22" fill="#1976D2">⚛</text>

            <rect x="60" y="140" width="75" height="35" rx="18" fill="#E8E7FA"/>
            <text x="78" y="162" fontSize="14" fill="#4338CA" fontWeight="600">.NET</text>

            <rect x="260" y="260" width="110" height="75" rx="10" fill="#1F2937"/>
            <circle cx="280" cy="275" r="4" fill="#EF4444"/>
            <circle cx="295" cy="275" r="4" fill="#F59E0B"/>
            <circle cx="310" cy="275" r="4" fill="#10B981"/>
            <text x="275" y="305" fontSize="14" fill="#FFFFFF">{">_ npm start"}</text>

            <rect x="130" y="70" width="140" height="40" rx="20" fill="#FFE1E1"/>
            <text x="145" y="95" fontSize="16" fill="#EF4444" fontWeight="600">
              Full-Stack Developer
            </text>
          </svg>

        </div>

      </div>
    </section>
  );
}

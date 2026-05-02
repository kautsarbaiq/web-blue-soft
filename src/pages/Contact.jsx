import React from 'react';

function Contact() {
  return (
    <section id="contact" className="flex-grow flex items-center justify-center pt-32 pb-2xl px-gutter relative z-10 w-full max-w-7xl mx-auto min-h-screen">
      <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Context Section */}
        <div className="md:col-span-5 flex flex-col justify-center space-y-lg px-md">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 w-fit shadow-[0_0_12px_rgba(0,212,255,0.2)]">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
            <span className="font-tech-label text-tech-label text-primary-container uppercase">Communication Protocol</span>
          </div>
          <h1 className="font-h1 text-h1 text-on-background">
            Let's Build <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-secondary">Something Great</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
            Initialize a connection with our core team. We build high-performance, future-proof digital architectures for enterprises that demand precision.
          </p>

          <div className="space-y-md pt-xl font-code text-code text-on-surface-variant">
            <div className="flex items-center space-x-4">
              <span className="material-symbols-outlined text-primary-container">location_on</span>
              <span>Terminal C, Silicon Valley Sector 7</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="material-symbols-outlined text-primary-container">mail</span>
              <span>root@bluesoft.io</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="material-symbols-outlined text-primary-container">bolt</span>
              <span>System Status: Online, All Nodes Active</span>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="md:col-span-7">
          <div className="relative w-full rounded-xl border border-white/10 bg-white/5 backdrop-blur-[16px] p-xl shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden group">
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-primary-container/50 rounded-tl-xl"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-primary-container/50 rounded-br-xl"></div>
            
            <form className="space-y-lg relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                {/* Full Name */}
                <div className="flex flex-col space-y-sm">
                  <label className="font-tech-label text-tech-label text-on-surface-variant uppercase" htmlFor="name">Full Name</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant text-opacity-50">person</span>
                    <input className="w-full bg-black/20 border border-white/10 rounded-lg py-3 pl-12 pr-4 text-on-background font-body-md focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container/50 focus:shadow-[0_0_12px_rgba(0,212,255,0.3)] transition-all placeholder:text-on-surface-variant/30" id="name" placeholder="John Doe" type="text" />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col space-y-sm">
                  <label className="font-tech-label text-tech-label text-on-surface-variant uppercase" htmlFor="email">Email Address</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant text-opacity-50">alternate_email</span>
                    <input className="w-full bg-black/20 border border-white/10 rounded-lg py-3 pl-12 pr-4 text-on-background font-body-md focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container/50 focus:shadow-[0_0_12px_rgba(0,212,255,0.3)] transition-all placeholder:text-on-surface-variant/30" id="email" placeholder="john@domain.com" type="email" />
                  </div>
                </div>
              </div>

              {/* Service Dropdown */}
              <div className="flex flex-col space-y-sm">
                <label className="font-tech-label text-tech-label text-on-surface-variant uppercase" htmlFor="service">Target Architecture</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant text-opacity-50">memory</span>
                  <select defaultValue="" className="w-full bg-black/20 border border-white/10 rounded-lg py-3 pl-12 pr-10 text-on-background font-body-md appearance-none focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container/50 focus:shadow-[0_0_12px_rgba(0,212,255,0.3)] transition-all cursor-pointer" id="service">
                    <option className="bg-surface-container text-on-surface-variant" disabled value="">Select a deployment type...</option>
                    <option className="bg-surface-container text-on-background" value="web">Enterprise Web Application</option>
                    <option className="bg-surface-container text-on-background" value="cloud">Cloud Infrastructure & DevOps</option>
                    <option className="bg-surface-container text-on-background" value="ai">AI / Machine Learning Integration</option>
                    <option className="bg-surface-container text-on-background" value="security">Cybersecurity Audit</option>
                  </select>
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant pointer-events-none">expand_more</span>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col space-y-sm">
                <label className="font-tech-label text-tech-label text-on-surface-variant uppercase" htmlFor="message">Encrypted Payload</label>
                <div className="relative">
                  <span className="absolute left-4 top-4 material-symbols-outlined text-on-surface-variant text-opacity-50">code</span>
                  <textarea className="w-full bg-black/20 border border-white/10 rounded-lg py-3 pl-12 pr-4 text-on-background font-body-md focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container/50 focus:shadow-[0_0_12px_rgba(0,212,255,0.3)] transition-all placeholder:text-on-surface-variant/30 resize-none" id="message" placeholder="Describe your project parameters..." rows="5"></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button className="w-full bg-primary-container text-on-primary-fixed font-tech-label text-tech-label uppercase py-4 rounded-lg flex items-center justify-center space-x-2 hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all duration-300 relative overflow-hidden group" type="button">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-container to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center space-x-2 font-bold tracking-wider">
                  <span>Execute Transmission</span>
                  <span className="material-symbols-outlined text-sm">send</span>
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

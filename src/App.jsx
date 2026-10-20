import React, { useState } from 'react';

// Standalone Built-in SVG Icons (Zero Dependencies Required)
const IconMenu = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"/></svg>;
const IconX = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"/></svg>;
const IconEye = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>;
const IconArrowUpRight = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>;
const IconFrame = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>;
const IconInstagram = () => <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>;
const IconRefresh = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>;

export default function StudioRobForlani() {
  const [activeTab, setActiveTab] = useState('works');
  const [themeMode, setThemeMode] = useState('parchment');
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [showInRoom, setShowInRoom] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [commissionStep, setCommissionStep] = useState(1);
  const [showInstaSetup, setShowInstaSetup] = useState(false);

  const artworks = [
    {
      id: 'crimson-tonic',
      title: 'Crimson Tonic',
      code: '#1026',
      medium: 'Mixed media on linen (Spraypaint, Acrylic, Pastels, Oils)',
      dimensions: '90cm × 180cm',
      year: '2026',
      category: 'Recent Canvases',
      image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1200&q=80',
      description: 'An aggressive exploration of red tones intersecting bold gestural charcoal marks. High tactile density with layered polymer finishes.'
    },
    {
      id: 'camel',
      title: 'Camel',
      code: '#1024',
      medium: 'Mixed media on linen',
      dimensions: '120cm × 120cm',
      year: '2025',
      category: 'Recent Canvases',
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80',
      description: 'Earthy ochre tones balancing quiet negative space against energetic impasto strokes. Inspired by natural earth pigments.'
    },
    {
      id: 'moon-theory',
      title: 'Moon Theory Section II',
      code: '#657',
      medium: 'Mixed media on linen',
      dimensions: '120cm × 120cm',
      year: '2024',
      category: 'Lago Series',
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80',
      description: 'Deep violet and cool azure layers arguing with warm underlying undertones. Featured in the Lago Exhibition.'
    },
    {
      id: 'r3vo7ution',
      title: 'R3VO7UTION Study IV',
      code: '#882',
      medium: 'Acrylic, spraypaint & industrial oil on canvas',
      dimensions: '150cm × 150cm',
      year: '2023',
      category: 'R3VO7UTION',
      image: 'https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&w=1200&q=80',
      description: 'A study on transformation, perception, and breaking structural grid habits in contemporary abstract painting.'
    }
  ];

  const books = [
    {
      title: "The Man Who Painted His Shutters Green",
      subtitle: "Narrative & Observation",
      status: "Available Now",
      release: "Published",
      coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
      description: "An engaging literary work reflecting on perspective, choice, and seeing color where others see routine.",
      amazonUrl: "https://amazon.com",
      featuredQuote: "“Color is never just pigment; it is an assertion of presence.”"
    },
    {
      title: "How Do You Do That? What Nobody Tells You About Making Things",
      subtitle: "Creative Process & Practice",
      status: "Available Now",
      release: "Published",
      coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
      description: "Unvarnished insight into the raw reality of making art, pushing past technique, and building creative momentum.",
      amazonUrl: "https://amazon.com",
      featuredQuote: "“Most creative advice teaches technique. This book teaches what happens before technique matters.”"
    }
  ];

  const instagramFeed = [
    {
      id: 'ig-1',
      imageUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80',
      caption: "'Crimson Tonic' #1026 resting on the studio wall. Close enough to see the marks arguing with each other.",
      likes: 342,
      date: '2 DAYS AGO'
    },
    {
      id: 'ig-2',
      imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80',
      caption: "Nature always gets colour right. When you're stuck on a palette — stop and look outside. 'Camel' #1024.",
      likes: 512,
      date: '5 DAYS AGO'
    },
    {
      id: 'ig-3',
      imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80',
      caption: "Trust the process. From the first gestural mark on raw linen to the finished frame.",
      likes: 289,
      date: '1 WEEK AGO'
    },
    {
      id: 'ig-4',
      imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
      caption: "Fresh layer of polymer and oil glazes setting in the studio light.",
      likes: 418,
      date: '2 WEEKS AGO'
    }
  ];

  const isDark = themeMode === 'charcoal';

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDark ? 'bg-[#111111] text-[#EAE6DF]' : 'bg-[#FCFCF9] text-[#1C1B18]'
    } font-sans`}>
      
      {/* HEADER */}
      <header className={`sticky top-0 z-40 backdrop-blur-md border-b transition-colors duration-500 ${
        isDark ? 'bg-[#111111]/90 border-neutral-800' : 'bg-[#FCFCF9]/90 border-stone-200'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <a href="#" onClick={() => setActiveTab('works')} className="block">
              <h1 className="text-xl md:text-2xl font-serif tracking-widest font-semibold uppercase">
                Rob Forlani
              </h1>
              <p className={`text-xs tracking-widest uppercase mt-0.5 ${isDark ? 'text-neutral-400' : 'text-stone-500'}`}>
                Artist / Mixed Media
              </p>
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-sm tracking-widest uppercase">
            {[
              { id: 'works', label: 'Selected Works' },
              { id: 'books', label: 'Publications' },
              { id: 'feed', label: 'Studio Feed' },
              { id: 'about', label: 'About & Process' },
              { id: 'commissions', label: 'Commissions' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`transition-colors py-1 border-b-2 ${
                  activeTab === tab.id 
                    ? isDark ? 'border-amber-400 text-white font-medium' : 'border-stone-900 text-black font-medium'
                    : 'border-transparent text-stone-500 hover:text-stone-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setThemeMode(isDark ? 'parchment' : 'charcoal')}
              className={`p-2 rounded-full border text-xs flex items-center space-x-2 px-3 transition-all ${
                isDark 
                  ? 'border-neutral-700 bg-neutral-800 text-neutral-200 hover:bg-neutral-700' 
                  : 'border-stone-300 bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              <span className={`w-2.5 h-2.5 rounded-full ${isDark ? 'bg-amber-400' : 'bg-stone-800'}`}></span>
              <span className="font-mono text-[11px] uppercase tracking-wider hidden sm:inline">
                {isDark ? 'Night Studio' : 'Gallery Light'}
              </span>
            </button>

            <button
              onClick={() => setContactOpen(true)}
              className={`px-4 py-2 text-xs uppercase tracking-widest font-medium rounded transition-all ${
                isDark 
                  ? 'bg-amber-400 text-neutral-950 hover:bg-amber-300' 
                  : 'bg-stone-900 text-stone-100 hover:bg-stone-800'
              }`}
            >
              Inquire
            </button>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-6 py-12">

        {/* WORKS TAB */}
        {activeTab === 'works' && (
          <section className="space-y-12">
            <div className="max-w-3xl py-8 space-y-4">
              <h2 className="text-3xl md:text-5xl font-serif font-light leading-tight">
                Expressive, layered abstract artwork driven by mark-making and spontaneity.
              </h2>
              <p className={`text-base font-light leading-relaxed ${isDark ? 'text-neutral-400' : 'text-stone-600'}`}>
                Working fluidly across spraypaint, acrylic, oils, polymer glazes, and pastels on canvas and Belgian linen.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4">
              {artworks.map((art) => (
                <div 
                  key={art.id} 
                  className="group cursor-pointer space-y-4"
                  onClick={() => { setSelectedArtwork(art); setShowInRoom(false); }}
                >
                  <div className="relative overflow-hidden bg-stone-200 aspect-[4/3] rounded-sm">
                    <img 
                      src={art.image} 
                      alt={art.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="bg-white/90 text-stone-900 text-xs tracking-widest uppercase px-4 py-2 font-medium shadow-sm flex items-center space-x-2">
                        <IconEye />
                        <span>Inspect Canvas</span>
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between items-start border-b pb-4 border-stone-200/50">
                    <div>
                      <h3 className="text-xl font-serif font-medium group-hover:text-amber-600 transition-colors">
                        {art.title} <span className="text-xs text-stone-400 font-sans tracking-normal font-normal">{art.code}</span>
                      </h3>
                      <p className={`text-xs mt-1 ${isDark ? 'text-neutral-400' : 'text-stone-500'}`}>
                        {art.medium}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-stone-400">
                      {art.dimensions}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* BOOKS TAB */}
        {activeTab === 'books' && (
          <section className="space-y-16 py-4">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-600">Publications & Writings</span>
              <h2 className="text-3xl md:text-5xl font-serif font-light">
                Books by Rob Forlani
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {books.map((book, idx) => (
                <div 
                  key={idx}
                  className={`p-6 rounded border flex flex-col justify-between space-y-6 ${
                    isDark ? 'border-neutral-800 bg-neutral-900/40' : 'border-stone-200 bg-white/60'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="aspect-[3/4] max-w-xs mx-auto overflow-hidden rounded shadow-md bg-stone-200">
                      <img 
                        src={book.coverImage} 
                        alt={book.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 border border-amber-500/20">
                        {book.status}
                      </span>
                      <h3 className="text-2xl font-serif font-medium mt-3">{book.title}</h3>
                      <p className="text-xs text-stone-400 italic mt-0.5">{book.subtitle}</p>
                    </div>
                    <p className={`text-xs leading-relaxed ${isDark ? 'text-neutral-300' : 'text-stone-600'}`}>
                      {book.description}
                    </p>
                    <blockquote className="border-l-2 border-amber-500/50 pl-3 italic text-xs text-stone-500">
                      {book.featuredQuote}
                    </blockquote>
                  </div>

                  <a
                    href={book.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-2.5 text-xs uppercase tracking-widest text-center font-medium rounded flex items-center justify-center space-x-2 transition-all ${
                      isDark 
                        ? 'bg-amber-400 text-neutral-950 hover:bg-amber-300' 
                        : 'bg-stone-900 text-stone-100 hover:bg-stone-800'
                    }`}
                  >
                    <span>View on Amazon</span>
                    <IconArrowUpRight />
                  </a>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* FEED TAB */}
        {activeTab === 'feed' && (
          <section className="space-y-12 py-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b pb-8 border-stone-200/40">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-stone-400">Live Studio Stream</span>
                <h2 className="text-3xl md:text-5xl font-serif font-light">Visual Chronicles</h2>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setShowInstaSetup(!showInstaSetup)}
                  className="text-xs font-mono uppercase text-amber-600 underline hover:text-amber-500"
                >
                  {showInstaSetup ? "Hide Info" : "How Sync Works"}
                </button>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className={`px-4 py-2 text-xs uppercase tracking-widest font-medium rounded flex items-center space-x-2 border ${
                    isDark ? 'border-neutral-700 hover:bg-neutral-800' : 'border-stone-300 hover:bg-stone-100'
                  }`}
                >
                  <IconInstagram />
                  <span>Instagram</span>
                </a>
              </div>
            </div>

            {showInstaSetup && (
              <div className={`p-6 rounded border font-mono text-xs space-y-3 ${
                isDark ? 'bg-neutral-900 border-amber-500/30' : 'bg-stone-100 border-amber-600/30'
              }`}>
                <div className="flex items-center space-x-2 text-amber-600 font-bold">
                  <IconRefresh />
                  <span>AUTOMATED INSTAGRAM FEED INTEGRATION</span>
                </div>
                <p className="leading-relaxed">
                  When deployed live on <strong>robforlani.com</strong> via Netlify, this section automatically syncs your phone's Instagram posts via Curator.io or Instagram API.
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {instagramFeed.map((post) => (
                <div 
                  key={post.id} 
                  className={`rounded overflow-hidden border transition-all duration-300 ${
                    isDark ? 'bg-neutral-900/60 border-neutral-800' : 'bg-white border-stone-200'
                  }`}
                >
                  <div className="aspect-square overflow-hidden relative group">
                    <img 
                      src={post.imageUrl} 
                      alt="Instagram snippet" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 space-y-2">
                    <p className={`text-xs leading-relaxed line-clamp-3 ${isDark ? 'text-neutral-300' : 'text-stone-700'}`}>
                      {post.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ABOUT TAB */}
        {activeTab === 'about' && (
          <section className="space-y-12 py-4 max-w-4xl">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-600">Artist Statement</span>
              <h2 className="text-4xl md:text-6xl font-serif font-light">Rob Forlani</h2>
              <p className="text-lg font-serif italic text-amber-600">
                "Step into a world where the mind dances with the essence of tangibility."
              </p>
            </div>

            <div className={`space-y-6 text-base leading-relaxed ${isDark ? 'text-neutral-300' : 'text-stone-700'}`}>
              <p>
                I am an artist whose abstract creations invite viewers to explore emotional landscapes uniquely their own. My artistic foundation was forged early in life during recovery from a childhood road accident, where drawing and painting became both sanctuary and voice.
              </p>
              <p>
                Working across spraypaint, acrylics, oils, polymer glazes, and pastels, I believe limiting myself to a single medium restricts creative exploration. Each idea manifests through its own unique vocabulary.
              </p>
            </div>
          </section>
        )}

        {/* COMMISSIONS TAB */}
        {activeTab === 'commissions' && (
          <section className="max-w-3xl py-4 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-600">Custom Work</span>
              <h2 className="text-3xl md:text-5xl font-serif font-light">Bespoke Commissions</h2>
            </div>

            <div className={`p-8 rounded border space-y-6 ${isDark ? 'bg-neutral-900/60 border-neutral-800' : 'bg-white border-stone-200'}`}>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Commission inquiry sent to Rob Forlani!"); }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Your Full Name" 
                    required 
                    className={`p-3 text-xs rounded border w-full ${isDark ? 'bg-neutral-800 border-neutral-700' : 'bg-stone-50 border-stone-200'}`}
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    required 
                    className={`p-3 text-xs rounded border w-full ${isDark ? 'bg-neutral-800 border-neutral-700' : 'bg-stone-50 border-stone-200'}`}
                  />
                </div>
                <textarea 
                  rows={4} 
                  placeholder="Describe your wall space, preferred palette, or vision..." 
                  className={`p-3 text-xs rounded border w-full ${isDark ? 'bg-neutral-800 border-neutral-700' : 'bg-stone-50 border-stone-200'}`}
                ></textarea>
                <button 
                  type="submit" 
                  className="w-full py-3 bg-amber-500 text-neutral-950 font-medium uppercase text-xs tracking-widest rounded hover:bg-amber-400"
                >
                  Submit Commission Request
                </button>
              </form>
            </div>
          </section>
        )}

      </main>

      {/* LIGHTBOX */}
      {selectedArtwork && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8">
          <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-neutral-950 text-white rounded p-6 md:p-10 space-y-6 border border-neutral-800">
            <button 
              onClick={() => setSelectedArtwork(null)}
              className="absolute top-6 right-6 text-stone-400 hover:text-white p-2"
            >
              <IconX />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 flex flex-col items-center space-y-4">
                {!showInRoom ? (
                  <img 
                    src={selectedArtwork.image} 
                    alt={selectedArtwork.title} 
                    className="max-h-[60vh] object-contain rounded shadow-2xl"
                  />
                ) : (
                  <div className="w-full aspect-video bg-neutral-900 border border-neutral-800 rounded relative flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-neutral-800/40 to-neutral-950/80"></div>
                    <div className="absolute bottom-0 inset-x-0 h-16 bg-neutral-900 border-t border-neutral-800"></div>
                    <img 
                      src={selectedArtwork.image} 
                      alt="In room scale"
                      className="h-48 object-cover shadow-2xl z-10 border-4 border-black"
                    />
                    <div className="absolute bottom-4 right-12 h-36 w-8 bg-neutral-700/60 rounded-t-full flex items-center justify-center text-[10px] font-mono text-neutral-400">
                      175cm
                    </div>
                  </div>
                )}

                <button
                  onClick={() => setShowInRoom(!showInRoom)}
                  className="text-xs font-mono uppercase tracking-widest text-amber-400 hover:underline flex items-center space-x-2"
                >
                  <IconFrame />
                  <span>{showInRoom ? "View Canvas Details" : "Preview Canvas In Room Scale"}</span>
                </button>
              </div>

              <div className="lg:col-span-4 space-y-6 border-t lg:border-t-0 lg:border-l border-neutral-800 pt-6 lg:pt-0 lg:pl-8">
                <div>
                  <span className="text-xs font-mono text-amber-500 uppercase">{selectedArtwork.category}</span>
                  <h3 className="text-3xl font-serif mt-1">{selectedArtwork.title}</h3>
                  <p className="text-xs text-neutral-400 font-mono mt-1">{selectedArtwork.code} • {selectedArtwork.year}</p>
                </div>

                <div className="space-y-2 text-xs">
                  <p><strong className="text-neutral-400">Dimensions:</strong> {selectedArtwork.dimensions}</p>
                  <p><strong className="text-neutral-400">Medium:</strong> {selectedArtwork.medium}</p>
                </div>

                <p className="text-xs leading-relaxed text-neutral-300">
                  {selectedArtwork.description}
                </p>

                <button
                  onClick={() => { setSelectedArtwork(null); setContactOpen(true); }}
                  className="w-full py-3 bg-amber-400 text-neutral-950 text-xs uppercase font-medium tracking-widest rounded hover:bg-amber-300 transition-colors"
                >
                  Inquire About Artwork
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CONTACT MODAL */}
      {contactOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className={`relative w-full max-w-lg p-8 rounded border ${
            isDark ? 'bg-neutral-900 border-neutral-800 text-white' : 'bg-white border-stone-200 text-stone-900'
          }`}>
            <button 
              onClick={() => setContactOpen(false)} 
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-700"
            >
              <IconX />
            </button>

            <h3 className="text-2xl font-serif mb-2">Direct Inquiry</h3>

            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Message sent!"); setContactOpen(false); }}>
              <input 
                type="text" 
                placeholder="Your Name" 
                required 
                className={`w-full p-3 text-xs rounded border ${isDark ? 'bg-neutral-800 border-neutral-700' : 'bg-stone-50 border-stone-200'}`}
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                required 
                className={`w-full p-3 text-xs rounded border ${isDark ? 'bg-neutral-800 border-neutral-700' : 'bg-stone-50 border-stone-200'}`}
              />
              <textarea 
                rows={4} 
                placeholder="Your message..." 
                className={`w-full p-3 text-xs rounded border ${isDark ? 'bg-neutral-800 border-neutral-700' : 'bg-stone-50 border-stone-200'}`}
              ></textarea>
              <button 
                type="submit" 
                className="w-full py-3 bg-amber-500 text-neutral-950 font-medium text-xs uppercase tracking-widest rounded hover:bg-amber-400"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className={`border-t py-12 transition-colors ${
        isDark ? 'border-neutral-800 bg-neutral-950 text-neutral-400' : 'border-stone-200 bg-stone-100 text-stone-600'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-xs">
          <div>
            <p className="font-serif text-sm tracking-widest uppercase font-semibold text-stone-900 dark:text-white">
              Rob Forlani
            </p>
            <p className="mt-1">© {new Date().getFullYear()} Rob Forlani. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
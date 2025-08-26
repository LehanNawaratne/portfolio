export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">Under Construction <span role="img" aria-label="construction">🚧</span></h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">I’m working on something amazing! Stay tuned.</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a
            href="https://github.com/LehanNawaratne"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 px-6 py-3 rounded-lg bg-white shadow hover:bg-gray-100 hover:text-black text-gray-800 font-medium flex items-center gap-2 border border-gray-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.804 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/lehan-nawaratne"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 px-6 py-3 rounded-lg bg-white shadow hover:bg-blue-100 hover:text-blue-700 text-gray-800 font-medium flex items-center gap-2 border border-gray-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.845-1.563 3.042 0 3.604 2.004 3.604 4.609v5.587z"/></svg>
            LinkedIn
          </a>
          <a
            href="mailto:lehanxp@gmail.com"
            className="transition-colors duration-200 px-6 py-3 rounded-lg bg-white shadow hover:bg-green-100 hover:text-green-700 text-gray-800 font-medium flex items-center gap-2 border border-gray-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 13.065l-11.99-7.065v14c0 1.104.896 2 2 2h19.99c1.104 0 2-.896 2-2v-14l-11.99 7.065zm11.99-9.065c0-1.104-.896-2-2-2h-19.99c-1.104 0-2 .896-2 2v.217l12 7.083 11.99-7.083v-.217z"/></svg>
            Email
          </a>
        </div>
      </div>
    </div>
  );
}

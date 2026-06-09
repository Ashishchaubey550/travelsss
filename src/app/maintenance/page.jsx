export default function Maintenance() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 font-sans p-6 relative overflow-hidden">
            {/* Ambient luxury glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#e9c349] rounded-full mix-blend-screen filter blur-[150px] opacity-10 animate-pulse"></div>

            <div className="max-w-3xl w-full bg-slate-900/60 backdrop-blur-2xl border border-slate-800 rounded-3xl p-10 md:p-16 shadow-[0_0_50px_rgba(0,0,0,0.5)] text-center relative z-10">
                <div className="flex justify-center mb-8">
                    <div className="relative">
                        {/* Golden rings */}
                        <div className="absolute inset-0 border border-[#e9c349] rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] opacity-20"></div>
                        <div className="absolute inset-[-10px] border border-[#e9c349] rounded-full animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite] opacity-10"></div>

                        <div className="relative bg-slate-950 border border-[#e9c349]/30 p-6 rounded-full shadow-[0_0_30px_rgba(233,195,73,0.15)] flex items-center justify-center text-[#e9c349]">
                            <span className="material-symbols-outlined text-5xl">handyman</span>
                        </div>
                    </div>
                </div>

                <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-[#e9c349] mb-6 tracking-wide uppercase">
                    Curating Perfection
                </h1>

                <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#e9c349] to-transparent mx-auto mb-8"></div>

                <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-light">
                    Our luxury travel portal is currently undergoing scheduled enhancements to elevate your bespoke experience. We shall return shortly with an even more refined journey.
                </p>
            </div>

            {/* Subtle decorative corners */}
            <div className="absolute top-0 left-0 w-32 h-32 border-t border-l border-[#e9c349]/20 m-8 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-[#e9c349]/20 m-8 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 border-b border-l border-[#e9c349]/20 m-8 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 border-b border-r border-[#e9c349]/20 m-8 pointer-events-none"></div>
        </div>
    )
}
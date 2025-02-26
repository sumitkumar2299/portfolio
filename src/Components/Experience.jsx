export default function Experience() {
    const timeline = [
      {
        year: "2025-Present",
        role: "Full Stack Developer",
        company: "Freelancer"
      },
      // Add more timeline items
    ];
  
    return (
      <section id="about" className="py-20 bg-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-300 mb-12">Experience</h2>
          
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 h-full w-0.5 bg-slate-700" />
            
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-16 mb-12">
                <div className="absolute left-0 w-10 h-10 rounded-full bg-emerald-400 flex items-center justify-center">
                  <span className="text-slate-900 font-bold">{item.year.split('-')[0]}</span>
                </div>
                <h3 className="text-xl text-slate-300 font-bold mb-2">
                  {item.role}
                </h3>
                <p className="text-slate-450">{item.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
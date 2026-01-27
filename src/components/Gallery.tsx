import { MapPin, Camera } from 'lucide-react';

export default function Gallery() {
  const projects = [
    { 
      id: 1, 
      title: 'System Boiler Upgrade', 
      location: 'Worcester', 
      img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop' 
    },
    { 
      id: 2, 
      title: 'Luxury Bathroom Radiators', 
      location: 'Malvern', 
      img: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop' 
    },
    { 
      id: 3, 
      title: 'Tight Space Installation', 
      location: 'Droitwich', 
      img: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=800&auto=format&fit=crop' 
    },
    { 
      id: 4, 
      title: 'Commercial Pipework', 
      location: 'Redditch', 
      img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop' 
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#005C9E] px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wide mb-4">
            <Camera size={14} /> Recent Projects
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Quality Workmanship</h2>
          <p className="mt-2 text-lg text-gray-600">We take pride in neat pipework and tidy installations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="group relative rounded-2xl overflow-hidden shadow-lg h-80 border border-gray-100 cursor-pointer">
              {/* Image */}
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              {/* Text */}
              <div className="absolute bottom-0 left-0 p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-1 text-blue-300 text-xs font-bold uppercase tracking-wider mb-2">
                  <MapPin size={12} /> {project.location}
                </div>
                <h3 className="font-bold text-xl leading-tight">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
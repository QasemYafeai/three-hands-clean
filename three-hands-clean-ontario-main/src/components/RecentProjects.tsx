import React, { useState } from "react";

// ===== EDIT THIS DATA WITH YOUR PROJECTS =====
const projects = [
  {
    title: "Downtown Apartment Clean & Repair",
    cover: "/lovable-uploads/unit1.7.jpg",
    images: [
      {
        src: "/lovable-uploads/unit1.2.jpg",
        label: "Before",
        desc: "Bedroom before: Clothes and garbage everywhere, cluttered surfaces, and no usable space."
      },
      {
        src: "/lovable-uploads/unit1.6.jpg",
        label: "After",
        desc: "After deep cleaning: Trash removed, floor mopped, everything organized and ready for new tenants."
      },
      {
        src: "/lovable-uploads/unit1.4.jpg",
        label: "Before",
        desc: "Exposed electrical wiring and broken light fixture—a safety hazard for anyone in the room."
      },
      {
        src: "/lovable-uploads/unit1.5.jpg",
        label: "After",
        desc: "Brand new ceiling light fixture safely installed and working perfectly."
      },
      {
        src: "/lovable-uploads/unit1.10.jpg",
        label: "Before",
        desc: "Unfinished wall repairs and dirty floor—a sign of long-term neglect."
      },
      {
        src: "/lovable-uploads/unit1clean3.jpg",
        label: "After",
        desc: "After: Patch repairs finished, walls smoothed, and all surfaces cleaned up."
      },
      {
        src: "/lovable-uploads/unit1.11.jpg",
        label: "Before",
        desc: "Garbage, broken furniture, and debris everywhere. Unsafe and unsanitary living conditions."
      },
      {
        src: "/lovable-uploads/unit1clean.jpg",
        label: "After",
        desc: "After: Everything removed, mopped, and ready for a fresh start. The transformation is complete."
      }
    ],
    description:
      "A full transformation: deep cleaning, decluttering, repair of light fixtures, and a fresh paint job. The unit went from unlivable to move-in ready in two days!",
  },
  // Add more projects here!
  
 {
  title: "Unit Turnover & Reno",
  cover: "/lovable-uploads/unit2clean.jpg", // Use a great 'after' shot as the card cover
  images: [
    {
      src: "/lovable-uploads/unit2.3.jpg",
      label: "Before",
      desc: "Living area before: Old appliances, dark flooring, and visible stains on the ceiling. Needed a full gut and refresh."
    },
    {
      src: "/lovable-uploads/unit2.2clean.jpg",
      label: "After",
      desc: "After: New flooring installed, freshly painted walls and ceiling, and spotless overall. Ready for a new tenant."
    },
    {
      src: "/lovable-uploads/unit2.jpg",
      label: "Before",
      desc: "Bathroom before: Broken, dirty, and outdated—bad smells and stained surfaces throughout."
    },
    {
      src: "/lovable-uploads/unit2.4.jpg",
      label: "Before",
      desc: "Bedroom before: Full of renovation debris and dust. Surfaces needed deep cleaning and prepping for paint."
    },
    {
      src: "/lovable-uploads/unit2.2.jpg",
      label: "Before",
      desc: "Kitchen and hallway before: Flooring damaged, cabinets dirty, and overall very neglected."
    },
    {
      src: "/lovable-uploads/unit2.2clean.jpg",
      label: "After",
      desc: "After: Floors refinished, walls and ceilings painted, cabinets cleaned and repaired, lighting updated."
    },
    
    {
      src: "/lovable-uploads/unit2.4clean.jpg",
      label: "After",
      desc: "After: All debris removed, new paint job, trim cleaned, and floors scrubbed for a fresh, move-in ready look."
    }
  ],
  description:
    "We completely turned this neglected apartment into a bright, modern space—deep cleaned, painted, repaired, and made ready for move-in. Full service: floors, kitchen, bath, and more.",
}

];

const RecentProjects = () => {
  const [open, setOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const openModal = (project) => {
    setCurrentProject(project);
    setCurrentImage(0);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setCurrentProject(null);
    setCurrentImage(0);
  };

  const nextImage = () => {
    setCurrentImage((i) =>
      i + 1 < currentProject.images.length ? i + 1 : 0
    );
  };

  const prevImage = () => {
    setCurrentImage((i) =>
      i - 1 >= 0 ? i - 1 : currentProject.images.length - 1
    );
  };

  return (
    <section id="recent-projects" className="py-24 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-gray-900 mb-8 text-center">
          Recent Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition p-6 cursor-pointer"
              onClick={() => openModal(project)}
            >
              <img
                src={project.cover}
                alt={project.title}
                className="rounded-xl h-56 w-full object-cover mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <span className="text-blue-600 font-medium underline">
                View Project
              </span>
            </div>
          ))}
        </div>

        {/* MODAL GALLERY */}
        {open && currentProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 transition-all">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl p-8 relative flex flex-col items-center animate-fade-in">
              <button
                onClick={closeModal}
                className="absolute top-5 right-6 text-3xl font-bold text-gray-500 hover:text-red-500"
                aria-label="Close gallery"
              >
                &times;
              </button>
              <div className="flex items-center w-full justify-center mb-4">
                <button
                  onClick={prevImage}
                  className="text-4xl text-gray-400 hover:text-blue-600 px-3"
                  aria-label="Previous photo"
                >
                  &#8592;
                </button>
                <img
                  src={currentProject.images[currentImage].src}
                  alt={currentProject.images[currentImage].label}
                  className="rounded-2xl object-contain mx-6"
                  style={{
                    maxWidth: "600px",
                    maxHeight: "70vh",
                    width: "100%",
                    boxShadow: "0 8px 40px rgba(0,0,0,0.15)",
                  }}
                />
                <button
                  onClick={nextImage}
                  className="text-4xl text-gray-400 hover:text-blue-600 px-3"
                  aria-label="Next photo"
                >
                  &#8594;
                </button>
              </div>
              <div className="w-full mt-4 text-center">
                <div className="text-lg font-semibold mb-1">
                  {currentProject.images[currentImage].label} {currentImage + 1}
                  /{currentProject.images.length}
                </div>
                <div className="text-gray-600 mb-3 text-base min-h-[36px]">
                  {currentProject.images[currentImage].desc}
                </div>
                <div className="text-gray-400 text-sm italic">
                  {currentProject.title}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default RecentProjects;

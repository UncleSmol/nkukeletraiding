import React from "react";

const Gallery = () => {
  // Array of image objects with their paths and alt text
  const galleryImages = [
    {
      src: "/src/assets/miningAndEquipmentHire.jpeg",
      alt: "Mining and Equipment Hire Services",
      category: "Equipment",
    },
    {
      src: "/src/assets/mobileToiletServices1.jpeg",
      alt: "Mobile Toilet Services - Image 1",
      category: "Sanitation",
    },
    {
      src: "/src/assets/mobileToiletServices2.jpeg",
      alt: "Mobile Toilet Services - Image 2",
      category: "Sanitation",
    },
    {
      src: "/src/assets/mobileToiletServices3.jpeg",
      alt: "Mobile Toilet Services - Image 3",
      category: "Sanitation",
    },
    {
      src: "/src/assets/mobileToiletServices4.jpeg",
      alt: "Mobile Toilet Services - Image 4",
      category: "Sanitation",
    },
    {
      src: "/src/assets/transportationServices.jpeg",
      alt: "Transportation Services",
      category: "Transportation",
    },
    // {
    //   src: "/src/assets/desktopLogo.png",
    //   alt: "Nkukele Desktop Logo",
    //   category: "Brand",
    // },
    // {
    //   src: "/src/assets/mobileLogo.png",
    //   alt: "Nkukele Mobile Logo",
    //   category: "Brand",
    // },
    // {
    //   src: "/src/assets/mobileLogo.jpeg",
    //   alt: "Nkukele Mobile Logo JPEG",
    //   category: "Brand",
    // },
  ];

  // Group images by category for better organization
  const imagesByCategory = galleryImages.reduce((acc, image) => {
    if (!acc[image.category]) {
      acc[image.category] = [];
    }
    acc[image.category].push(image);
    return acc;
  }, {});

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-[60px]">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Nkukele Gallery
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Capturing our team's work and services in action
        </p>
      </div>

      {/* Gallery by Categories */}
      {Object.entries(imagesByCategory).map(([category, images]) => (
        <section key={category} className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 pb-2 border-b-2 border-gray-200">
            {category}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 aspect-[4/3]"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback if image fails to load
                    e.target.style.display = "none";
                  }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm text-center font-medium">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Fallback if no categories exist */}
      {galleryImages.length > 0 &&
        Object.keys(imagesByCategory).length === 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 aspect-[4/3]"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm text-center font-medium">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      {/* Empty state */}
      {galleryImages.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-500">
            No images available in the gallery.
          </p>
        </div>
      )}
    </div>
  );
};

export default Gallery;

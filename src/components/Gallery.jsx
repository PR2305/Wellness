import React from "react";

const Gallery = () => {
  const gallery = [
    "/yoga1.avif",
    "/img3.jpg",
    "/gym2.jpeg",
    "/nuts.jpeg",
    "/food5.avif",
    "/grains.avif",
    "/gym.avif",
    "/supplements.avif",
    
  ];
  return (
    <section className="gallery">
      <h1>Our Main Services</h1>
      <div className="images">
        <div>
          {gallery.slice(0, 3).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
        <div>
          {gallery.slice(3, 6).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
        <div>
          {gallery.slice(6, 9).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

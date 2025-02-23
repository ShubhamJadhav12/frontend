import React from 'react';

const Home = () => {
  return (
    <div>
      {/* Main Image Banner */}
      <img 
        src="/main.jpg" 
        className="img-fluid w-100 pt-1" 
        alt="Delicious Recipes" 
        style={{ width: "100%", height: "600px", objectFit: "cover", borderRadius: "10px" }} 
      />

      {/* Recipe Cards Section */}
      <div className="row row-cols-1 row-cols-md-2 g-4 m-2 mt-4">
        {[
          { 
            src: "/mahar..jpg", 
            title: "Maharashtrian", 
            text: "This authentic Maharashtrian recipe offers a burst of bold flavors with aromatic spices, fresh ingredients, and traditional cooking techniques. From spicy curries to savory snacks, it delivers a delicious taste of Maharashtra’s rich culinary heritage." 
          },
          { 
            src: "/punjabi.jpg", 
            title: "Punjabi", 
            text: "This authentic Punjabi recipe bursts with rich flavors, featuring aromatic spices, creamy textures, and hearty ingredients. From buttery curries to flavorful breads, it offers a delicious taste of Punjab’s vibrant and satisfying culinary traditions." 
          },
          { 
            src: "/south.jpg", 
            title: "South Indian", 
            text: "This authentic South Indian recipe delights with bold flavors, aromatic spices, and fresh ingredients. From crispy dosas to spicy sambar, it offers a perfect balance of taste and tradition, making every meal truly satisfying." 
          },
          { 
            src: "/rajashthan.jpg", 
            title: "Rajasthani", 
            text: "This authentic Rajasthani recipe showcases rich flavors, aromatic spices, and traditional cooking techniques. From spicy curries to delicious sweets, it offers a royal taste of Rajasthan’s vibrant culinary heritage, making every bite truly satisfying." 
          }
        ].map((item, index) => (
          <div className="col" key={index}>
            <div className="card shadow-lg h-100" style={{ borderRadius: '15px' }}>
              <img 
                src={item.src} 
                className="card-img-top" 
                alt={item.title} 
                style={{ height: "250px", objectFit: "cover", borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }} 
              />
              <div className="card-body">
                <h5 className="card-title text-center" style={{ fontWeight: 'bold' }}>{item.title}</h5>
                <p className="card-text" style={{ textAlign: 'justify' }}>{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

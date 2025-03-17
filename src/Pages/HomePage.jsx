import "../Styles/homepage.css"
import React, { useState, useEffect } from "react";
import { FaShoppingCart, FaHeart, FaSearch } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { PiTruckLight } from "react-icons/pi";
import { CiCreditCard1 } from "react-icons/ci";
import { GiBank } from "react-icons/gi";
import { TbClock24 } from "react-icons/tb";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../Component/Header";






const testimonials = [
  {
    text: "This product has completely changed my life. The quality is amazing, and the customer support is outstanding!",
    image: "src/assets/testimonial.webp",
    name: "John Doe",
    stack: "Software Engineer",
  },
  {
    text: "I love how easy it is to use this platform. It has saved me so much time and effort. Highly recommended!",
    image: "src/assets/Before and After_ Transforming Your LinkedIn Profile with AI Headshots.jpeg",
    name: "Emily Smith",
    stack: "Product Designer",
  },
  {
    text: "The best investment I have ever made. Their service is top-notch, and I couldn't be happier with the results!",
    image: "src/assets/741a7101-87c6-410f-b24e-e0f84d8528da.jpeg",
    name: "Michael Brown",
    stack: "Business Owner",
  },
];

const images9 = [
  { url: "src/assets/whitewoman.jpg" },
  { url: "src/assets/whiteboy.webp" },
  { url: "src/assets/whiteredwoman.webp" },
  { url: "src/assets/whitekorean.webp" },
  { url: "src/assets/whitewoman.jpg" },
  { url: "src/assets/whiteboy.webp" },
  { url: "src/assets/whiteredwoman.webp" },
  { url: "src/assets/whitekorean.webp" },
  { url: "src/assets/whitewoman.jpg" },
  { url: "src/assets/whiteboy.webp" },
  { url: "src/assets/whitewoman.jpg" },
  { url: "src/assets/whitewoman.jpg" },
];

const youLikeImages = [
  { url: "src/assets/curlyiron.webp" },
  { url: "src/assets/handcream.webp" },
  { url: "src/assets/latest6.jpg.webp" },
  { url: "src/assets/wristwatchitems.webp" },
  { url: "src/assets/mywebimage.jpg" },
  { url: "src/assets/curlyiron.webp" },
  { url: "src/assets/handcream.webp" },
  { url: "src/assets/latest6.jpg.webp" },
  { url: "src/assets/wristwatchitems.webp" },
  { url: "src/assets/curlyiron.webp" },
  { url: "src/assets/handcream.webp" },
  { url: "src/assets/latest6.jpg.webp" },
];


const HomePage = () => {

  const [currentCarouselIndex2, setCurrentCarouselIndex2] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextCarouselSlide2();
    }, 8000);
    return () => clearInterval(interval);
  }, [currentCarouselIndex2]);

  const prevCarouselSlide2 = () => {
    setCurrentCarouselIndex2((prevIndex) =>
      prevIndex === 0 ? Math.ceil(youLikeImages.length / 4) - 1 : prevIndex - 1
    );
  };

  const nextCarouselSlide2 = () => {
    setCurrentCarouselIndex2((prevIndex) =>
      prevIndex === Math.ceil(youLikeImages.length / 4) - 1 ? 0 : prevIndex + 1
    );
  };

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const incrementTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const decrementTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };


// State for trending carousel
const [currentTrendingIndex, setCurrentTrendingIndex] = useState(0);
const trendingPages = Math.ceil(images9.length / 4);

const trendingPrevSlide = () => {
  setCurrentTrendingIndex((prev) =>
    prev === 0 ? trendingPages - 1 : prev - 1
  );
};

const trendingNextSlide = () => {
  setCurrentTrendingIndex((prev) =>
    prev === trendingPages - 1 ? 0 : prev + 1
  );
};

const images = [
   {
    url: "src/assets/h1_hero1.jpg",
    align: "right",
  },
  {
    url: "src/assets/h1_hero2.jpg",
    align: "left",
  },
 
];


useEffect(() => {
    setTimeout(() => {
      document.querySelector(".slide-up").style.opacity = "1";
    }, 100);
  }, []);
  

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

   

  return (
    <>
   <Header />
    <div className="HomeWrapper">
           <div>
      <nav className="navbar">
        <p>Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer <span className="spam">Shop Now</span></p>
      </nav>

      <section
        className="hero-section"
        style={{ backgroundImage: `url(${images[currentIndex].url})` }}
      >
       
        <div className={`text-container ${images[currentIndex].align}`}>
          <h2 className="fade-in h2">Fashion Sale</h2>
          <h1 className="slide-up h1" color="red">Minimal Menz Style</h1>
          <p className="zoom-in p">
            Consectetur adipisicing  elit. Laborum fuga incidunt <br />
             laboriosam voluptas iure, delectus <br />dignissimos facilis
               neque nulla earum.
          </p>
          <button className="btn-slide">Shop Now</button>
        </div>

            </section>
    </div>
    <div className="product-categories">
      <div className="categories-wrapper">
        {/* Men's Fashion */}
        <div className="category-box men">
          <div className="text-container1">
            <h1>Men’s Fashion</h1>
            <p className="shop-now">Shop Now</p>
          </div>
        </div>

        {/* Women's Fashion */}
        <div className="category-box women">
          <div className="text-container1">
            <h1>Women’s Fashion</h1>
            <p className="shop-now">Shop Now</p>
          </div>
        </div>

        {/* Baby's Fashion */}
        <div className="category-box baby">
          <div className="text-container1">
            <h1>Baby’s Fashion</h1>
            <p className="shop-now">Shop Now</p>
          </div>
        </div>
      </div>
    </div>
    <div className="carousel9-section">
  {/* Header Section */}
  <div className="carousel9-header">
    <h2>Trending This Week</h2>
    <div className="category9-links">
      <a href="#">Men</a>
      <a href="#">Women</a>
      <a href="#">Baby</a>
      <a href="#">Favorites</a>
    </div>
  </div>
  
  {/* Gray Separator Line */}
  <div className="separator9-line"></div>
    
    
  {/* Carousel */}
  <div className="carousel9-container">
    <button className="nav-button left-btn" onClick={trendingPrevSlide}>❮</button>
    {/* <button className="nav9-button left9-btn" onClick={trendingPrevSlide}>❮</button> */}
    
    <div className="carousel9">
      {images9
        .slice(currentTrendingIndex * 4, currentTrendingIndex * 4 + 4)
        .map((image, index) => (
          <div key={index} className="slide9">
            {/* Product Image */}
            <div className="image9-container">
              <img src={image.url} alt={`Slide ${index + 1}`}/>
              {/* Hover Box */}
              <div className="hover9-box">
                <div className="icon9-container">
                  <FaShoppingCart className="icon9" />
                </div>
                <div className="icon9-container">
                  <FaHeart className="icon9" />
                </div>
                <div className="icon9-container">
                  <FaSearch className="icon9" />
                </div>
              </div>
            </div>
            {/* Product Name & Price */}
            <div className="product9-details">
              <h2 className="product9-title">Cashmere Tank + Bag</h2>
              <p className="price9">
                $98.00 <span className="old9-price">$120.00</span>
              </p>
            </div>
          </div>
        ))}
    </div>
    {/* <button className="nav9-button right9-btn" onClick={trendingNextSlide}>❯</button> */}
    <button className="nav-button right-btn" onClick={trendingNextSlide}>❯</button>
  </div>
</div>
<div className="testimony-container">
    <h2 className="testimony-header">Customer Testimonial</h2>
    {/* <p className="testimony-subtext">What our customers are saying</p> */}

    <div className="testimony-wrapper">
      <button className="nav-button left-btn" onClick={decrementTestimonial}>
        <FaChevronLeft />
      </button>

      <div className="testimony-content">
        <p className="testimony-text slide">
          {testimonials[currentTestimonialIndex].text}
        </p>
        <div className="testimony-profile slide">
          <img
            src={testimonials[currentTestimonialIndex].image}
            alt={testimonials[currentTestimonialIndex].name}
            className="profile-image"
          />
          <div>
            <h3 className="profile-name">
              {testimonials[currentTestimonialIndex].name}
            </h3>
            <p className="profile-stack">
              {testimonials[currentTestimonialIndex].stack}
            </p>
          </div>
        </div>
      </div>

      <button className="nav-button right-btn" onClick={incrementTestimonial}>
        <FaChevronRight />
      </button>
    </div>
  </div>
  <div className="carousel9-section">
      <div className="carousel9-header">
        <h2>You May Like</h2>
        <div className="category9-links">
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Baby</a>
          <a href="#">Favorites</a>
        </div>
      </div>
      
      {/* Gray Separator Line */}
      <div className="separator9-line"></div>

      {/* Carousel */}
      <div className="carousel9-container">
        {/* <button className="nav9-button left9-btn" onClick={prevCarouselSlide2}>❮</button> */}
        <button className="nav-button left-btn" onClick={prevCarouselSlide2}>❮</button>
        <div className="carousel9">
          {youLikeImages
            .slice(currentCarouselIndex2 * 4, currentCarouselIndex2 * 4 + 4)
            .map((image, index) => (
              <div key={index} className="slide9">
                {/* Product Image */}
                <div className="image9-container">
                  <img src={image.url} alt={`Slide ${index + 1}`} />
                  {/* Hover Box */}
                  <div className="hover9-box">
                    <div className="icon9-container">
                      <FaShoppingCart className="icon9" />
                    </div>
                    <div className="icon9-container">
                      <FaHeart className="icon9" />
                    </div>
                    <div className="icon9-container">
                      <FaSearch className="icon9" />
                    </div>
                  </div>
                </div>
                
                <div className="product9-details">
                  <h2 className="product9-title">Cashmere Tank + Bag</h2>
                  <p className="price9">
                    $98.00 <span className="old9-price">$120.00</span>
                  </p>
                </div>
              </div>
            ))}
        </div>
        <button className="nav-button right-btn" onClick={nextCarouselSlide2}>❯</button>
        {/* <button className="nav9-button right9-btn" onClick={nextCarouselSlide2}>❯</button> */}
      </div>
    </div>
      <div className="LatestNews">
        <div className="Latestnewswrapper">
       <div className="latestnewsimgandtext">
        <div className="Latestnewsimghlder">
          <img src="src/assets/cokebottle.webp" alt="" className="latestnewsImage" />
        </div>
        <div className="latestNewsletter">

        <p>Fashion Tips</p>
        <h3>What Curling Irons Are The Best Ones</h3>
        <p>Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..</p>
        <h5>Read More</h5>
        </div>
       </div>
       <div className="latestnewsimgandtext">
        <div className="Latestnewsimghlder">
          <img src="src/assets/clothepieces.webp" alt=""  className="latestnewsImage" />
        </div>
        <div className="latestNewsletter">

        <p>Fashion Tips</p>
        <h3>Vogue's Ultimate Guide To Autumn/ Winter 2019 Shoes</h3>
        <p>Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..</p>
        <h5>Read More</h5>
        </div>
       </div>
       <div className="latestnewsimgandtext">
        <div className="Latestnewsimghlder">
          <img src="src/assets/mayimoisturebottle.webp" alt="" className="latestnewsImage" />
        </div>
        <div className="latestNewsletter">
        <p>Fashion Tips</p>
        <h3>What Curling Irons Are The Best Ones</h3>
        <p>Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..</p>
        <h5>Read More</h5>
        </div>
       </div>
       </div>
      </div>
      <div className="Mainbody">
      <div className="Wrap1er">
         <div className="downicon">
            <div className="iconhld1"><PiTruckLight /></div>
            
            <h3>
            Fast & Free Delivery
            </h3>
            <p>
            Free delivery on all orders   
            </p>
          </div>
         <div className="downicon woman">
            <div className="iconhld1"><CiCreditCard1 /></div>
            <h3>
            Secure Payment
            </h3>
            <p>

            Free delivery on all orders
            </p>
         </div>
         <div className="downicon man">
            <div className="iconhld1"><GiBank /></div>
            <h3>
            Money Back Guarantee
            </h3>
            <p>

            Free delivery on all orders 
            </p>
         </div>
         <div className="downicon">
            <div className="iconhld1"><TbClock24 /></div>
            <h3>
            Online Support
            </h3>
            <p>

            Free delivery on all orders 
            </p>
         </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default HomePage;
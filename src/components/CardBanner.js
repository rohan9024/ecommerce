import React, { Component } from "react";
import Slider from "react-slick";


class CardBanner extends Component {
  render() {
    const { data } = this.props;

    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      swipeToSlide: true,
      autoplay:true,
      autoplaySpeed:3000,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      },
      responsive: [
        {
          breakpoint: 1190,
          settings: {
            slidesToShow: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
  };
    return (
      <div style={{marginTop:25}}>
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index} style={{marginTop:20}}>
              <div className=" w-[90%] h-[350px] mr-[20px] mt-[20px] mb-[20px] relative rounded-[20px] overflow-hidden shadow-md transition-transform duration-300 hover:scale-110 hover:shadow-lg cursor-pointer" style={{marginLeft:10}}>

              <img
                src={item.image}
                
                alt={`Item ${index + 1}`}
                className="w-[100%] h-[100%] object-cover rounded-t-2xl"
                />            
                <div className="w-[100%] top-[7%] text-left left-[10px] text-black bg-blue-gray-200 flex absolute z-10 flex-col p-[10px] space-y-2 backdrop-blur-2xl rounded-2xl text-lg opacity-75 font-sans">{item.title}</div>
                <div className="w-[100%] top-[24%] text-left left-[10px] text-black text-2xl bg-blue-gray-200 flex absolute z-10 flex-col p-[10px] space-y-2 backdrop-blur-2xl rounded-2xl  opacity-75 font-sans ">{item.description}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default CardBanner;

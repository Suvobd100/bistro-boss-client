import SectionTitle from "../../../../assets/components/SectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// rating
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

// Double quotes Icons
import doubleQuotes from "../../../../assets/icon/double-quotes.png";

// import required modules
import { Navigation } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Testimonials = () => {
  // data fetch
  // Fetch all foods data
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/reviews`
        );
        return data;
      } catch (err) {
        console.error("API Error:", err);
        throw err; // Let React Query handle the error
      }
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  const reviews = data;

  return (
    <section className="my-20">
      <SectionTitle
        subHeading={"What our client say"}
        heading={"Testimonials"}
      />
      {/* swiper */}
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className=" flex flex-col items-center m-16">
              <Rating style={{ maxWidth: 250 }} value={review.rating} />
              {/* double qouts */}
              <span className="w-24 font-extrabold transform rotate-[180deg] mt-2">
                <img src={doubleQuotes} alt="" />
              </span>
              {/* <span>
                <svg
                  width="46.154659"
                  height="84.615234"
                  viewBox="0 0 46.1547 84.6152"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <desc>Created with Pixso.</desc>
                  <defs />
                  <path
                    id="Vector"
                    d="M34.61 38.46L21.15 38.46C19.55 38.46 18.18 37.9 17.06 36.77C15.94 35.65 15.38 34.29 15.38 32.69L15.38 30.77C15.38 26.52 16.88 22.89 19.89 19.89C22.89 16.88 26.52 15.38 30.76 15.38L34.61 15.38C35.65 15.38 36.55 15 37.31 14.24C38.08 13.48 38.46 12.58 38.46 11.53L38.46 3.84C38.46 2.8 38.08 1.9 37.31 1.14C36.55 0.38 35.65 0 34.61 0L30.76 0C26.6 0 22.62 0.81 18.84 2.43C15.05 4.05 11.77 6.25 9.01 9.01C6.24 11.77 4.05 15.05 2.43 18.84C0.81 22.62 0 26.6 0 30.76L0 73.07C0 76.28 1.12 79 3.36 81.25C5.6 83.49 8.33 84.61 11.53 84.61L34.61 84.61C37.82 84.61 40.54 83.49 42.78 81.25C45.03 79 46.15 76.28 46.15 73.07L46.15 50C46.15 46.79 45.03 44.07 42.78 41.82C40.54 39.58 37.81 38.46 34.61 38.46Z"
                    fill="#151515"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                </svg>
              </span> */}
              <p className="p-12">{review.details}</p>

              <h3 className="text-2xl text-orange-400 text-center">
                {review.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;

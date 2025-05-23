import { Parallax } from "react-parallax";
const Cover = ({ bgImg, title }) => {
  // console.log(bgImg);
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={bgImg}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div
        className="hero h-[700px]"
        // style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-4xl bg-slate-700 opacity-50 p-4">
            <h1 className="mb-5 text-5xl font-bold uppercase ">{title}</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;

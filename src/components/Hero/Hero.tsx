import {AiOutlineArrowRight} from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Hero(){
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
    return (
      <section className="relative bg-[url(https://res.cloudinary.com/dq57zsx0w/image/upload/v1684190340/ecommerce/ovkgvbmoaoryyepxmrxw.svg)] bg-cover bg-center bg-no-repeat h-[700px]">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Summer Collection
              <strong className="block font-extrabold text-sky-400">
                Effortlessly Chic.
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
              Discover a curated selection of timeless and versatile clothing
              pieces that exude elegance and sophistication
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center items-center">
              <Link
                to="/products"
                onClick={scrollToTop}
                className="block w-full rounded bg-black px-12 py-3 text-sm font-medium text-white shadow hover:bg-slate-800 focus:outline-none focus:ring active:bg-slate-800 sm:w-auto"
              >
                Shop it now!
                <AiOutlineArrowRight className="inline-block ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Hero;
import React from "react";

const Jumbotron = ({ title, description, paragraph, images }) => {
  return (
    <section className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto relative bg-teal-100 dark:bg-teal-950">
      <div
        className="lg:grid lg:grid-cols-12 lg:gap-2 lg:items-center border rounded-3xl p-4 md:p-12 z-10 relative w-full overflow-hidden  object-center object-cover  "
        style={{ backgroundImage: `url(${images.background})` }}
      >
        <div
          className="absolute inset-0 w-full h-full z-0 grid place-content-center bg-cover place-items-center"
          style={{ backgroundImage: `url(${images.overlay})` }}
        ></div>

        <div className="lg:col-span-7 z-10">
          <div className="grid grid-cols-12 gap-2 sm:gap-6 items-center">
            {images.column1 && (
              <div className="col-span-3">
                <img
                  className="rounded-xl"
                  src={images.column1}
                  alt="Image Description"
                />
              </div>
            )}
            {images.column2 && (
              <div className="col-span-3">
                <img
                  className="rounded-xl"
                  src={images.column2}
                  alt="Image Description"
                />
              </div>
            )}
            {images.column3 && (
              <div className="col-span-5">
                <img
                  className="rounded-xl"
                  src={images.column3}
                  alt="Image Description"
                />
              </div>
            )}
          </div>
        </div>

        <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2 md:space-y-4">
              <h5 className="uppercase font-bold">{title ?? ''}</h5>
              <h2 className="font-bold text-3xl lg:text-4xl text-pink-500 dark:text-white">
                {description ?? ''}
              </h2>
              <p className="text-gray-500">{paragraph ?? ''}</p>
            </div>

            <ul role="list" className="space-y-2 sm:space-y-4">
              {/* List items */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;

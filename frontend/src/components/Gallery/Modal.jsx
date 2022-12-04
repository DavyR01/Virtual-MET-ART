import React from "react";

function Modal({ showModal, item }) {
  return (
    <div>
      {/* modal showed on click through useState in Item */}
      {showModal ? (
        <>
          <div className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none">
            {/* fullscreen and close */}
            <div className="fullscreen bg-primary svg-modal outline-none focus:outline-none lg:items-center lg:justify-center lg:h-screen lg:overflow-hidden">
              {/* image and detaila showed with API */}

              <div className="lg:flex pt-20 lg:items-center lg:px-12">
                <a href={item.primaryImage} target="_blank" rel="noreferrer">
                  <img
                    className="rounded-md w-fit p-12 lg:max-h-fit lg:max-w-screen-xl"
                    src={item.primaryImageSmall}
                    alt={item.title}
                  />
                </a>
                <div className="p-12 lg:flex-auto lg:align-middle">
                  <h2 className="text-2xl lg:text-3xl text-center my-6 text-background">
                    Title : {item.title}
                  </h2>
                  <h3 className="italic text-2xl text-center mx-2 text-background">
                    Artist : {item.artistDisplayName}
                  </h3>
                  <h4 className="my-4 mt-20 text-background text-xl md:text-2xl leading-relaxed>">
                    Date : {item.objectEndDate}
                  </h4>
                  <h4 className="my-4 text-background text-xl md:text-2xl leading-relaxed">
                    Culture : {item.culture}
                  </h4>
                  <h4 className="my-4 text-background text-xl md:text-2xl leading-relaxed>">
                    Department : {item.department}
                  </h4>
                  <h4 className="my-4 text-background text-xl md:text-2xl leading-relaxed>">
                    Category : {item.objectName}
                  </h4>
                  <h4 className="my-4 text-background text-xl md:text-2xl leading-relaxed>">
                    Technique : {item.medium}
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black" />
        </>
      ) : null}
    </div>
  );
}

export default Modal;

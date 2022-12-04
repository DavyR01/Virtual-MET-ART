import React from "react";

function PageNotFound() {
  return (
    <div className="bg-primary h-[90vh] flex flex-col justify-center items-center">
      <h1 className="text-background pb-2 lg:pt-24 text-2xl lg:text-4xl">
        404 Page not found
      </h1>
      <h2 className="text-background pb-10 text-xl lg:text-2xl">
        Ops, looks like you're lost...
      </h2>
      <img
        className="px-6 md:px-0 w-96 lg:w-5/12"
        src="./media/page-not-found.jpg"
        alt="Page not found"
      />
    </div>
  );
}

export default PageNotFound;

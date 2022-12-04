import React, { useEffect, useState } from "react";
import Modal from "./Modal";

function Item({ id, setShowArrow }) {
  const [item, setItem] = useState({});
  const [showModal, setShowModal] = React.useState(false);

  useEffect(() => {
    // fetch a single ID
    fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
    )
      .then((response) => response.json())
      .then((result) => setItem(result))
      .catch((err) => console.error(err));
  }, []);

  const handleShowModal = () => {
    setShowModal(!showModal);
    setShowArrow(showModal);
  };

  if (item.primaryImageSmall)
    // Fill the item component with the object's info ONLY if the object has an image
    return (
      <div className="w-80 m-auto text-center pb-10 sm:w-9/12 lg:grid lg:grid-flow-col lg:w-fit lg:items-center lg:gap-x-6 lg:px-16 galery-shadow">
        {/* image showing modal component on click */}
        <button type="button" onClick={() => handleShowModal()}>
          {" "}
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            item={item}
          />
          <div className="itemImagesDiv">
            <img
              className="itemImages"
              src={item.primaryImageSmall}
              alt={item.title}
            />{" "}
          </div>
        </button>
        <h2 className="text-3xl text-center whitespace-normal my-6 text-background">
          {item.title} <br />
          <span className="italic text-xl text-center my-8">
            {item.artistDisplayName}
          </span>
        </h2>
      </div>
    );
}

export default Item;

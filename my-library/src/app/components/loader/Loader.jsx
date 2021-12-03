import React from "react";

// HOOKS
import PuffLoader from "react-spinners/PuffLoader";

//STYLES
import { LoaderContainerStyle } from "./loader.styled";

function Loader() {
  return (
    <LoaderContainerStyle>
      <PuffLoader color={"white"} loading={true} size={60} />
    </LoaderContainerStyle>
  );
}

export default Loader;

import React from "react";
import Spinner from "../spinner/spinner.container";
const WithSpinner = (WrappedComponent) =>
 ({ isLoading, ...otherProps }) => 
     isLoading ? (
             <Spinner />
    ) : (
      <WrappedComponent {...otherProps} />
    );


export default WithSpinner;

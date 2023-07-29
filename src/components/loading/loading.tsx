import React from "react";
import { FunctionComponent } from "react";
import {LoadingContainer} from './loading.styled'
import BarLoader from "react-spinners/BarLoader";

 
const Loading: FunctionComponent = () => {
    return (
      <LoadingContainer>
        <BarLoader width={80} color="#212529" />
      </LoadingContainer>
    );
}
 
export default Loading;
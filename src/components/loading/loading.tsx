import React from "react";
import { FunctionComponent } from "react";
import {LoadingContainer} from './loading.styled'
import SyncLoader from "react-spinners/SyncLoader";

 
const Loading: FunctionComponent = () => {
    return (
        <LoadingContainer>
            <SyncLoader size={32}/>
        </LoadingContainer>
    );
}
 
export default Loading;
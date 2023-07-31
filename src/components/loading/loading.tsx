import { FunctionComponent } from "react";
import {LoadingContainer} from './loading.styled'
import BarLoader from "react-spinners/BarLoader";

interface MessageProp {
  messager?:string
}

const Loading: FunctionComponent<MessageProp> = ({messager}) => {
    return (
      <LoadingContainer>
        {messager && <p>{messager}</p>}
        <BarLoader width={80} color="#212529" />
      </LoadingContainer>
    );
}
 
export default Loading;
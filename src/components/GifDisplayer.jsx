import LoginContext from "../../utils/LoginContext";

const GifDisplayer = ({gif,gifAlt,width}) => {

  return (
    <div>
      <img src={gif} alt={gifAlt} width={width ||" 400px"} />
    </div>
  );
};

export default GifDisplayer;
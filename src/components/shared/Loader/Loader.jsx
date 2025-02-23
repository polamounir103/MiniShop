import { HashLoader } from "react-spinners";
import "./loader.css"
const Loader = () => {
    return (
      <div className="loader">
        <HashLoader
          color="#7629e9"
         
          loading
          size={85}
        />
      </div>
    );
}

export default Loader;
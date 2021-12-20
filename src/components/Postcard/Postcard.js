import Atropos from "atropos/react/atropos-react.esm";
import "atropos/atropos.css";

import "./Postcard.css";

import sky from  "../../assets/sky.png";
import mountain1 from  "../../assets/mountains1.png";
import mountain2 from  "../../assets/mountains2.png";
import text from  "../../assets/text1.png";
import text2 from  "../../assets/text2.png";
import leaf from  "../../assets/leaf.png";

const Postcard = () => (
  <div className="mt-10 md:mt-0 px-8 md:px-10 lg:px-14 lg:pr-4 mx-auto max-w-sm md:max-w-lg lg:max-w-3xl">
    <Atropos
      className="atropos-banner"
      highlight={false}
    >
      <img
        className="atropos-banner-spacer"
        src={sky}
        alt="background 1"
      />
      <img
        data-atropos-offset="-4.5"
        src={sky}
        alt="background 2"
      />
      <img
        data-atropos-offset="-3"
        src={mountain2}
        alt="mountain"
      />
      <img
        data-atropos-offset="-1"
        src={mountain1}
        alt="mountain"
      />
      <img
        data-atropos-offset="0"
        src={leaf}
        alt="text"
      />
      <img
        data-atropos-offset="1"
        src={text2}
        alt="text"
      />
      <img
        data-atropos-offset="2"
        src={text}
        alt="text"
      />
    </Atropos>
  </div>
);

export default Postcard;

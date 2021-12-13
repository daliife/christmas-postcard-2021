import Atropos from "atropos/react/atropos-react.esm";
import "atropos/atropos.css";

import sky from  "../../assets/sky.png";
import mountain1 from  "../../assets/mountains1.png";
import mountain2 from  "../../assets/mountains2.png";
import text from  "../../assets/text1.png";
import text2 from  "../../assets/text2.png";

import "./Postcard.css";

const Postcard = () => (
  <div className="p-8 lg:px-14 mx-auto">
    <Atropos
      className="atropos-banner"
      highlight={false}
      // onEnter={() => console.log("enter")}
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
        data-atropos-offset="1"
        src={text2}
        alt="text"
      />
      <img
        data-atropos-offset="2"
        src={text}
        alt="text"
      />
      {/* <img
        className="atropos-banner-spacer"
        src="https://raw.githubusercontent.com/nolimits4web/atropos/master/playground/react/i/atropos-bg.svg"
        alt=""
      />
      <img
        data-atropos-offset="-4.5"
        src="https://raw.githubusercontent.com/nolimits4web/atropos/master/playground/react/i/atropos-bg.svg"
        alt=""
      />
      <img
        data-atropos-offset="-2.5"
        src="https://raw.githubusercontent.com/nolimits4web/atropos/master/playground/react/i/atropos-mountains.svg"
        alt=""
      />
      <img
        data-atropos-offset="0"
        src="https://raw.githubusercontent.com/nolimits4web/atropos/master/playground/react/i/atropos-forest-back.svg"
        alt=""
      />
      <img
        data-atropos-offset="2"
        src="https://raw.githubusercontent.com/nolimits4web/atropos/master/playground/react/i/atropos-forest-mid.svg"
        alt=""
      />
      <img
        data-atropos-offset="4"
        src="https://raw.githubusercontent.com/nolimits4web/atropos/master/playground/react/i/atropos-forest-front.svg"
        alt=""
      />
      <img
        data-atropos-offset="5"
        src="https://raw.githubusercontent.com/nolimits4web/atropos/master/playground/react/i/atropos-logo-en.svg"
        alt=""
      /> */}
    </Atropos>
  </div>
);

export default Postcard;

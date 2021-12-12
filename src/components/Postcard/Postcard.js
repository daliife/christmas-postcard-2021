import Atropos from "atropos/react/atropos-react.esm";
import "atropos/atropos.css";

import blurredBackground from  "../../assets/1.jpeg";
import leaf from  "../../assets/2.png";
import text from  "../../assets/3.png";

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
        src={blurredBackground}
        alt=""
      />
      <img
        data-atropos-offset="-4.5"
        src={blurredBackground}
        alt=""
      />
      <img
        data-atropos-offset="0"
        src={leaf}
        alt=""
      />
      <img
        data-atropos-offset="2"
        src={text}
        alt=""
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

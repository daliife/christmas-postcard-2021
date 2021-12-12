import song from "../../assets/El_rustec_villancet.mp3";

const Song = () => (
  <div
    id="song-container"
    className="fixed bottom-4 lg:bottom-10 left-1/2 transform -translate-x-1/2"
  >
    <p className="hidden lg:flex text-white text-center my-3 font-semibold text-sm items-center justify-center animate-bounce">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-2"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
      Música del poema
    </p>
    <audio controls>
      <source src={song} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  </div>
);

export default Song;

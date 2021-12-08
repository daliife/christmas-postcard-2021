import song from '../../assets/El_rustec_villancet.mp3';

const Song = () => (
    <div id="song-container" className="absolute right-5 bottom-5">
        <audio controls autoplay>
            <source src={song} type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
    </div>
);

export default Song;

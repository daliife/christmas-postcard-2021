import song from '../../assets/El_rustec_villancet.mp3';

const Song = () => (
    <div id="song-container" className="fixed bottom-4 lg:bottom-10 left-1/2 transform -translate-x-1/2">
        <p className="hidden lg:block text-white text-center my-3 font-semibold text-sm">Música del poema</p>
        <audio controls>
            <source src={song} type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
    </div>
);

export default Song;

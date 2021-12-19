import "./Poem.css";

const Poem = () => (
  <div id="poem-container" className="mt-0 md:mx-8 text-white">
    <h3 className="font-semibold text-4xl mt-4 mb-5 text-primary color-primary">El rústec villancet</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <p className="text-md font-light leading-8">
        Una estrella cau al prat, <br />
        una flor s’ha esbadellat, <br />
        tot belant juga el ramat <br />
        amb la rossa macaruia. <br /><br />
        Al·leluia, cor lassat! <br />
        Al·leluia, món gebrat! <br />
        Al·leluia, Déu és nat! <br />
        Al·leluia! <br /><br />
        Cap herbei no té tremor, <br />
        ni cap deu fa el ploricó; <br />
        no hi ha fred ni tenebror, <br />
        que un pas d’ala se n’ho duia.
      </p>
      <p className="text-md font-light leading-8">
        Al·leluia en tot racó! <br />
        Al·leluia en tot dolor! <br />
        Al·leluia al pecador! <br />
        Al·leluia! <br /><br />
        A Betlem van els infants <br />
        i els amics dant-se les mans <br />
        i els promesos i els germans <br />
        i la vella en sa capuia. <br /><br />
        Al·leluia, vianants! <br />
        Al·leluia en nostres cants! <br />
        Al·leluia, catalans! <br />
        Al·leluia!
      </p>
    </div>
    <p className="w-full text-right my-4 italic text-base font-semibold">
      Josep Carner - Lluís M. Millet
    </p>
  </div>
);

export default Poem;

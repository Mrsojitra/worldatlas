import countryFacts from "../api/countryData.json";

const About = () => {
  return (
    <section className="section-about container">
      <h2 className="container-title">
        Here are the Interesting Facts
        <br />
        we’re proud of
      </h2>

      <div className="gradient-cards">
        {countryFacts.map((country) => {
          const { id, countryName, capital, population, interestingFact } =
            country;
          return (
            <div key={id} className="card">
              <div className="container-card bg-white-box">
                <p className="card-title">{countryName}</p>
                <p>
                  <span className="card-description">Capital:</span>
                 <span className="card-detail">{capital}</span> 
                </p>
                <p>
                  <span className="card-description">Population:</span>
                  <span className="card-detail">{population}</span>
                </p>
                <p>
                  <span className="card-description">InterestingFact:</span>
                 <span className="card-detail">{interestingFact}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default About;

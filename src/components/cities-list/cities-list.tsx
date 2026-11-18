type CitiesListProps = {
  cities: string[];
  currentCity: string;
  onCityClick: (city: string) => void;
};

function CitiesList({ cities, currentCity, onCityClick }: CitiesListProps) {
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li className="locations__item" key={city}>
          <a
            className={`locations__item-link tabs__item${city === currentCity ? ' tabs__item--active' : ''}`}
            href="#"
            onClick={(event) => {
              event.preventDefault();
              onCityClick(city);
            }}
          >
            <span>{city}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default CitiesList;

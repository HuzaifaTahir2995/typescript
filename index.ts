interface City {
    city: string;
    country: string;
    population: number;
}

class CityDirectory {
    private cityLib: City[];

    constructor() {
        const cityLibFromLocalStorage = localStorage.getItem('cityLib');
        this.cityLib = cityLibFromLocalStorage ? JSON.parse(cityLibFromLocalStorage) : [];
    }

    addCity(city: string, country: string, population: number) {
        const newCity: City = {
            city,
            country,
            population
        };
        this.cityLib.push(newCity);
        localStorage.setItem('cityLib', JSON.stringify(this.cityLib));
    }

    getcityLib(): City[] {
        return this.cityLib;
    }

    filtercityLib(searchValue: string): City[] {
        if (!searchValue) return this.cityLib;
        searchValue = searchValue.toLowerCase();
        return this.cityLib.filter(city =>
            city.city.toLowerCase().includes(searchValue) || city.country.toLowerCase().includes(searchValue)
        );
    }
}

const cityDirectory = new CityDirectory();

function rendercityLib(cityLib: City[]) {
    const cityList = document.getElementById('city-list');
    if (!cityList) return;
    
    cityList.innerHTML = '';
    cityLib.forEach(city => {
        const listItem = document.createElement('li');
        listItem.textContent = `${city.city}, ${city.country}, Population: ${city.population}`;
        cityList.appendChild(listItem);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    rendercityLib(cityDirectory.getcityLib());

    const form = document.getElementById('city-form') as HTMLFormElement;
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const cityName = (document.getElementById('city-name') as HTMLInputElement).value;
        const country = (document.getElementById('country') as HTMLInputElement).value;
        const population = parseInt((document.getElementById('population') as HTMLInputElement).value);
        cityDirectory.addCity(cityName, country, population);
        renderFilteredCityLib();
        form.reset();
    });

    const searchInput = document.getElementById('search') as HTMLInputElement;
    searchInput.addEventListener('input', () => {
        renderFilteredCityLib();
    });
    
    function renderFilteredCityLib() {
        const searchValue = searchInput.value.trim().toLowerCase();
        rendercityLib(cityDirectory.filtercityLib(searchValue));
    }
});


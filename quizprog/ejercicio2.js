const = cities = [
    {
        population: 1,
        name: 'juanchito'
    },
    {
        population: 2,
        name: 'cali'
    },
    {
        population: 3,
        name: 'barranquilla'
    },
    {
        population: 4,
        name: 'jumndi'
    },
    {
        population: 5,
        name: 'mexico' 

        }   ] ;

        function filtercitybypopulation(cities) {
            cities.forEach((city) => {
                if (city.people > 5) {
                    console.log(city.name)
                }
            })
        }

        


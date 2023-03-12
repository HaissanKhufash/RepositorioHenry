function creatingCity(){
    class City{
        constructor(sq_m, center, major, commercial_places, people_ind){
            try{
                if (typeof sq_m === 'number') this.sq_m = sq_m; else throw new TypeError(`${sq_m} isn't a number`);

                if (typeof center === 'string') this.center = center; else throw new TypeError(`${center} isn't a center`);

                if (typeof major === 'string') this.major = major; else throw new TypeError(`${major} isn't a string`);

                if (typeof commercial_places === 'object') this.commercial_places = commercial_places; else throw new TypeError(`${commercial_places} isn't an array`);

                if (typeof people_ind === 'number') this.people_ind = people_ind; else throw new TypeError(`${people_ind} isn't a number`);

            }catch(err){
                console.log(err);
            }
        }

        set setSquareMeters(sq_m){
            if (typeof sq_m === 'number') this.sq_m = sq_m; else throw new TypeError(`${sq_m} isn't a number`);
            this.sq_m = sq_m;
        }
        
        set setCenter(center){
            if (typeof center === 'string') this.center = center; else throw new TypeError(`${center} isn't a center`);
            this.center = center;
        }

        set setMajor(major){
            if (typeof major === 'string') this.major = major; else throw new TypeError(`${major} isn't a string`);
            this.major = major;
        }

        set setCommercialPlaces(commercial_places){
            if (typeof commercial_places === 'object') this.commercial_places = commercial_places; else throw new TypeError(`${commercial_places} isn't an array`);
            this.commercial_places = commercial_places;
        }

        set setPeopleIndex(people_ind){
            if (typeof people_ind === 'number') this.people_ind = people_ind; else throw new TypeError(`${people_ind} isn't a number`);
            this.people_ind = people_ind;
        }

        get getSquareMeters(){
            return this.sq_m;
        }
        
        get getCenter(){
            return this.center;
        }

        get getMajor(){
            return this.major;
        }

        get getCommercialPlaces(){
            return this.commercial_places;
        }

        get getPeopleIndex(){
            return this.people_ind;
        }
    }
    return City;
}

function createPittsburgh(){
    const City = creatingCity();
    const Pittsburgh = new City(1500, 'Pittburgh Center', 'Rogelous White', ['Kansy Cheef', 'Pittss Bones', 
    'Hard Rock - Pittsburgh'], 500198);
    return Pittsburgh;
}

function createMiddlesbourgh(){
    const City = creatingCity();
    const Middlesbourgh = new City(149920, 'Middlesbourgh Center', 'Carlton Smith', ['Carff', 'Proxy Winds', 
    'Hard Rock - Middlesbourgh'], 4009382);
    return Middlesbourgh;
}

// Initializing first city...
const Pittsburgh = createPittsburgh();
Pittsburgh.calculateAvg = function(){
    return (this.getSquareMeters / this.getPeopleIndex);
}
console.log(Pittsburgh.calculateAvg());

// Initializing second city...
const Middlesbourgh = createMiddlesbourgh();
Middlesbourgh.setCenter = 'Cleveland Centre';
console.log(Pittsburgh.calculateAvg.apply(Middlesbourgh)); // Applying the method done by Pittsburgh on Middlesbourgh

module.exports = {
    creatingCity
}
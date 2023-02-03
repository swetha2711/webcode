// dom manipulation
function addElements(countries) {
    const countriesDiv = document.querySelector("#countries")
    countries.forEach((country) => {
        const countryNode = document.createElement('div');
        const textNode = document.createTextNode(`${country.country_id} ${country.probability} `);
        countryNode.appendChild(textNode);
        countriesDiv.appendChild(countryNode);
    });
}

function exception(msg) {
    const countriesDiv = document.querySelector("#countries");
    const textNode = document.createTextNode(msg);
    countriesDiv.appendChild(textNode);
}

async function onSearchClick() {
    try {
        document.querySelector("#countries").innerHTML = '';
        const name = document.querySelector("#searchBar").value;
        if (name) {
            const countryData = await fetch(`https://api.nationalize.io?name=${name}`).then(resp => resp.json());
            addElements(countryData.country.slice(0,2));
        } else {
           exception('Please give a name')
        }
    } catch(err) {
        exception("Error Occured")
    }
}

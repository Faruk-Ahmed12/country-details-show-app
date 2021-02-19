const searchContries = () => {
    const searchText = document.getElementById('search-field').value;
    const url = `https://restcountries.eu/rest/v2/name/${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayContries(data))
        .catch(e => alert('sorry'))
}

const displayContries = countryVal => {
    let countryDiv = '';
    if (countryVal) {
        countryVal.forEach(countryName => {
            countryDiv += `<div class="col-6">
                            <div class="contries-content card">
                                <div class="card-body">
                                <img src="${countryName.flag}" alt="" class="w-50">
                                    <h2>Country Name:- <span>${countryName.name}</span></h2>
                                    <h4>Capital : <span>${countryName.capital}</span></h4>
                                    <h5>Region : <span>${countryName.region}</span></h5>
                                    <h5>Area : <span>${countryName.area}</span></h5>

                                    <h5>NativeName : <span>${countryName.languages[0].nativeName}</span></h5>
                                    <h5>Canency : <span>${countryName.currencies[0].code}</span></h5>
                                </div>
                            </div>
                        </div>`
        })
    }
    else {
        alert('sorry')
    }
    document.getElementById('row').innerHTML = countryDiv;
}

document.getElementById('search-field')
    .addEventListener("keypress", function (event) {
        if (event.key === 'Enter') {
            document.getElementById('searchBtn').click();
        }
    });


function showLocation(event) {
    zipcode = parseInt(text_area.value)
    const proxy = 'http://cors-anywhere.herokuapp.com/';
    apiUrl = `http://api.zippopotam.us/IN/${zipcode}`;
    fetch(apiUrl)
        .then(response => {
            if (response.status === 200) {
                cross_icon.style.display = "none";
                check_icon.style.display = "block";
                return response.json();
            } else {
                cross_icon.style.display = "block";
                check_icon.style.display = "none";
                output.innerHTML = `<div class="alert alert-danger" role="alert">
            Invalid zipcode ! Check again...
          </div>`
            }
        })
        .then(json => {
            output_content = `<ul>
<li>Country : India</li>
<li>Country abreviation : IN</li>
<li>Places :
    <ul>`
            let country = json.country;
            let country_abb = json["country abbreviation"];
            // console.log(json)
            json.places.forEach(element => {
                place_name = element["place name"];
                longitude = element["longitude"];
                latitude = element["latitude"];
                state = element["state"];
                state_abb = element["state abbreviation"];
                output_content = output_content + `<li>Place name : ${place_name}
                <ul>
                    <li>Longitute : ${longitude}</li>
                    <li>Latitude : ${latitude}</li>
                    <li>State : ${state}</li>
                    <li>State abbreviation : ${state_abb}</li>
                </ul>
            </li>`
            });
            output_content = output_content + `</ul>
            </li>
            </ul>`;
            output.innerHTML = output_content;
        })
        .catch(err => console.error(err));
}
document.querySelector("#button-select").addEventListener('click', showLocation);
// console.log(button_select);
text_area = document.querySelector("#text-area");
cross_icon = document.querySelector(".custom2")
check_icon = document.querySelector(".custom1")
output = document.querySelector(".output")

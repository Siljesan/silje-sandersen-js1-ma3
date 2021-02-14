//Question 2

const baseUrl = 'https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating';

async function getUrl(url){
    try {
        const response = await fetch(url);
        const jsonResult = await response.json();
        console.log(jsonResult);

        document.querySelector('.loading').classList.add('hide');

        jsonResult.results.forEach(element => {
            //I could not figure out how to display only the first eight results.
            console.log(element);
            document.querySelector('main').innerHTML += `
            <div class="card">
              <h2>${element.name}</h2>
              <p>Rating: ${element.rating}</p>
              <p>Num of tags: ${element.tags.length}</p>
            </div>`;
        });
    } catch (error){
        document.querySelector('.alert').innerHTML += showAlertTouser(
			'An error occured',
			'danger'
		);
    } finally {
        setTimeout(function(event) {
            document.querySelector('.alert').innerHTML = ``
        }, 3000);
    };
};

getUrl(baseUrl);
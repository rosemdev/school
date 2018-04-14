let btn = document.querySelector('.btn');
let infoContainer = document.querySelector('.animal-info');
let pageCount = 1;


    btn.addEventListener('click', function () {

        let request = new XMLHttpRequest();

        request.open('GET', 'https://learnwebcode.github.io/json-example/animals-'+ pageCount +'.json');
        request.onload = function () {
            let responseData = JSON.parse(request.responseText);
            render(responseData);
        };

        request.send();
        pageCount++;

        if(pageCount > 3) {
            btn.classList.add('hidden');
        }

    });


    function render(data) {
        let htmlString = '';

        for (let i = 0 ; i <data.length; i++ ) {
            htmlString += `<p>${data[i].name} is a ${data[i].species} that likes to eat`;

            for (let ii = 0; ii < data[i].foods.likes.length; ii++){
                if(ii === 0) {
                    htmlString += data[i].foods.likes[ii];
                } else {
                    htmlString += ' and ' + data[i].foods.likes[ii];

                }
            }

            htmlString += ' and dislikes ';

            for (let ii = 0; ii < data[i].foods.dislikes.length; ii++){
                if(ii === 0) {
                    htmlString += data[i].foods.dislikes[ii];
                } else {
                    htmlString += ' and ' + data[i].foods.dislikes[ii];

                }
            }

            htmlString += '.</p>';



        }

        infoContainer.insertAdjacentHTML('beforeend', htmlString);
    }






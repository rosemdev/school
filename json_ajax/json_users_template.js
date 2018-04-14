let tableInfo = document.querySelector('.user-table');
let response;
let popup =document.querySelector('.popup');


let requestJson = new XMLHttpRequest();

requestJson.open('GET', 'https://jsonplaceholder.typicode.com/users');

requestJson.onload = function () {
    response = JSON.parse(requestJson.responseText);
    renderTable(response);
    console.log(response[0]);
};

requestJson.send();


function renderTable(data) {

    let renderedTable = '';

        renderedTable = `
         <table>
               <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>username</th>
                        <th>email</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    ${data.map(userTemplateRow).join('')}
                </tbody>         
        </table>
         `;



    tableInfo.insertAdjacentHTML('beforeend', renderedTable);

}


function userTemplateRow(user) {


    return ` 
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td><a class="btb load-user">load info</a></td>
            </tr>
`

}


tableInfo.addEventListener('click', function (event) {

    let infoBtn = event.target.closest('a');


    if (infoBtn) {
        let row = event.target.closest('tr');
        let rows = row.parentElement.children;

        for (let i = 0; i < rows.length - 1; i++ ) {

            if (rows[i] === row) {
                userPopup(response[i]);
            }


        }
    }
});



function userPopup (user) {
    let popup = '';
    popup = `<div class="popup">
                <div class="popup-header"><h4>${user.name}</h4>
                <div class="cross"><span class="line"></span><span class="line"></span></div>
                </div>
                <div class="photo"><img src="https://avatars1.githubusercontent.com/u/13917198?s=460&v=4"></div>
                    <div class="data">
                        <p><strong>ID:</strong><span>${user.id}</span></p>
                        <p><strong>Last name:</strong><span>${user.username}</span></p>
                        <p><strong>Address:</strong></p>
                            <ul>
                                <li><strong>city:</strong><span>${user.address.city}</span></li>
                                <li><strong>street:</strong><span>${user.address.street}</span></li>
                                <li><strong>zip:</strong><span>${user.address.zipcode}</span></li>
                            </ul>
                        <p><strong>Email:</strong><span>${user.email}</span></p>
                        <p><strong>Phone:</strong><span>${user.phone}</span></p>
                        <p><strong>Website:</strong><span>${user.website}</span></p>
                    </div>
                </div>`;

    document.querySelector('.popup-container').insertAdjacentHTML('beforeend', popup);


    if (popup) {
        document.addEventListener('click', function (event) {
                popup.style.display = 'none';

            if (event.target.closest('.popup')) {
            }
        });
    }



}







    


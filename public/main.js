let div = document.getElementById('data-div');
document.getElementById('search-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const companyname = document.getElementById('search').value;
    axios.get(`/post-search/${companyname}`)
        .then((response) => {
            if (response.data.length > 0) {
                const latestData = response.data[response.data.length - 1];
                const companyName = latestData.companyname;
                const overallRating = latestData.overallrating;

                const resultDiv = document.createElement('div');
                resultDiv.className = "mt-3 alert alert-primary";
                resultDiv.role = "alert";
                resultDiv.textContent = `Company Name: ${companyName}, Overall Rating: ${overallRating}`;
                div.appendChild(resultDiv);

                for (let i = 0; i < response.data.length; i++) {
                    const data = response.data[i];
                    const cardContainer = document.createElement('div');
                    cardContainer.className = "card-container";

                    cardContainer.innerHTML = `
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Company Name: ${data.companyname}</h5>
                                <p class="card-text">Pros: ${data.pros}</p>
                                <p class="card-text">Cons: ${data.cons}</p>
                                <p class="card-text">Rating: ${data.rating}</p>
                            </div>
                        </div>
                    `;

                    div.appendChild(cardContainer);
                }
            } else {
                div.textContent = "No data found";
            }
        })
        .catch(function (error) {
            console.error(error);
        });
});

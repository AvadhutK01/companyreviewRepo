const fetchData = async () => {
    try {
        const div = document.getElementById('data-div');
        const companyName = document.getElementById('search').value;
        const response = await axios.get(`/post-search/${companyName}`);

        if (response.data.length > 0) {
            const latestData = response.data[response.data.length - 1];
            const companyName = latestData.companyname;
            const overallRating = latestData.overallrating;
            const resultDiv = document.createElement('div');
            div.textContent = "";
            resultDiv.className = "mt-3 alert alert-primary";
            resultDiv.role = "alert";
            resultDiv.innerHTML = `<h4>Company Name: ${companyName}</h4><p><h5> Overall Rating: ${overallRating}/5</h5></p>`;
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
                            <p class="card-text">Rating: ${data.rating}/5</p>
                        </div>
                    </div>
                `;

                div.appendChild(cardContainer);
            }
        } else {
            div.textContent = "No data found";
        }
    } catch (error) {
        console.error(error);
    }
};

document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault();
    fetchData();
});

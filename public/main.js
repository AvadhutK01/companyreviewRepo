const div = document.getElementById('data-div');
const searchForm = document.getElementById('search-form');

const displayData = (data) => {
    div.textContent = '';

    if (data.length > 0) {
        const latestData = data[data.length - 1];
        const { companyname, overallrating } = latestData;

        const resultDiv = document.createElement('div');
        resultDiv.className = 'mt-3 alert alert-primary';
        resultDiv.role = 'alert';
        resultDiv.innerHTML = `<h4>Company Name: ${companyname}</h4><p><h5> Overall Rating: ${overallrating}/5</h5></p>`;
        div.appendChild(resultDiv);

        data.forEach((item) => {
            const { companyname, pros, cons, rating } = item;

            const cardContainer = document.createElement('div');
            cardContainer.className = 'card-container';

            cardContainer.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Company Name: ${companyname}</h5>
                        <p class="card-text">Pros: ${pros}</p>
                        <p class="card-text">Cons: ${cons}</p>
                        <p class="card-text">Rating: ${rating}/5</p>
                    </div>
                </div>
            `;

            div.appendChild(cardContainer);
        });
    } else {
        div.textContent = 'No data found';
    }
};

const fetchData = async () => {
    try {
        const companyName = document.getElementById('search').value;
        const response = await axios.get(`/post-search/${companyName}`);
        displayData(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        div.textContent = 'Error occurred while fetching data';
    }
};

searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    fetchData();
});

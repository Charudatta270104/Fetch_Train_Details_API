const btn = document.querySelector('#submit');
// const btn=document.getElementsById("submit");
btn.addEventListener('click', async (event) => {
    event.preventDefault();

    const trainNo = document.querySelector('#trainNumber').value;

    console.log(trainNo);
    const url = `<your api link>`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '<your api key>',
            'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        // console.log(result);
        const mainRes = result.data;

        document.querySelector('#liveStatus').innerHTML += `
        <div class="container text-start my-2">
                <h4>${mainRes.notification_date}</h4>
                <h3>${mainRes.train_number}</h3>
                <h3>${mainRes.train_name}</h3>
                <h4>${mainRes.source}</h4>
                <h4>${mainRes.destination}</h4>
                <h4>${mainRes.run_days}</h4>
                <h5 style="color:red">${mainRes.new_message}</h5>
        </div>
            `

    } catch (error) {
        console.error(error);
    }
})

// implement logic of train start by start day
// range from 0-4
// 0 = Day 1
// 1 = 1 Day Ago
// 2 = 2 Day Ago
// 3 = 3 Day Ago
// 4 = 4 Day Ago
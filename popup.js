let makeChart = (AA, A, BBB, BB, B, CCC, CC, C) =>
{
    let ctx = document.getElementById('chart').getContext('2d');

    let myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-'],
            datasets: [{
                label: '# of Votes',
                // data: [AA, A, BBB, BB, B, CCC, CC, C],
                data: [1, 2, 3, 4, 5, 6, 7, 8],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(0, 50, 50, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(0, 50, 50, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

const formatInfo = (info) => {
    let labels = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-'];
    let results = [0, 0, 0, 0, 0, 0, 0, 0, 0]

    for(let i=0; i<info.length; i++){
        for(let j=0; j<labels.length; j++){
            if(info[i] === labels[j]){
                results[j]++;
                break; 
            }
        }
    }

    makeChart(results[0]+results[1], results[2], results[3], results[4], results[5],
                results[6], results[7], results[8], results[9]);

}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if(message.text === 'data'){
        formatInfo(message.info);
    }
});



const buttonClicked = () => { //Sends a message to the content script to tell it to run
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, "execute");
    });
}

buttonClicked(); //Listener to detect when button is clicked











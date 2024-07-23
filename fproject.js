// script.js

document.addEventListener('DOMContentLoaded', () => {
    const consumptionRateCtx = document.getElementById('consumptionRateChart').getContext('2d');
    const awarenessPlatformCtx = document.getElementById('awarenessPlatformChart').getContext('2d');
    const socialMediaPlatformCtx = document.getElementById('socialMediaPlatformChart').getContext('2d');

    // Sample data
    const consumptionRateData = {
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
        datasets: [{
            label: 'Last 6 days',
            data: [12, 19, 3, 5, 2, 3, 7, 6, 4, 5, 6, 8],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    };

    const consumptionRateChart = new Chart(consumptionRateCtx, {
        type: 'bar',
        data: consumptionRateData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const awarenessPlatformData = {
        labels: ['Morning', 'Afternoon', 'Evening'],
        datasets: [{
            label: 'Awareness',
            data: [28, 40, 32],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    };

    const awarenessPlatformChart = new Chart(awarenessPlatformCtx, {
        type: 'doughnut',
        data: awarenessPlatformData
    });

    const socialMediaPlatformData = {
        labels: ['Instagram', 'Facebook', 'YouTube'],
        datasets: [{
            label: 'Social Media Platforms',
            data: [85, 85, 92],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    };

    const socialMediaPlatformChart = new Chart(socialMediaPlatformCtx, {
        type: 'pie',
        data: socialMediaPlatformData
    });
});
// script.js

document.addEventListener('DOMContentLoaded', () => {
    const consumptionRateCtx = document.getElementById('consumptionRateChart').getContext('2d');
    const awarenessPlatformCtx = document.getElementById('awarenessPlatformChart').getContext('2d');
    const socialMediaPlatformCtx = document.getElementById('socialMediaPlatformChart').getContext('2d');

    fetch('https://my-json-server.typicode.com/imon2537/myDatabase/consumptionRate')
        .then(response => response.json())
        .then(data => {
            const labels = data.map(item => item.day);
            const values = data.map(item => item.value);

            new Chart(consumptionRateCtx, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Last 6 days',
                        data: values,
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        });

    fetch('https://my-json-server.typicode.com/imon2537/myDatabase/awarenessPlatform')
        .then(response => response.json())
        .then(data => {
            const labels = data.map(item => item.time);
            const values = data.map(item => item.value);

            new Chart(awarenessPlatformCtx, {
                type: 'doughnut',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Awareness',
                        data: values,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)'
                        ],
                        borderWidth: 1
                    }]
                }
            });
        });

    fetch('https://my-json-server.typicode.com/imon2537/myDatabase/socialMediaPlatform')
        .then(response => response.json())
        .then(data => {
            const labels = data.map(item => item.platform);
            const values = data.map(item => item.value);

            new Chart(socialMediaPlatformCtx, {
                type: 'pie',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Social Media Platforms',
                        data: values,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(75, 192, 192, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(75, 192, 192, 1)'
                        ],
                        borderWidth: 1
                    }]
                }
            });
        });
});

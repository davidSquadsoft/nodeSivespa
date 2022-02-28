var alcoholabel=[], tabacolabel=[] , marihuanalabel=[]
async function dummyCharts(){
    await getDummyData
const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [
            'Alcohol'
            ],
            datasets: [{
                label: 'Consumo Spa en Antioquia',
                data: alcoholabel,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
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
}
dummyCharts()
async function getDummyData(){
    const apiUrl    ='http://localhost:3000/da/resesta'
    const response= await fetch(apiUrl)
    const barChartData= await response.json()
    const alcohol=barChartData.map((x)=>x.cantidad)
    const tabaco=barChartData.map((x)=>x.ACT_SPA_TAB)
    const marihuana=barChartData.map((x)=>x.ACT_SPA_MAR)
    alcoholabel =alcohol
tabacolabel=tabaco
marihuanalabel=marihuana
    console.log(alcohol)
  }
  
  getDummyData()
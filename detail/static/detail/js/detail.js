
/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Search Box ====================================== */
/* Search Box On Click Border and Blur Border Out Functions */
function colorBorder(theInput){
    theInput.style.border = '0.5px solid #1C62B9';
}
function uncolorBorder(theInput){
    theInput.style.border = 'none';
}
/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< END OF Search ================================== */


/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< The Vote Section ================================= */
/* Flags Coloring When Clicked */
let select_nation_1 = document.getElementById('select-nation-1');
let select_nation_2 = document.getElementById('select-nation-2');
let select_nation_3 = document.getElementById('select-nation-3');
let select_nation_4 = document.getElementById('select-nation-4');
let select_nation_5 = document.getElementById('select-nation-5');
let select_nation_6 = document.getElementById('select-nation-6');

function selectNation1(button, pro_name){
    select_nation_1.style.borderBottom = '10px solid tomato';
    select_nation_2.style.borderBottom = '5px solid white';
    select_nation_3.style.borderBottom = '5px solid white';
    select_nation_4.style.borderBottom = '5px solid white';
    select_nation_5.style.borderBottom = '5px solid white';
    select_nation_6.style.borderBottom = '5px solid white';

    // Setting the Input Equal to Pro Name
    document.getElementById('nation-voted-pro-name').value = pro_name;

}
function selectNation2(button, pro_name){
    select_nation_1.style.borderBottom = '5px solid white';
    select_nation_2.style.borderBottom = '10px solid tomato';
    select_nation_3.style.borderBottom = '5px solid white';
    select_nation_4.style.borderBottom = '5px solid white';
    select_nation_5.style.borderBottom = '5px solid white';
    select_nation_6.style.borderBottom = '5px solid white';

    // Setting the Input Equal to Pro Name
    document.getElementById('nation-voted-pro-name').value = pro_name;

}
function selectNation3(button, pro_name){
    select_nation_1.style.borderBottom = '5px solid white';
    select_nation_2.style.borderBottom = '5px solid white';
    select_nation_3.style.borderBottom = '10px solid tomato';
    select_nation_4.style.borderBottom = '5px solid white';
    select_nation_5.style.borderBottom = '5px solid white';
    select_nation_6.style.borderBottom = '5px solid white';

    // Setting the Input Equal to Pro Name
    document.getElementById('nation-voted-pro-name').value = pro_name;

}
function selectNation4(button, pro_name){
    select_nation_1.style.borderBottom = '5px solid white';
    select_nation_2.style.borderBottom = '5px solid white';
    select_nation_3.style.borderBottom = '5px solid white';
    select_nation_4.style.borderBottom = '10px solid tomato';
    select_nation_5.style.borderBottom = '5px solid white';
    select_nation_6.style.borderBottom = '5px solid white';

    // Setting the Input Equal to Pro Name
    document.getElementById('nation-voted-pro-name').value = pro_name;

}
function selectNation5(button, pro_name){
    select_nation_1.style.borderBottom = '5px solid white';
    select_nation_2.style.borderBottom = '5px solid white';
    select_nation_3.style.borderBottom = '5px solid white';
    select_nation_4.style.borderBottom = '5px solid white';
    select_nation_5.style.borderBottom = '10px solid tomato';
    select_nation_6.style.borderBottom = '5px solid white';

    // Setting the Input Equal to Pro Name
    document.getElementById('nation-voted-pro-name').value = pro_name;

}
function selectNation6(button, pro_name){
    select_nation_1.style.borderBottom = '5px solid white';
    select_nation_2.style.borderBottom = '5px solid white';
    select_nation_3.style.borderBottom = '5px solid white';
    select_nation_4.style.borderBottom = '5px solid white';
    select_nation_5.style.borderBottom = '5px solid white';
    select_nation_6.style.borderBottom = '10px solid tomato';

    // Setting the Input Equal to Pro Name
    document.getElementById('nation-voted-pro-name').value = pro_name;
}







/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< The Chart Section ================================= */
/* Pre reserved datas === chartDataSet */
let labels = [];
let datas = [];
Object.entries(chartDataSet).forEach(([key, value]) => {
    labels.push(key)
    datas.push(value);
});
console.log(datas);
/* Pie */
var ctxForPie = document.getElementById('myPie').getContext('2d');
var myChart = new Chart(ctxForPie, {
    type: 'pie',
    data: {
        labels: labels,
        datasets: [{
            label: '# of Votes',
            data: datas,
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
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
/* Bar */
var ctxForBar = document.getElementById('myBar').getContext('2d');
var myChart = new Chart(ctxForBar, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: '# of Votes',
            data: datas,
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
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
/* Polar */
var ctxForPolar = document.getElementById('myPolar').getContext('2d');
var myChart = new Chart(ctxForPolar, {
    type: 'polarArea',
    data: {
        labels: labels,
        datasets: [{
            label: '# of Votes',
            data: datas,
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
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< VOTE NOW BUTTON ====================================== */
function voteSubmission(){
    console.log('() fired!');
    let nation_voted = document.getElementById('nation-voted-pro-name').value;
    $.ajax({
        type: 'POST',
        url: `/detail/${videoPk}/vote/`,
        data: {
            'nation_voted' : nation_voted,
            'csrfmiddlewaretoken': $("input[name='csrfmiddlewaretoken']").val()
        },
        success: function (json) {
            console.log(json);
        }
    });
}
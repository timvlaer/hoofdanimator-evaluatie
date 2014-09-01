function drawTijdensCursusGeleerdGraph(data) {
    var results = [[0, 0, 0],[0, 0, 0],[0, 0, 0],[0, 0, 0],[0, 0, 0],[0, 0, 0]];
    data.forEach(function(object) {
        var bruikbaarScore = object['Bruikbaar'];
        bruikbaarScore && results[parseInt(bruikbaarScore, 10)][0]++;

        var leerrijkScore = object['Leerrijk'];
        leerrijkScore && results[parseInt(leerrijkScore, 10)][1]++;

        var vernieuwendScore = object['Vernieuwend'];
        vernieuwendScore && results[parseInt(vernieuwendScore, 10)][2]++;
    });

    var values = [{
        name: 'Zeker wel',
        data: results[5]
    }, {
        name: 'Best wel',
        data: results[4]
    }, {
        name: 'Bwoa',
        data: results[3]
    }, {
        name: 'Niet echt',
        data: results[2]
    }, {
        name: 'Helemaal niet',
        data: results[1]
    }];

    $('#tijdensCursusGeleerdGraph').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Wat jij tijdens de cursus geleerd hebt, is...'
        },
        xAxis: {
            categories: ['Bruikbaar', 'Leerrijk', 'Vernieuwend'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: null
            },
            labels: {
                overflow: 'justify'
            }
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        series: values,
        credits: {
            enabled: false
        }
    });
}

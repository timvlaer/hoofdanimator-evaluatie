function drawBegeleidingGraph(data) {
    var results = [[0, 0, 0, 0, 0, 0, 0 ,0],[0, 0, 0, 0, 0, 0, 0 ,0],[0, 0, 0, 0, 0, 0, 0 ,0],[0, 0, 0, 0, 0, 0, 0 ,0],[0, 0, 0, 0, 0, 0, 0 ,0],[0, 0, 0, 0, 0, 0, 0 ,0],[0, 0, 0, 0, 0, 0, 0 ,0],[0, 0, 0, 0, 0, 0, 0 ,0]];

    function handleScore(object, key, categoryIdx) {
        var score = object[key];
        score && results[parseInt(score, 10)][categoryIdx]++;
    }

    data.forEach(function(o) {
        handleScore(o, 'Bekwaam', 0);
        handleScore(o, 'Enthousiast', 1);
        handleScore(o, 'Creatief', 2);
        handleScore(o, 'Betrokken', 3);
        handleScore(o, 'Geduldig', 4);
        handleScore(o, 'Zorgzaam', 5);
        handleScore(o, 'Zelfzeker', 6);
        handleScore(o, 'Respectvol', 7);
    });

    var values = [{
        name: 'Zeer goed',
        data: results[5]
    }, {
        name: 'Goed',
        data: results[4]
    }, {
        name: 'Matig',
        data: results[3]
    }, {
        name: 'Slecht',
        data: results[2]
    }, {
        name: 'Zeer slecht',
        data: results[1]
    }];

    $('#begeleidingGraph').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Hoe kwam de begeleiding bij je over?'
        },
        xAxis: {
            categories: ['Bekwaam', 'Enthousiast', 'Creatief', 'Betrokken', 'Geduldig', 'Zorgzaam', 'Zelfzeker', 'Respectvol'],
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

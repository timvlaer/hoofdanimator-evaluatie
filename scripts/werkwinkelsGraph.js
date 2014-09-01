function drawWerkwinkelsGraph(data) {
    var results = [[0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0]];

    function handleScore(object, key, categoryIdx) {
        var score = object[key];
        score && results[parseInt(score, 10)][categoryIdx]++;
    }

    data.forEach(function(o) {
        handleScore(o, 'Crisiscommunicatie', 0);
        handleScore(o, 'Conflicthantering', 1);
        handleScore(o, 'Evalueren', 2);
        handleScore(o, 'Verzekeringen', 3);
        handleScore(o, 'Vergadertechnieken', 4);
        handleScore(o, 'Motivatie & Engagement', 5);
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

    $('#werkwinkelsGraph').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Wat vond je van de werkwinkels?'
        },
        xAxis: {
            categories: ['Crisiscommunicatie', 'Conflicthantering', 'Evalueren', 'Verzekeringen', 'Vergadertechnieken', 'Motivatie & Engagement'],
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

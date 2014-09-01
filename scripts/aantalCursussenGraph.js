function drawAantalCursussenGraph(data) {
    var results = {};
    data.forEach(function(object) {
        var aantalCursusString = object['Hoeveel keer ben je al op cursus van Scouts en Gidsen Vlaanderen geweest?'];
        var aantalCursussen = parseInt(aantalCursusString, 10);
        if(!isNaN(aantalCursussen)) {
           if(!results[aantalCursussen]) {
               results[aantalCursussen] = 0;
           }
           results[aantalCursussen]++;
        }
    });

    console.log(results);

    var values = [];
    for (var k in results) {
        if (data.hasOwnProperty(k)) {
            values.push({name: k + " keer", y: results[k]});
        }
    }

    $('#aantalCursussenGraph').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: 'Hoeveel keer ben je al op cursus van Scouts en Gidsen Vlaanderen geweest?'
        },
        tooltip: {
            pointFormat: '{point.name}: <b>{point.y}</b> ({point.percentage:.1f}%)'
        },
        plotOptions: {
            pie: {
                allowPointSelect: false,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true
                },
                showInLegend: false
            }
        },
        series: [{
            type: 'pie',
            name: 'Heb je al een attest?',
            data: values
        }],
        credits: {
            enabled: false
        }
    });
}

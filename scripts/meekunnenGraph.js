function drawMeekunnenGraph(data) {
    var results = {ja: 0, nee: 0, total: 0};
    data.forEach(function(object) {
        var wistJeTijdig = object['Wist je tijdig dat je mee op cursus kon?'];
        if(wistJeTijdig) {
            if (wistJeTijdig.toLowerCase() == 'ja') {
                results.ja++;
            } else {
                results.nee++;
            }
            results.total++;
        }
    });

    var values = [{name: 'Ja', y: results.ja}, {name: 'Nee', y: results.nee}];

    $('#meekunnenGraph').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: 'Wist je tijdig dat je mee op cursus kon?'
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
            data: values
        }],
        credits: {
            enabled: false
        }
    });
}
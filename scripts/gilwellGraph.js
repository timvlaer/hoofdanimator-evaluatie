function drawGilwellGraph(data) {
    var results = {ja: 0, nee: 0, vanplan: 0, total: 0};
    data.forEach(function(object) {
        if(object['Volgde je al Gilwell?']) {
            if (object['Volgde je al Gilwell?'].toLowerCase() == 'ja') {
                results.ja++;
            } else if (object['Volgde je al Gilwell?'].toLowerCase() == 'nee_wel_van_plan') {
                results.vanplan++;
            } else {
                results.nee++;
            }
            results.total++;
        }
    });

    var gilwellValues = [{name: 'Ja', y: results.ja}, {name: 'Nee', y: results.nee}, {name: 'Nee, maar wel van plan', y: results.vanplan}];

    $('#gilwellGraph').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: 'Volgde je al gilwell?'
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
            name: 'Volgde je al Gilwell?',
            data: gilwellValues
        }],
        credits: {
            enabled: false
        }
    });
}
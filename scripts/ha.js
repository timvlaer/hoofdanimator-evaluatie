$(function () {
    Papa.parse("data/test.csv", {
        download: true,
        delimiter: ";",
        header: true,
        complete: function(results) {
            console.log("Remote file parsed!", results);
            drawGraphics(results.data);
        }
    });

    function drawGraphics(data) {
        drawGilwellGraph(data);
        drawAttestenGraph(data);
        drawAantalCursussenGraph(data);
        drawMeekunnenGraph(data);
        drawNodigeInformatieGraph(data);
        drawTijdensCursusGeleerdGraph(data);
        drawWerkwinkelsGraph(data);
        drawBegeleidingGraph(data);
        renderWaarHebJeVanDeCursusGehoord(data);
    }


});
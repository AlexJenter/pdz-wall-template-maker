// TEXT CHANGE
$('*[id^=txt]').click( function() {
    var oldContent =  $(this).text();
    var newContent = prompt("can i haz " + oldContent + "?", oldContent);
    if ( newContent ==="" ) { newContent = oldContent; }
    $(this).text( newContent );
    if ( $(this).text() ==="" )  { $(this).text(oldContent) }
});

// DROP IMAGE
FileReaderJS.setupDrop(document.body, {
    readAsDefault: "DataURL",
    on: {
        load: function(e, file) {
            var img = new Image();
            $('#img').attr('xlink:href', e.target.result);
            img.src = e.target.result;
        }
    }
});

// COLORZ
$('span').click( function() {
    var c = $(this).css('background-color');
    hexc(c);

    function hexc(colorval) {
        var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        delete(parts[0]);
        for (var i = 1; i <= 3; ++i) {
            parts[i] = parseInt(parts[i]).toString(16);
            if (parts[i].length == 1) parts[i] = '0' + parts[i];
        }
        hexcol = '#' + parts.join('');
    }
    $('#path').css({fill: hexcol});
});

// EXPORT PNG > PDF
$('.fa-download').click( function () {
    svgAsPngUri( $("#svg")[0], {scale: 4.166}, function(uri) {
        var img = uri;
        var doc = new jsPDF();
        doc.addImage(img, 'PNG', 0, 0, 210, 297);
        doc.save('test.pdf');
    });
});

// EXPORT SVG
// $('.fa-download').click( function() {
//     var exportSVG =  $('svg').outerHTML();
//     var blob = new Blob([ exportSVG ], {type: "image/svg+xml"});
//     saveAs(blob, "export.svg");
//     // demoSvgDocument();
//     // console.log( blob );
// });

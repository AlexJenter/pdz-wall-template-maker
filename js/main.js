// TEXT CHANGE
$('#vorname').click( function() {
    var oldContent =  $('#vorname').text();
    var newContent = prompt("can i haz first name?", oldContent);
    if (newContent ==="") { newContent = oldContent; }
    $('#vorname').text( newContent );
    if ($('#vorname').text() ==="")  { $('#vorname').text(oldContent) }
});
$('#name').click( function() {
    var oldContent =  $('#name').text();
    var newContent = prompt("can i haz last name?", oldContent);
    if (newContent ==="") { newContent = oldContent; }
    $('#name').text( newContent );
    if ($('#name').text() ==="")  { $('#name').text(oldContent) }
});
$('#mail').click( function() {
    var oldContent =  $('#mail').text();
    var newContent = prompt("can i haz last name?", oldContent);
    if (newContent ==="") { newContent = oldContent; }
    $('#mail').text( newContent );
    if ($('#mail').text() ==="")  { $('#mail').text(oldContent) }
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

// EXPORT SVG
// $('.fa-download').click( function() {
//     var exportSVG =  $('svg').outerHTML();
//     var blob = new Blob([ exportSVG ], {type: "image/svg+xml"});
//     saveAs(blob, "export.svg");
//     // demoSvgDocument();
//     // console.log( blob );
// });


// EXPORT PNG > PDF
$('.fa-download').click( function () {
    svgAsPngUri( $("#svg")[0], {scale: 4.166}, function(uri) {
        var img = uri;
        var doc = new jsPDF();
        doc.addImage(img, 'PNG', 0, 0, 210, 297);
        doc.save('test.pdf');
    });
});

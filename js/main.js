// LOAD Home SVG
$(document).ready( function() {
    $('.content').load( "../svg/uebersicht.svg" );
});


// Make the whole list item with .help clickable
$(".help").click(function() {
  window.location = $(this).find("#help-link").attr("href");
  return false;
});



// exchange SVG on Click in nac
function switchSVG( el, path ){
    el.click( function() {
        $('.content').load( path, function() {
            assignLabels();
        });
    });
}

switchSVG( $('#Home'),      "../svg/uebersicht.svg");
switchSVG( $('#sp'),        "../svg/forschungsschwerpunkt.svg");
switchSVG( $('#ft'),        "../svg/forschungsthema.svg");
switchSVG( $('#ma'),        "../svg/mitarbeiter.svg");
switchSVG( $('#st'),        "../svg/student.svg");
switchSVG( $('#physical'),  "../svg/amt-physical.svg");
switchSVG( $('#digital'),   "../svg/amt-digital.svg");
switchSVG( $('#teaching'),  "../svg/amt-teaching.svg");
switchSVG( $('#rooms'),     "../svg/amt-rooms.svg");
switchSVG( $('#team'),      "../svg/amt-team.svg");
switchSVG( $('#documents'), "../svg/amt-documents.svg");


// TEXT CHANGE
function textChange( el, alignment, prompt ) {
    if( alignment ===  "middle") {
        el.attr("text-anchor", "middle");
    }
    el.click( function() {
        var newContent = window.prompt( prompt, el.text());
        if ( !newContent ) {
            return;
        }
        $(this).text( newContent );
    });
}


function assignLabels(){
    textChange( $('svg #l-erste'),  "left",   "please enter first line...");
    textChange( $('svg #l-zweite'), "left",   "please enter second line...");
    textChange( $('svg #l-dritte'), "left",   "please enter third line...");
    textChange( $('svg #l-vierte'), "left",   "please enter fourth line...");
    textChange( $('svg #name'),     "middle", "please enter full name...");
    textChange( $('svg #zimmer'),   "middle", "please enter Zimmernummer eingeben...");
    textChange( $('svg #erste'),    "middle", "please enter first line...");
    textChange( $('svg #zweite'),   "middle", "please enter second line...");
    textChange( $('svg #tel'),      "middle", "please enter enter phone number ...", "+41 XX XXX XX XX");
    textChange( $('svg #location'), "middle", "please enter enter room number ...", "LEE O ");
    textChange( $('svg #master'),   "middle", "please enter Funktion...", "Semesterarbeit / MA Thesis");
    textChange( $('svg #semester'), "middle", "please enter Funktion...", "Semesterarbeit / MA Thesis");
    textChange( $('svg #funktion'), "middle", "please enter Funktion...", "job name");
    textChange( $('svg #job'),      "middle", "please enter job...");
}


// DROP IMAGE
function imageChange(){
    FileReaderJS.setupDrop(document.body, {
        readAsDefault: "DataURL",
        on: {
            load: function(e, file) {
                var img = new Image();
                $('svg image').attr('xlink:href', e.target.result);
                img.src = e.target.result;
            }
        }
    });
}

imageChange();


// COLORZ
$('.color').click( function() {
    var fillColor = $(this).css('background-color');
    $('svg #farbfläche').css({fill: fillColor});
});

// PDF generation
$('.saveAsPdf').click( function () {
    svgAsPngUri( $("svg")[0], {scale: 4.166}, function(uri) {
        var img = uri;
        var doc = new jsPDF();

        // position marks for circle cutter
        doc.setLineWidth(0.5);
        doc.line(105, 10, 105, 30);
        doc.line(105, 267, 105, 287);
        doc.line(100, 20, 110, 20);
        doc.line(100, 277, 110, 277);

        // positioning of the generated PNG
        doc.addImage(img, 'PNG', 30, 50, 150, 150);
        doc.save('test.pdf');
    });
});

/*
// EXPORT PNG > PDF
$('.saveAsPdf').click( function () {
    svgAsPngUri( $("svg")[0], {scale: 4.166}, function(uri) {
        var img = uri;
        var doc = new jsPDF();
        doc.addImage(img, 'PNG', 30, 50, 150, 150);
        doc.save('test.pdf');
    });
});
*/

// EXPORT PNG > PDF
// $('.saveAsPdf').click( function () {
//
//     var doc = new jsPDF();
//     svgElementToPdf($("svg")[0],doc,{ x_offset: 25, y_offset: 50 });
//
//     doc.save('test.pdf');
//
//
//
//
//     svgElementToPdf(0,0,0);
// });

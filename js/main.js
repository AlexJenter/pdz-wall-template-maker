// LOAD Home SVG
$(document).ready( function() {
    $('.content').load( "./svg/uebersicht.svg" );
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

switchSVG( $('#Home'),      "./svg/uebersicht.svg");
switchSVG( $('#domain'),    "./svg/domain.svg");
switchSVG( $('#topic'),     "./svg/topic.svg");
switchSVG( $('#staff'),     "./svg/staff.svg");
switchSVG( $('#student'),   "./svg/student.svg");
switchSVG( $('#physical'),  "./svg/job-physical.svg");
switchSVG( $('#digital'),   "./svg/job-digital.svg");
switchSVG( $('#teaching'),  "./svg/job-teaching.svg");
switchSVG( $('#rooms'),     "./svg/job-rooms.svg");
switchSVG( $('#team'),      "./svg/job-team.svg");
switchSVG( $('#documents'), "./svg/job-documents.svg");


// TEXT CHANGE
function textChange( el, alignment, prompt, defaultContent ) {
    if( alignment ===  "middle") {
        el.attr("text-anchor", "middle");
    }
    el.click( function() {
        var newContent = window.prompt( prompt, defaultContent );
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
    textChange( $('svg #zimmer'),   "middle", "please enter room label...");
    textChange( $('svg #erste'),    "middle", "please enter first line...");
    textChange( $('svg #zweite'),   "middle", "please enter second line...");
    textChange( $('svg #tel'),      "middle", "please enter enter phone number ...", "+41 XX XXX XX XX");
    textChange( $('svg #location'), "middle", "please enter enter room number ...", "LEE O ");
    textChange( $('svg #master'),   "middle", "please enter role...", "Master Student / Teaching Assistant");
    textChange( $('svg #semester'), "middle", "please enter assignment...", "Semester Project / Master's Thesis");
    textChange( $('svg #funktion'), "middle", "please enter Funktion...", "job name");
    textChange( $('svg #job'),      "middle", "please enter job...");
}


// DROP IMAGE
(function imageChange(){
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
})();

// imageChange();


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

        // embed fonts (does not help)
        //doc.addFont('Roboto-Black','Roboto Black','normal');
        //doc.setFont('Roboto');

        // position marks for circle cutter
        doc.setLineWidth(0.2);
        doc.ellipse(105, 25, 3, 3);
        doc.line(105, 10, 105, 257);
        doc.line(95, 25, 115, 25);
        doc.line(100, 248, 110, 248);

        // positioning of the generated PNG
        doc.addImage(img, 'PNG', 30, 75, 150, 150);
        doc.save('wall_item.pdf');
    });
});

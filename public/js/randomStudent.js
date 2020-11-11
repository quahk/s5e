// test case for http://stackoverflow.com/questions/9464555/js-jquery-animated-random-name-picker

var students = [
  { Student_ID: 0, Student_Name: '1' },
  { Student_ID: 1, Student_Name: '2' },
  { Student_ID: 2, Student_Name: '3' },
  { Student_ID: 3, Student_Name: '4' },
  { Student_ID: 4, Student_Name: '5' },
  { Student_ID: 5, Student_Name: '6' },
  { Student_ID: 6, Student_Name: '7' },
  { Student_ID: 7, Student_Name: '8' },
  { Student_ID: 8, Student_Name: '9' },
  { Student_ID: 9, Student_Name: '10' },
  { Student_ID: 10, Student_Name: '11' },
  { Student_ID: 11, Student_Name: '12' },
  { Student_ID: 12, Student_Name: '13' },
  { Student_ID: 13, Student_Name: '14' },
  { Student_ID: 14, Student_Name: '15' },
  { Student_ID: 15, Student_Name: '16' },
  { Student_ID: 16, Student_Name: '17' },
  { Student_ID: 17, Student_Name: '18' },
  { Student_ID: 18, Student_Name: '19' },
  { Student_ID: 19, Student_Name: '20' },
  { Student_ID: 20, Student_Name: '21' },
  { Student_ID: 21, Student_Name: '22' },
  //{ Student_ID: 22, Student_Name: '23' },
  { Student_ID: 23, Student_Name: '24' },
  { Student_ID: 24, Student_Name: '25' },
  { Student_ID: 25, Student_Name: '26' },
  { Student_ID: 26, Student_Name: '27' },
  { Student_ID: 27, Student_Name: '28' },
  { Student_ID: 28, Student_Name: '29' },
  { Student_ID: 29, Student_Name: '30' },
  { Student_ID: 30, Student_Name: '31' },
  { Student_ID: 31, Student_Name: '32' },
  { Student_ID: 32, Student_Name: '33' },
  { Student_ID: 33, Student_Name: '34' },
  { Student_ID: 34, Student_Name: '35' },
  { Student_ID: 35, Student_Name: '36' },
  { Student_ID: 36, Student_Name: '37' },
  { Student_ID: 37, Student_Name: '38' },
  { Student_ID: 38, Student_Name: '39' },
  { Student_ID: 39, Student_Name: '40' },
  { Student_ID: 40, Student_Name: '41' },
];

var $display = $('#display');

$('#random').on('click', function () {
  var total = students.length,
    selected = Math.floor(Math.random() * total),
    i = 0;

  console.log('selected', selected);
  //$display.animate( {"font-size": "12px"}, 0 );
  // or
  $display.removeClass('rainbow-text');

  // improvement: use a for loop instead of a for..in
  for (i = 0; i < total; i++) {
    // console.log('for', i);
    // here is the trick, use an Immediately-Invoked Function Expression (IIFE)
    // see http://benalman.com/news/2010/11/immediately-invoked-function-expression/
    // play with the two button "IIFE" and "No IIFE" to see why this is important
    setTimeout(
      (function (i) {
        return function () {
          // code here will be delayed
          //console.log('timeout', i);
          $display.text(students[i].Student_Name);
          if (i === selected) {
            //$display.animate( {"font-size": "30px"}, "fast" );
            // or
            $display.addClass('rainbow-text');
          }
        };
      })(i),
      i * 50
    );

    // improvement: triple equal sign, always !
    if (i === selected) {
      // code here will execute immediately
      break;
    }
  }
});

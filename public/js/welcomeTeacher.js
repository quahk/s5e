function checkTime() {
  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  if (m < 10) {
    let timeNow = h + '0' + m;
    return timeNow;
  } else {
    let timeNow = h + '' + m;
    return timeNow;
  }
}

function checkDay() {
  let d = new Date();
  let dayNow = d.getDay();
  return dayNow;
}

function showWelcome() {
  $('#veryWelcome').show();
  $('#useBrowser').show();
}

function checkLesson() {
  $("#toggle").prop("checked", true);
  let timeNow = checkTime();
  let weekDay = checkDay();
  console.log(weekDay)
  console.log(timeNow);

  if (weekDay == 1) {
    if ((timeNow >= 745) & (timeNow <= 850)) {
      showWelcome();
      $('#chinese').show();
    } else if ((timeNow >= 855) & (timeNow <= 945)) {
      showWelcome();
      $('#chinese').show();
    } else if ((timeNow >= 950) & (timeNow <= 1030)) {
      showWelcome();
      $('#maths').show();
    } else if ((timeNow >= 1040) & (timeNow <= 1120)) {
      showWelcome();
      $('#english').show();
    } else if ((timeNow >= 1135) & (timeNow <= 1215)) {
      showWelcome();
      $('#english').show();
    } else if ((timeNow >= 1400) & (timeNow <= 1455)) {
      showWelcome();
      $('#english').show();
    } 
  } else if (weekDay == 6) {
    if ((timeNow >= 745) & (timeNow <= 845)) {
    showWelcome();
    $('#maths').show();
  } else if ((timeNow >= 846) & (timeNow <= 940)) {
    showWelcome();
    $('#chinese').show();
  } else if ((timeNow >= 941) & (timeNow <= 1030)) {
    showWelcome();
    $('#chinese').show();
  } else if ((timeNow >= 1031) & (timeNow <= 1120)) {
    showWelcome();
    $('#english').show();
  } else if ((timeNow >= 1121) & (timeNow <= 1215)) {
    showWelcome();
    $('#english').show();
  } 
  }

  
}

function clearAllTeacher() {
  /*
    $('#accounting').hide();
    $('#chinese').hide();
    $('#english').hide();
    $('#maths').hide();
    $('#physics').hide();
    $('#chemistry').hide();
    $('#biology').hide();
    */
}
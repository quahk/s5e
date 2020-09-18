$('#toggle').prop('checked', true);

var app = new Vue({
  el: '#app',
  data: {
    duties: localStorage.getItem('duties1') + '號 & ' + localStorage.getItem('duties2') + '號',
    teachers: ['班主任 郭老師', 'Mr. Sebastien', '數學科 潘sir', '物理科 綱Sir', '音樂科 葉Sir', '國際關係科 李俊sir', 'Career Planing Alfred & Samuel Sir', '聖經科 歐陽牧師 平安！', '會計科 Mark周老師', '生物科 梁老師', '化學科 古成威老師', '地理科 陳Sir', '班主席 Edward'],
    lessons: ['中文', 'English', '數學', '物理', '音樂', '國際關係', 'Career Planing', '聖經', '會計', '生物', '化學', '地理', '周會', '品德公民', '--'],
    currentTeacher: '',
    inClass: '',
    currentLesson: '',
    nextLesson: '',
  },
  mounted() {
    this.inClass = this.checkLessons();

    if (this.inClass != false) {
      this.classroomMode();
    } 
    
    let d = new Date();

    this.todayDate = d.toLocaleDateString();

    if (localStorage.getItem('duties1') == undefined || localStorage.getItem('duties2') == undefined) {
      this.duties = "Comrade, you haven't finish setup, go setup!";
    }
  },
  methods: {
    checkLessons: function () {
      let timeNow = this.checkTime();
      let dayNow = this.checkDay();
      console.log(timeNow);

      if (dayNow == 1) {
        if ((timeNow >= 745) & (timeNow <= 945)) {
          this.currentTeacher = this.teachers[0];
          this.currentLesson = this.lessons[0];
          this.nextLesson = this.lessons[2];
        } else if ((timeNow >= 946) & (timeNow <= 1035)) {
          this.currentTeacher = this.teachers[2];
          this.currentLesson = this.lessons[2];
          this.nextLesson = this.lessons[1];
        } else if ((timeNow >= 1036) & (timeNow <= 1220)) {
          this.currentTeacher = this.teachers[1];
          this.currentLesson = this.lessons[1];
          this.nextLesson = this.lessons[14];
        } else if ((timeNow >= 1345) & (timeNow <= 1500)) {
          this.currentTeacher = this.teachers[2];
          this.currentLesson = this.lessons[2];
          this.nextLesson = this.lessons[3];
        } else if ((timeNow >= 1501) & (timeNow <= 1640)) {
          this.currentTeacher = this.teachers[3];
          this.currentLesson = this.lessons[3];
          this.nextLesson = this.lessons[14];
        } else {
          return false;
        }
      } else if (dayNow == 2) {
        if ((timeNow >= 745) & (timeNow <= 945)) {
          this.currentTeacher = this.teachers[8];
          this.currentLesson = this.lessons[8];
          if ((timeNow >= 900) & (timeNow <= 945)) {
            this.nextLesson = this.lessons[2];
          } else {
            this.nextLesson = this.lessons[8];
          }
        } else if ((timeNow >= 946) & (timeNow <= 1035)) {
          this.currentTeacher = this.teachers[2];
          this.currentLesson = this.lessons[2];
          this.nextLesson = this.lessons[12];
        } else if ((timeNow >= 1036) & (timeNow <= 1220)) {
          this.currentTeacher = this.teachers[0];
          this.currentLesson = this.lessons[12];
          if ((timeNow >= 1135) & (timeNow <= 1220)) {
            this.nextLesson = this.lessons[14];
          } else {
            this.nextLesson = this.lessons[13];
          }
        } else if ((timeNow >= 1345) & (timeNow <= 1500)) {
          this.currentTeacher = this.teachers[6];
          this.currentLesson = this.lessons[6];
          this.nextLesson = this.lessons[11];
        } else if ((timeNow >= 1501) & (timeNow <= 1550)) {
          this.currentTeacher = this.teachers[11];
          this.currentLesson = this.lessons[11];
          this.nextLesson = this.lessons[0];
        } else if ((timeNow >= 1551) & (timeNow <= 1640)) {
          this.currentTeacher = this.teachers[0];
          this.currentLesson = this.lessons[0];
          this.nextLesson = this.lessons[14];
        } else {
          return false;
        }
      } else if (dayNow == 3) {
        if ((timeNow >= 745) & (timeNow <= 850)) {
          this.currentTeacher = this.teachers[0];
          this.currentLesson = this.lessons[0];
          this.nextLesson = this.lessons[5];
        } else if ((timeNow >= 855) & (timeNow <= 945)) {
          this.currentTeacher = this.teachers[5];
          this.currentLesson = this.lessons[5];
          this.nextLesson = this.lessons[1];
        } else if ((timeNow >= 946) & (timeNow <= 1035)) {
          this.currentTeacher = this.teachers[1];
          this.currentLesson = this.lessons[1];
          this.nextLesson = '體育';
        } else if ((timeNow >= 1345) & (timeNow <= 1500)) {
          this.currentTeacher = this.teachers[2];
          this.currentLesson = this.lessons[2];
          this.nextLesson = this.lessons[8];
        } else if ((timeNow >= 1501) & (timeNow <= 1640)) {
          this.currentTeacher = this.teachers[8];
          this.currentLesson = this.lessons[8];
          if ((timeNow >= 1555) & (timeNow <= 1640)) {
            this.nextLesson = this.lessons[14];
          } else {
            this.nextLesson = this.lessons[8];
          }
        } else {
          return false;
        }
      } else if (dayNow == 4) {
        if ((timeNow >= 745) & (timeNow <= 850)) {
          this.currentTeacher = this.teachers[11];
          this.currentLesson = this.lessons[11];
          this.nextLesson = this.lessons[2];
        } else if ((timeNow >= 855) & (timeNow <= 1035)) {
          this.currentTeacher = this.teachers[2];
          this.currentLesson = this.lessons[2];
          if ((timeNow >= 950) & (timeNow <= 1035)) {
            this.nextLesson = this.lessons[1];
          } else {
            this.nextLesson = this.lessons[2];
          }
        } else if ((timeNow >= 1036) & (timeNow <= 1220)) {
          this.currentTeacher = this.teachers[1];
          if ((timeNow >= 1135) & (timeNow <= 1220)) {
            this.nextLesson = this.lessons[14];
          } else {
            this.nextLesson = this.lessons[1];
          }
        } else if ((timeNow >= 1345) & (timeNow <= 1500)) {
          this.currentTeacher = this.teachers[9];
          this.currentLesson = this.lessons[9];
          this.nextLesson = this.lessons[10];
        } else if ((timeNow >= 1501) & (timeNow <= 1550)) {
          this.currentTeacher = this.teachers[10];
          this.currentLesson = this.lessons[10];
          this.nextLesson = this.lessons[0];
        } else if ((timeNow >= 1551) & (timeNow <= 1640)) {
          this.currentTeacher = this.teachers[0];
          this.currentLesson = this.lessons[0];
          this.nextLesson = this.lessons[14];
        } else {
          return false;
        }
      } else if (dayNow == 5) {
        if ((timeNow >= 745) & (timeNow <= 850)) {
          this.currentTeacher = this.teachers[0];
          this.currentLesson = this.lessons[0];
          this.nextLesson = this.lessons[2];
        } else if ((timeNow >= 855) & (timeNow <= 945)) {
          this.currentTeacher = this.teachers[2];
          this.currentLesson = this.lessons[2];
          this.nextLesson = '資訊科技';
        } else if ((timeNow >= 1036) & (timeNow <= 1125)) {
          this.currentTeacher = this.teachers[7];
          this.currentLesson = this.lessons[7];
          this.nextLesson = this.lessons[0];
        } else if ((timeNow >= 1130) & (timeNow <= 1220)) {
          this.currentTeacher = this.teachers[0];
          this.currentLesson = this.lessons[0];
          this.nextLesson = this.lessons[14];
        } else if ((timeNow >= 1345) & (timeNow <= 1500)) {
          this.currentTeacher = this.teachers[1];
          this.currentLesson = this.lessons[1];
          this.nextLesson = this.lessons[3];
        } else if ((timeNow >= 1501) & (timeNow <= 1550)) {
          this.currentTeacher = this.teachers[3];
          this.currentLesson = this.lessons[3];
          this.nextLesson = this.lessons[4];
        } else if ((timeNow >= 1551) & (timeNow <= 1640)) {
          this.currentTeacher = this.teachers[4];
          this.currentLesson = this.lessons[4];
          this.nextLesson = this.lessons[14];
        } else {
          return false;
        }
      } else if (dayNow == 6) {
        if ((timeNow >= 745) & (timeNow <= 850)) {
          this.currentTeacher = this.teachers[2];
          this.currentLesson = this.lessons[2];
          this.nextLesson = this.lessons[0];
        } else if ((timeNow >= 855) & (timeNow <= 1035)) {
          this.currentTeacher = this.teachers[0];
          if ((timeNow >= 950) & (timeNow <= 1035)) {
            this.nextLesson = this.lessons[1];
          } else {
            this.nextLesson = this.lessons[0];
          }
        } else if ((timeNow >= 1036) & (timeNow <= 1220)) {
          this.currentTeacher = this.teachers[1];
          this.currentLesson = this.lessons[1];
          if ((timeNow >= 1135) & (timeNow <= 1220)) {
            this.nextLesson = this.lessons[14];
          } else {
            this.nextLesson = this.lessons[1];
          }
        } else {
          return false;
        }
      } else {
        return false;
      }
    },
    classroomMode: function () {
      this.checkLessons();
      $('#app').show();
      this.showTeacher();
    },
    checkTime: function () {
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
    },
    checkDay: function () {
      let d = new Date();
      let dayNow = d.getDay();
      return dayNow;
    },
    showTeacher: function () {
      $('#duties').fadeOut('fast');
      $('#lesson').fadeOut('fast');
      $('#teachers').fadeIn('slow');
      setTimeout(this.showLesson, 8000);
    },
    showDuties: function () {
      $('#teachers').fadeOut('fast');
      $('#lesson').fadeOut('fast');
      $('#duties').fadeIn('slow');
      setTimeout(this.classroomMode, 8000);
    },
    showLesson: function () {
      $('#teachers').fadeOut('fast');
      $('#duties').fadeOut('fast');
      $('#lesson').fadeIn('slow');
      setTimeout(this.showDuties, 8000);
    },
  },
});

var navApp = new Vue({
  el: '#navDate',
  data: {
    todayDate: '',
  },
  mounted() {
    let d = new Date();

    this.todayDate = d.toLocaleDateString();
  },
});

/*

subject cheat sheet
0 = quahk
1 = english
2 = maths
3 = physics
4 = music
5 = international relationships
6 = career
7 = bible
8 = accounting
9 = biology
10 = chemistry

*/

$('#startToyBunGame').on('click', () => {

  document.getElementById('batteryGame').style.display = 'block';
  
  
});

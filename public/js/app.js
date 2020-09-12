$('#toggle').prop('checked', true);

var app = new Vue({
  el: '#app',
  data: {
    duties: localStorage.getItem('duties1') + '號 & ' + localStorage.getItem('duties2') + '號',
    teachers: ['班主任 郭老師', 'Mr. Sebastian', '數學科 潘老師', '物理科 綱Sir', '音樂科 葉Sir', '國際關係科 李俊sir', 'Career Planing Alfred & Samuel Sir', '聖經科 歐陽牧師 平安！', '會計科 ??老師', '生物科 梁老師', '化學科 古成威老師'],
  },
  mounted() {
    this.checkLessons();

    if (localStorage.getItem('duties1') == undefined || localStorage.getItem('duties2') == undefined) {
      this.duties = "Comrade, you haven't finish setup, go setup!";
    }
  },
  methods: {
    checkLessons: function () {
        let timeNow = this.checkTime();
        console.log(timeNow);
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


let dat = '12:45:54PM';
timeConversion(dat);

function timeConversion(s) {
    let hh = 0, mm = 0, ss = 0, zz = '';
    zz = s.slice(8, 10);
    if (zz == 'AM') {
        hh = s.slice(0, 2);
        if (hh == 12) {
            hh = '00';
        }
    } else {
        hh = parseInt(s.slice(0, 2)) + 12;
    }
    mm = s.slice(3, 5);
    ss = s.slice(6, 8);
    let times = hh + ':' + mm + ':' + ss;

    if (times == '24:45:54') {
        times = '12:45:54';
    }
    console.log(times);
}
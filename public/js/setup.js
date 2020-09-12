function setup() {
    if (localStorage.getItem('duties1') == undefined || localStorage.getItem('duties2') == undefined) {
        let adminName = prompt('Creating admin account for this website: Please enter your name');
        let adminPw = prompt('Creating admin account for this website: Please set admin password');
        let duties1 = prompt('Who is duty student 1 today?');
        let duties2 = prompt('Who is duty student 2 today?');

        localStorage.setItem('adminName', adminName);
        localStorage.setItem('adminPw', adminPw);
        localStorage.setItem('duties1', duties1);
        localStorage.setItem('duties2', duties2);

        alert('Setup success!');

        location.replace('../index.html')

    } else {
        alert('Already setup a account!');

        location.replace('../index.html');
    }
}
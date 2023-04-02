## Server Status Chercker javaScript

This is a JavaScript that checks the availability of a website. It uses the Fetch API to send a request to the URL "https://www.example.com". The no-cors option specifies that no CORS check is performed.

If the request is successful (i.e., status code 200), the "setStatus" function is called with the "Online" argument. Otherwise, the function is called with the argument "Offline". If an error occurs, the function is called with the argument "Error 503".

The "setStatus" function updates the HTML element with the ID "status" with a message containing the argument of the function.

Please note that data from the catch is also used, so if you want to make sure that no wrong status is displayed, create a subpage, e.g. /status.html that does not have to be or will be called. This way you can get an unbiased result.
Another possibility would be to connect two servers that can communicate with each other.

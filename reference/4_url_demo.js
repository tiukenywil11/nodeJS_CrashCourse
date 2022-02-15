const url = require('url');

// Instantiate url object
const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active')

// Serialized URL
console.log('Display the serialized URL: ');
console.log(myUrl.href);
console.log('Display the serialized URL, using toString method: ');
console.log(myUrl.toString());

// Host (root domain)
console.log('Display the host (root domain): ');
console.log(myUrl.host);

// Hostname (does not get port)
console.log('Display the host name with no port: ');
console.log(myUrl.hostname);

// Pathname (gives only the actual path/file)
console.log('Display the path name: ');
console.log(myUrl.pathname);

// Serialized query (getting the query parameters, usually after the '?' character)
console.log('Display the serialized query: ');
console.log(myUrl.search);

// Query parameters as objects
console.log('Gets the query and parse it as objects: ');
console.log(myUrl.searchParams);

// Add a parameter to the URL
myUrl.searchParams.append('abc', '123');
console.log('Displays search parameters, after appending key/value pair abc/123: ');
console.log(myUrl.searchParams);

// Loop through the parameters
console.log('Looping through myUrl parameters: ');
myUrl.searchParams.forEach((value ,name) => console.log(`${value}:${name}`));
const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';
xhr.responseType = 'json';

xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
	return xhr.response;
	}
}
//Call the open method on xhr. This creates a new request and the arguments passed in determine the type and URL of the request.
xhr.open('GET', url);
//Call the send methord on xhr. Don't pass any arguements
xhr.send()

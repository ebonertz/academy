let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop(); //Removes the last string
secretMessage.push('to', 'Program'); //Adds string to array
secretMessage[7] = 'right'; // Replaces string at index 7
secretMessage.shift(); // Removes the first string
secretMessage.unshift('Programming');

secretMessage.splice(6,5, 'know'); //.splice(indexToStart, numberOfIndices, 'stringToAdd')

console.log(secretMessage.join()); // Print the message to the console and using join method

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
console.log(secretMessage.length);
secretMessage.pop();
console.log(secretMessage.length);
secretMessage.push('to', 'program');
secretMessage[7] = 'right';
secretMessage.shift();
secretMessage.unshift('Programming');
secretMessage.splice(6, 5, 'know,');
console.log( secretMessage.join(' ') );

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months);

months.splice(4, 0, 'May');

console.log( months.join(' ') );

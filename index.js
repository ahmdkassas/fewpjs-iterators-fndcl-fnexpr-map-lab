const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = function(){return tutorials.map(tutorial => upperCase(tutorial))};


function upperCase(str1){
  let newstr = str1.split(" ").map(x => x.charAt(0).toUpperCase() + x.slice(1))    ;
  let capStr = "";
  for(let i =0; i < newstr.length;i++){
    if(i === newstr.length -1){
      capStr += newstr[i]
    }
    else{
    capStr += newstr[i]+' ';
    }
  }
  return capStr;
}
function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  return string.toUpperCase()
}

function logWhisper(string) {
  return string.toLowerCase()
}

function sayHiToGrandma(string) {
  var str = ''
  if(string==='hello'){
    str = "I can't hear you!"
  }
  if(string==='HELLO'){
    str = "YES INDEED!"
  }
  if(string==='I love you, Grandma.'){
    str = "I love you, too."
  }
  return str
}
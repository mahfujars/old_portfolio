var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
 loop: true,
 delay: 100,
});

typewriter
 .pauseFor(2000)

 .typeString('Programmer')
 .pauseFor(1000)
 .deleteChars(10)
 .typeString('Web Designer')
 .pauseFor(1000)
 .deleteChars(12)
 .typeString('Web Developer')
 .pauseFor(1500)
 .start();
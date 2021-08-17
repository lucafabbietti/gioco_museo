var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Scegli cosa vedere')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Clicca uno dei due bottoni')
    .pauseFor(1500)
    .start();
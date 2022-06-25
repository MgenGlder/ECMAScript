function* generator() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

const gen = generator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

// An infinite generator, we'll stick with it slowly and surely.
function* infinite() {
    let index = 0;

    while (true) {
        yield index++;
    }
}

const qq = infinite();

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
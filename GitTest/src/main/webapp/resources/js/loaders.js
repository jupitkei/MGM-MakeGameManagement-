export function loadImage(url) {
    return new Promise(resolve => {
        const image = new Image();
        image.addEventListener('load', () => {
            resolve(image);
        });
        image.src = url;
    });
}

export function loadLevel(name) {
    //return fetch(`../levels/${name}.json`)
    return fetch(`${name}`)
    .then(r => r.json());
}

export function loadCharacter(url) {
    return new Promise(resolve => {
        const image = new Image();
        image.addEventListener('load', () => {
            resolve(image);
        });
        image.src = url;
    })
}
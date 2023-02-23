const SYM = Symbol(`Images' array`);

const DEFINITION = Symbol('A object it works like a multimedia storefile.')

const objectImg = {
    [SYM] : ['logo.png', 'frames.jpg', 'castle.img'],
    [DEFINITION] : 1,
    fileName : 'Existing sort of images',
    articles : {
        cat : 'Michigan.png',
        dog : 'Arnauld.png'
    }
};

for(const key in objectImg){
    console.log(`${key}: ${objectImg[key]}`);
}
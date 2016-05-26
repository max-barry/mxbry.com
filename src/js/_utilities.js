const rImg = new RegExp(/url(?:\(['"]?)(.*?)(?:['"]?\))|src\s*=\s*(["'][^"']+["']|[^>]+)/, 'g');

export function randomNumber(max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export function ID() {
    return '_' + Math.random().toString(36).substr(2, 9);
};

export function killImages(source) {
    return source.replace(rImg, '');
};

export const AVAILABLE_GIFS = [
    'island',
    'marvel',
    'pattern',
    'code',
    'lebron',
];

export function getGifUrl(gif) {
    return `/img/gifs/${ gif }.gif`;
}

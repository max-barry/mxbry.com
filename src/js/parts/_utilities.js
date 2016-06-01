const rImg = new RegExp(/url(?:\(['"]?)(.*?)(?:['"]?\))|src\s*=\s*(["'][^"']+["']|[^>]+)/g);
// const rImg = "";

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

export function detectDevice() {
    let device = window.getComputedStyle(document.querySelector('html'), ':before').getPropertyValue('content').replace(new RegExp(/\"/g), '');
    let isSafari = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;

    mx.device = {
        isMobile: device === 'mobile',
        isTablet: device === 'tablet',
        isDesktop: device === 'desktop',
        isSafari: isSafari,
    };
}

export function getQueryStringValue(key) {
    return unescape(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + escape(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
};

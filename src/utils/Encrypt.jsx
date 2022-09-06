export const encode = ( str ) => {
    return window.btoa(unescape(encodeURIComponent( str )));
};
export const decode = ( str ) => {
    return decodeURIComponent(escape(window.atob( str )));
};
class SimpleCookie {
    name
    value
    expires
    sameSite
    secure
    domain 
    path


    /**
     * @param {String} name
     * @param {String} value
     * @param {String} expires
     * @param {String} sameSite
     * @param {Boolean} secure
     * @param {String} domain
     * @param {String} path
     */
    constructor(name, value, expires, sameSite='Lax', secure=false, domain=`${window.location.hostname}`, path=`${window.location.pathname}`) {
        this.name = name
        this.value = value
        this.expires = expires
        this.sameSite = sameSite
        this.secure = secure
        this.domain = domain
        this.path = path
    }

    setCookie(){
        cookie = ''
        cookie += this.name + '=' + this.value
        cookie += ';'
        if(this.expires !== null && this.expires !== undefined){
            cookie += 'expires=' + this.expires
            cookie += ';'
        }
        cookie += 'SameSite=' + this.sameSite
        cookie += ';'
        cookie += this.secure ? 'Secure;' : ''
        cookie += 'domain=' + this.domain
        cookie += ';'
        cookie += 'path=' + this.path
        cookie += ';'

        document.cookie = cookie
    }
}
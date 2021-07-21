class SimpleCookie {
    name
    value
    domain
    path
    expires
    secure
    httpOnly
    sameSite


    /**
     * @param {String} name
     * @param {String} value
     * @param {String} domain
     * @param {String} path
     * @param {String} expires
     * @param {String} secure
     * @param {String} httpOnly
     * @param {String} sameSite
     */
    constructor(name, value, domain, path='/', expires=`${Date.now().toUTCString()}`, secure, httpOnly, sameSite='Lax'){
        this.name = name
        this.value = value
        this.domain = domain
        this.path = path
        this.expires = expires
        this.secure = secure
        this.httpOnly = httpOnly
        this.sameSite = sameSite
    }

}
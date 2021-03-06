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
        var _cookie = ''
        _cookie += this.name + '=' + this.value
        _cookie += ';'
        if(this.expires !== null && this.expires !== undefined){
            _cookie += 'expires=' + this.expires
            _cookie += ';'
        }
        _cookie += 'SameSite=' + this.sameSite
        _cookie += ';'
        _cookie += this.secure ? 'Secure;' : ''
        _cookie += 'domain=' + this.domain
        _cookie += ';'
        _cookie += 'path=' + this.path
        _cookie += ';'

        document.cookie = _cookie
    }

    setValue(value, refresh=true){
        this.value = value
        if (refresh) {
            this.setCookie()
        }
    }

    getValue(){
        const _cookieValue = document.cookie.split('; ').find(row => row.startsWith(this.name + '=')).split('=')[1]
        return _cookieValue
    }

    delete(){
        if (document.cookie.split(';').some((item) => item.trim().startsWith(this.name + '='))) {
            var _expires = new Date(Date.now()-24*60*60*1000).toUTCString()
            document.cookie = this.name + '=' + this.value + '; expires=' + _expires + ';'
        } else {
            console.log("The cookie " + this.name + " does not exist")
        }
    }

    setExpiration(newTime, refresh=true){
        this.expires = newTime
        if (refresh) {
            this.setCookie()
        }
    }

    setSameSite(sameSite, refresh=true){
        this.sameSite = sameSite
        if (refresh) {
            this.setCookie()
        }
    }

    setSecure(secure, refresh=true){
        this.secure = secure
        if (refresh) {
            this.setCookie()
        }
    }

    setDomain(domain, refresh=true){
        this.domain = domain
        if (refresh) {
            this.setCookie()
        }
    }

    setPath(path, refresh=true){
        this.path = path
        if (refresh) {
            this.setCookie()
        }
    }
}
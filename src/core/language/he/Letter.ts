import hebrew = require('./index');
const { chars: { DAGESH } } = hebrew;

class Letter {
    chr: string;
    dagesh: boolean = false;
    niqqud: string;

    constructor(chr) {
        this.chr = chr;
    }

    toString() {
        var str = this.chr;

        if (this.dagesh) {
            str += DAGESH;
        }

        return str;
    }
}

export = Letter;

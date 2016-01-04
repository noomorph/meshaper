import Language = require("./Language");
import IWordPointer = require("./WordPointer");
import IWordLinks = require("./WordLinks");

class Word implements IWordPointer {
    id: number;
    language: Language;
    text: string;
    links: IWordLinks = null;

    private _pronounced: string;
    get pronounced(): string {
        return this._pronounced || this.text;
    }
    set pronounced(value: string) {
        this._pronounced = value;
    }

    constructor(id: number, language: Language, text: string) {
        this.id = id;
        this.language = language;
        this.text = text;
    }
}

export = Word;


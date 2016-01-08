import Language = require("./Language");
import WordLinks = require("./WordLinks");
import IWordPointer = require("./WordPointer");

class Word implements IWordPointer {
    id: number;
    language: Language;
    text: string;
    links: WordLinks;

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
        this.links = new WordLinks();
    }
}

export = Word;


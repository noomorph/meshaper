import Word = require("../core/language/Word");
import Language = require("../core/language/Language");
import IWordPointer = require("../core/language/WordPointer");

class AppState {
    langs: Map<Language, Map<number, Word>>;

    constructor() {
        this.langs = new Map();
    }

    getWord(pointer: IWordPointer): Word {
        var wordsMap = this.langs.get(pointer.language);
        return wordsMap && wordsMap.get(pointer.id);
    }
}

export = AppState;

import IWordPointer = require("../core/language/WordPointer");
import Language = require('../core/language/Language');
import Word = require("../core/language/Word");

class WordAddedEvent implements IWordPointer {
	id: number;
	language: Language;
	word: string;

	constructor(id: number, language: Language, word: string) {
		this.id = id;
		this.language = language;
		this.word = word;
	}
}

export = WordAddedEvent;

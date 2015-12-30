import Language = require('../core/Language');

class WordAddedEvent {
	id: number;
	word: string;
	lang: Language;

	constructor(id: number, word: string, lang: Language) {
		this.id = id;
		this.word = word;
		this.lang = lang;
	}
}

export = WordAddedEvent;

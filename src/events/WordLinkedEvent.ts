import WordPointer = require('../core/language/WordPointer');
import LinkType = require('../core/language/LinkType');

class WordLinkedEvent {
	wordFrom: WordPointer;
	wordTo: WordPointer;
	linkType: LinkType;

	constructor(wordFrom: WordPointer, wordTo: WordPointer, linkType: LinkType) {
		this.wordFrom = wordFrom;
		this.wordTo = wordTo;
		this.linkType = linkType;
	}
}

export = WordLinkedEvent;

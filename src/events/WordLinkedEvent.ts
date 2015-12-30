import WordPointer = require('../core/WordPointer');
import LinkType = require('../core/LinkType');

class WordLinkedEvent {
	wordFrom: WordPointer;
	wordTo: WordPointer;
	linkType: LinkType;
	bidirectional: boolean;

	constructor(wordFrom: WordPointer, wordTo: WordPointer, linkType: LinkType, bidirectional: boolean = true) {
		this.wordFrom = wordFrom;
		this.wordTo = wordTo;
		this.linkType = linkType;
		this.bidirectional = bidirectional;
	}
}

export = WordLinkedEvent;

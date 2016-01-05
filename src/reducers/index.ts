import _ = require('lodash');
import collapseTextChangeRangesAcrossMultipleVersions = ts.collapseTextChangeRangesAcrossMultipleVersions;
import Word = require("../core/language/Word");
import AppState = require("../state/AppState");
import WordLinkedEvent = require("../events/WordLinkedEvent");
import WordAddedEvent = require("../events/WordAddedEvent");
import LinkType = require("../core/language/LinkType");

function wordAdded(state: AppState, event: WordAddedEvent) : AppState {
    if (!state.langs.has(event.language)) {
        state.langs.set(event.language, new Map<number, Word>());
    }

    var word = new Word(event.id, event.language, event.word);
    state.langs.get(event.language).set(word.id, word);
    return state;
}

function wordLinked(state: AppState, event: WordLinkedEvent) {
    var word = state.getWord(event.wordFrom);

    if (event.linkType === LinkType.Translation) {
        word.links.translations.push(_.clone(event.wordTo));
    }

    return state;
}

function rootReducer(state: AppState = new AppState(), event: any = {}) {
    if (event instanceof WordAddedEvent) {
        return wordAdded(state, event);
    }

    if (event instanceof WordLinkedEvent) {
        return wordLinked(state, event);
    }

    return state;
}

export = rootReducer;
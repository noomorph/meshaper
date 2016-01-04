import AppState = require("../state/AppState");
import WordAddedEvent = require("../events/WordAddedEvent");
import collapseTextChangeRangesAcrossMultipleVersions = ts.collapseTextChangeRangesAcrossMultipleVersions;
import Word = require("../core/language/Word");

function wordAdded(state: AppState, event: WordAddedEvent) : AppState {
    if (!state.langs.has(event.language)) {
        state.langs.set(event.language, new Map<number, Word>());
    }

    var word = new Word(event.id, event.language, event.word);
    state.langs.get(event.language).set(word.id, word);
    return state;
}

function rootReducer(state: AppState = new AppState(), event: any = {}) {
    if (event instanceof WordAddedEvent) {
        return wordAdded(state, event);
    }

    return state;
}

export = rootReducer;
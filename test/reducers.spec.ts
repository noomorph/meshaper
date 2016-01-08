/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts" />

/**
 * Module dependencies.
 */

import chai = require('chai');
import WordAddedEvent = require('../src/events/WordAddedEvent');
import WordLinkedEvent = require('../src/events/WordLinkedEvent');
import Language = require("../src/core/language/Language");
import rootReducer = require('../src/reducers/index');
import AppState = require("../src/state/AppState");
import Word = require("../src/core/language/Word");
import LinkType = require("../src/core/language/LinkType");

/**
 * Globals
 */

const expect = chai.expect;
const { EN, UK } = Language;

/**
 * Unit tests
 */
describe('application state', () => {

    var state: AppState;

    beforeEach(function () {
        state = rootReducer();
    });

    it('should be empty at start', function () {
        expect(state).to.be.an.instanceOf(AppState);
    });

    it('should not throw in attempt to get an un-existing word via .getWord() API', function () {
        expect(state.getWord({ id: 1, language: Language.DE })).to.be.undefined;
    });

    it('should not have any languages within', function () {
        expect(state.langs.size).to.eq(0);
    });

    describe('when first word of the language added', function () {
        var event: WordAddedEvent;

        beforeEach(function () {
            event = new WordAddedEvent(1, Language.EN, 'peace');
            state = rootReducer(state, event);
        });

        it('should add a new entry to languages map', function () {
            expect(state.langs.has(event.language)).to.be.true;
        });

        it('should add a new entry to words map of that language', function () {
            var word = state.langs.get(event.language).get(event.id);
            expect(word.text).to.eq(event.word);
        });

        it('should return that word via .getWord() API', function () {
            var word = state.getWord({id: event.id, language: event.language});
            expect(word.text).to.eq(event.word);
        });
    });

    describe('when a link between words added', function () {
        var event: WordLinkedEvent;

        beforeEach(function () {
            var e1 = new WordAddedEvent(1, EN, 'peace');
            var e2 = new WordAddedEvent(1, UK, 'мир');
            event = new WordLinkedEvent(e1, e2, LinkType.Translation);

            state = [e1, e2, event].reduce(rootReducer, state);
        });

        it('should show that word via LinkType.Any', function () {
            var translations = state.getWord(event.wordFrom).links.get(LinkType.Any);

            expect(translations).to.have.lengthOf(1);
            expect(translations[0]).to.eql(event.wordTo);
        });
    });
});

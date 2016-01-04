/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts" />
/**
 * Module dependencies.
 */
var chai = require('chai');
var WordAddedEvent = require('../src/events/WordAddedEvent');
var Language = require("../src/core/language/Language");
var rootReducer = require('../src/reducers/index');
var AppState = require("../src/state/AppState");
/**
 * Globals
 */
var expect = chai.expect;
/**
 * Unit tests
 */
describe('rootReducer', function () {
    var state;
    beforeEach(function () {
        state = rootReducer();
    });
    it('creates an app state at start', function () {
        expect(state).to.be.an.instanceOf(AppState);
    });
    it('does not throw in attempt to get an un-existing word', function () {
        expect(state.getWord({ id: 1, language: Language.DE })).to.be.undefined;
    });
    describe('when first word of the language added', function () {
        var event;
        beforeEach(function () {
            event = new WordAddedEvent(1, Language.EN, 'peace');
            state = rootReducer(state, event);
        });
        it('adds a new entry to languages map', function () {
            expect(state.langs.has(event.language)).to.be.true;
        });
        it('adds a new entry to words map of that language', function () {
            var word = state.langs.get(event.language).get(event.id);
            expect(word.text).to.eq(event.word);
        });
        it('returns that word via .getWord() API', function () {
            var word = state.getWord({ id: event.id, language: event.language });
            expect(word.text).to.eq(event.word);
        });
    });
});

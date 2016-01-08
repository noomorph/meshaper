/// <reference path="../../../node_modules/typescript/lib/lib.es6.d.ts" />
/// <reference path="../../../typings/lodash/lodash.d.ts" />

import _ = require('lodash');
import IWordPointer = require("./WordPointer");
import LinkType = require("./LinkType");

class WordLinks {
    private _links: Map<LinkType, IWordPointer[]>;

    constructor() {
        this._links = new Map();
    }

    add(linkType: LinkType, pointers: IWordPointer[]) {
        var existingPointers = this._links.get(linkType) || [];
        this._links.set(linkType, [...existingPointers, ...pointers]);
    }

    get(linkType: LinkType): IWordPointer[] {
        if (linkType === LinkType.Any) {
            return _.flatten(Array.from(this._links.values()));
        }

        return _.clone(this._links.get(linkType));
    }
}

export = WordLinks;

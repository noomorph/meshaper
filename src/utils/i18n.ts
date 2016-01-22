/// <reference path="../../typings/translate.js/translate.js.d.ts" />

import * as buildTranslationFunction from 'translate.js';

let dictionary = {
    NAV_TODAY: 'словарь',
    NAV_CALENDAR: 'тренировка',
    NAV_ANALYSIS: 'анализ',
    SHORT_DAY_OF_WEEK: {
        0: 'вс',
        1: 'пн',
        2: 'вт',
        3: 'ср',
        4: 'чт',
        5: 'пт',
        6: 'сб',
    },
    YEAR_AND_MONTH: {
        0: 'январь {year}',
        1: 'февраль {year}',
        2: 'март {year}',
        3: 'апрель {year}',
        4: 'май {year}',
        5: 'июнь {year}',
        6: 'июль {year}',
        7: 'август {year}',
        8: 'сентябрь {year}',
        9: 'октябрь {year}',
        10: 'ноябрь {year}',
        11: 'декабрь {year}',
    },
};

export default buildTranslationFunction(dictionary, { debug: true });

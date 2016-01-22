interface ITranslationFunctionSettings {
    debug?: boolean;
}

declare type TranslationFunction = (s: string, extraArgs?: any) => string;

declare var buildTranslationFunction: (dictionary: Object, settings?: ITranslationFunctionSettings) => TranslationFunction;

declare module "translate.js" {
    export = buildTranslationFunction;
}
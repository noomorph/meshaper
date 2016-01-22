/// <reference path="../../../typings/classnames/classnames.d.ts" />

declare var require: (modulePath: string) => any;

import * as React from 'react';
import { Link } from 'react-router';
import i18n from '../../utils/i18n';
import * as classnames from 'classnames';
import IApplicationProps from "../common/IApplicationProps";
import IApplicationState from "../common/IApplicationState";
const css = require('main.css');

export default class MasterPage extends React.Component<IApplicationProps, IApplicationState> {
    render() {
        return (
            <div className={classnames(css.app, this.props.className)}>
                <div key="navigationBar" className={classnames(css['bottom-bar'], css['bottom-bar-three'])}>
                    <Link to="/today" activeClassName={css.active} className={classnames(css['bottom-bar-link'], css['icon-home'])}>{i18n('NAV_TODAY')}</Link>
                    <Link to="/calendar" activeClassName={css.active} className={classnames(css['bottom-bar-link'], css['icon-list'])}>{i18n('NAV_CALENDAR')}</Link>
                    <Link to="/analysis" activeClassName={css.active} className={classnames(css['bottom-bar-link'], css['icon-menu'])}>{i18n('NAV_ANALYSIS')}</Link>
                </div>
                {this.props.children}
            </div>
        );
    }
}

import React, { Component } from 'react';
import { About } from './About';
import { BoardMembers } from './BoardMembers';
import '../stylesheets/About.css';

export class AboutUsPage extends Component {
    static displayName = AboutUsPage.name;

    render() {
        return (
            <React.Fragment>
                <About />
                <BoardMembers />
            </React.Fragment>
        );
    }
}
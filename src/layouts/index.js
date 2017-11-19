import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Navigation from '../components/Navigation'

import '../assets/scss/main.scss'

class Template extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showNav: false
        }
        this.toggleNav = this.toggleNav.bind(this)
    }

    toggleNav() {
        this.setState({
            showNav: !this.state.showNav
        });
    }

    render() {

        const { location, children } = this.props

        let bodyClass = '';
        let toggleClass = '';

        if (location.pathname === '/') {
            bodyClass = ' body-home';
        }

        if (this.state.showNav) {
            toggleClass = ' show-nav'
        }

        return (
            <div className={'body' + bodyClass + toggleClass}>

                <Helmet>
                    <link href="https://file.myfontastic.com/BpzwX4LjHjPM2JxBPqgq4G/icons.css" rel="stylesheet" />
                </Helmet>

                <Header handleToggleNav={this.toggleNav} toggleClass={toggleClass} />
                <Navigation handleToggleNav={this.toggleNav} />

                {children()}
            </div>
        )
    }
}

Template.propTypes = {
    children: React.PropTypes.func,
    location: React.PropTypes.object,
    route: React.PropTypes.object,
}

export default Template
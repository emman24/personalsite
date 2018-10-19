import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <span className="icon major fa-cloud"></span>
                    <h1>Hi, I'm <strong>Photon</strong>, another fine<br />
                    little freebie from <a href="http://html5up.net">HTML5 UP</a>.</h1>
                    <p>You do your thing, which you’re good at, and we do our thing, which we are very good at <br/>
                    – making your Business system and applications with quality. </p>
                    <ul className="actions">
                        <li><a href="#one" className="button scrolly">Discover</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header

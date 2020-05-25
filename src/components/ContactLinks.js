import React from 'react'


class ContactLinks extends React.Component {
    render() {
        return (
            <div className="ui center aligned segment">
                <div className="ui bottom aligned medium image">
                    <a href="https://www.facebook.com/federigotoelettatura/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/facebook.png" alt="facebook icon" height="32" width="32"/>
                    </a>
                    <a href="https://www.instagram.com/federigotoelettatura/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/instagram.png" alt="instagram icon" height="32" width="32"/>
                    </a>
                </div>
            </div>
        )
    }
}


export default ContactLinks;
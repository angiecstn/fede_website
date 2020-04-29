import React from 'react'


class ContactLinks extends React.Component {
    render() {
        return (
            <div className="socialLinks">
                <a href="https://www.facebook.com/federigotoelettatura/" target="_blank" rel="noopener noreferrer">
                    <img src="facebook.png" alt="facebook icon" height="32" width="32"/>
                </a>
                <a href="https://www.instagram.com/federigotoelettatura/" target="_blank" rel="noopener noreferrer">
                    <img src="instagram.png" alt="instagram icon" height="32" width="32"/>
                </a>
            </div>
        )
    }
}


export default ContactLinks;
import React from "react";
import PropTypes from "prop-types";
import classes from 'components/social/social.module.scss';

const SocialLinks = () => {
    return (<div className={classes.socialContainer} >
        <table>
            <tr>
                <td colSpan="3">
                  
                </td>
            </tr>
            <tr>
                <td>
                    <a href="https://www.facebook.com/craonIT" target="_blank" > <img src="/icone/social/003-facebook.svg" alt="facebook" ></img></a>
                </td>
                <td>
                    <a href="https://www.linkedin.com/company/craonsrl/mycompany/" target="_blank" > <img src="/icone/social/005-linkedin.svg" alt="linkedin" ></img></a>

                </td>
                <td>
                    <a href="https://www.facebook.com/craonIT" target="_blank" > <img src="/icone/social/015-twitter.svg" alt="facebook" ></img></a>

                </td>
            </tr>
        </table>

    </div>);
}

 
export default SocialLinks;
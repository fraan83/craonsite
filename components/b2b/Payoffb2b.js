import Link from 'next/link'
import React from "react";
import classes from "../b2b/b2b.module.scss";
import B2Button from 'components/buttons/B2Button';


const Payoffb2b = () => {
    const handler = () => {
        alert("clicked");
    };

    return (
        <div className={classes.content}>
            <div className={classes.headrb2b}>
                <h1>Un sito e-commerce efficiente che si adatta perfettamente alla vendita B2B</h1>
            </div>
            <div className={classes.contentb2b}>
                <div className={classes.columnb2b}>
                    <h2>Lorem Ipsum </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
                </div>
                <div className={classes.columnb2b}>
                    <h2>Lorem Ipsum </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
                </div>
                <div className={classes.columnb2b}>
                    <h2>Lorem Ipsum </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
                </div>
                <div className={classes.columnb2b}>
                    <h2>Lorem Ipsum </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
                </div>
            </div>
            <div className={classes.bottomB2b}>
                <B2Button />
            </div>


        </div>



    )
}


export default Payoffb2b();
import Link from 'next/link';
import React from "react";
import classes from 'components/termini-condizioni/cookiePopup.module.scss';
import Button from 'components/buttons/Button';

const CookiePopup = () => {
    /*const storageType = localStorage;
    const consentCookie = 'craon_c';
    const shwpopup = () => !storageType.getItem(consentCookie);
    const salvaNelloStorage = () => storageType.setItem(consentCookie, true);

    window.onload = () => {
        if (shwpopup()){
            const domandaConsenso = confirm("Accetti i termini e condizioni del sito?");
            if(domandaConsenso){
                salvaNelloStorage();
            }
        }
    };*/

    return (
        <div className={classes.popupContainer}>
            <div className={classes.text}>
                <h3>Informazioni sui cookie presenti in questo sito</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <p>
                                    Utilizziamo i cookie per raccogliere e analizzare informazioni sulle prestazioni e sull'utilizzo del sito, per fornire funzionalità di social media e per migliorare e personalizzare contenuti e pubblicità presenti
                             </p>

                            </td>
                            <td>
                                <Button text="Consenti i cookies" />
                            </td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )

}


export default CookiePopup;
import React from "react";
import classes from "./ContattiSection.module.scss";
import Title from "components/title/Title";
import { useForm } from "react-hook-form";
import TextField from '@material-ui/core/TextField';
import Image from "next/image";
import Button from "components/buttons/Button";
import { TextareaAutosize } from "@material-ui/core";
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import CommuteIcon from '@material-ui/icons/Commute';

const ContattiSection = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  console.log(errors.email);

  let msgerror = "Campo Obbligatorio";
  
  return (
    <div className="section">
      <div className={classes.content}>
          <Title text="Contatti" /> 
          <div className={classes.pageContent}>
          <div className={classes.info}>
            <div className={classes.title}>
                CRAON SRL
              </div>
              <p><strong>Sede legale: </strong> Via De Castillia, 7 – 20871 Vimercate (MB)</p>
              <p><strong>Sede operativa: </strong> Via Bice Cremagnani, 16 – 20871 Vimercate (MB)</p>
              <p><strong>Partita Iva: </strong>02820820963</p>
              <p><strong>Tel: </strong>039.6612489</p>
              <p><strong>Fax: </strong>039.6389007</p>
              <p><strong>Email: </strong><a className={classes.mail} href="mailto:craon@craon.it">informazioni@craon.it</a></p>  

              <div className={classes.title}>
                COME RAGGIUNGERCI
              </div>
              <p><span className={classes.iconMezzo}><CommuteIcon /></span> da Milano centrale prendi il treno per Lecco, fermata Arcore, poi prendi il pullman n. 320 per Vimercate che ferma in Via Bice Cremagnani 16</p>   
              <p><span className={classes.iconMezzo}><CommuteIcon /></span>Metro verde Cologno Nord, prendi il pullman per il centro di Vimercate, prosegui per 5 minuti a piedi e raggiungi la sede in Via Bice Cremagnani 16</p>   
              <p><span className={classes.iconMezzo}><DirectionsCarIcon /></span>Auto propria, prendi la tangenziale est, uscita Vimercate centro.</p>              
            </div>
            <div className={classes.form}>
            <div className={classes.title}>
              CONTATTACI
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
                <input type="text" placeholder="Email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
                <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />    */}
                  <TextField
                    name="nome"
                    label="Nome *"
                    variant="outlined"
                    helperText={(!!errors.nome) ? msgerror : null}
                    {...register('nome', { required: true})}
                    error={!!errors.nome}
                    className="textField"                    
                  /> 
                  <TextField
                    name="cognome"
                    label="Cognome *"
                    variant="outlined"
                    helperText={(!!errors.cognome) ? msgerror : null}
                    {...register('cognome', { required: true})}
                    error={!!errors.cognome} 
                    className="textField"    
                    /> 
                  <TextField
                    name="azienda"
                    label="Azienda *"
                    variant="outlined"
                    helperText={(!!errors.azienda) ? msgerror : null}
                    {...register('azienda', { required: true})}
                    error={!!errors.azienda} 
                    className="textField"    
                    />                     
                  <TextField
                    name="email"
                    label="Email *"
                    variant="outlined"
                    helperText={!!errors.email ? "Inserire una email valida" : null }
                    {...register('email', {
                      required: true,
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Inserire una email valida",
                      },
                    })}
                    error={!!errors.email} 
                    className="textField"    
                    />  
                  <TextField
                    name="oggetto"
                    label="Oggetto *"
                    variant="outlined"
                    helperText={(!!errors.oggetto) ? msgerror : null}
                    {...register('oggetto', { required: true})}
                    error={!!errors.oggetto} 
                    className="textField"    
                  /> 
                  <TextareaAutosize
                    name="messaggio"
                    placeholder="Messaggio *"
                    className={`${classes.description} ${!!errors.messaggio && classes.errore}`}
                    {...register('messaggio', { required: true})}
                    //defaultValue={data?.oggetto}
                  />
                        {(!!errors.messaggio) && <div className="msgerror" >{msgerror}</div> } 
                  <Button  type="submit"  />            
                </form>           
            </div>

          </div>
      </div>
    </div>
  );
};
 
export default ContattiSection;

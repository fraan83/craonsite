
import { useState, useEffect } from 'react';
import * as Constants from './constants';

function getCarriereAllibo() {

    return fetch(Constants.ALLIBO_CARRIERE_API)
    .then(data => data.json())

}
  
  export default getCarriereAllibo


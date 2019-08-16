import tv4 from 'tv4';
import stateSchema from './stateSchema';

const stateValidator = ({ dispatch, getState }) => next => action => {
    next(action);
    if(!tv4.validate(getState(), stateSchema)) {
        const error = tv4.error;
        console.warn('Invalid schema detected:',error.message,error.dataPath);
    }
};

export default stateValidator;
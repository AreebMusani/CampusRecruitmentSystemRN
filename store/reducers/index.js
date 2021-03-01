import StudentReducer from './StudentReducer';
import CompanyReducer from './CompanyReducer'
import {combineReducers} from 'redux';

export default combineReducers({
    student: StudentReducer,
    company: CompanyReducer
});
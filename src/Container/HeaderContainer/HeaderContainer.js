import {connect} from 'react-redux';
import Header from './../../Components/Header/Header';
import { addMovie } from './../../Services/Action/Action';

const mapStateToProps=state=>({
    //
})
const mapDispatchToProps=dispatch=>({
    addMovieHandler:data=>dispatch(addMovie(data))
})
export default connect(mapStateToProps,mapDispatchToProps)(Header)
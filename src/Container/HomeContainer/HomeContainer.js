import {connect} from 'react-redux'
import Home from '../../Components/Home/Home';
import { addMovieReducer } from './../../Services/Reducer/Reucer';

const mapStateToProps=state=>({
    movieData:state.addMovieReducer
})
const mapDispatchToProps=dispatch=>({
})
export default connect(mapStateToProps,mapDispatchToProps)(Home)
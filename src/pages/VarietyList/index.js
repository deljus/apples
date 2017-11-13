import { connect } from 'react-redux';
import VarietyList from './VarietyList';
import { deleteApple, editApple, addApple } from '../../core/action';

const mapStateToProps = state => ({
  apples: state.apples,
});

const mapDispatchToProps = dispatch => ({
  deleteSelectedItem: id => dispatch(deleteApple(id)),
  editSelectedItem: (id, value) => dispatch(editApple(id, value)),
  createItem: obj => dispatch(addApple(obj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VarietyList);

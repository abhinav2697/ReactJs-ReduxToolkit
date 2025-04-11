// import {Component} from 'react';
import { useSelector,useDispatch,connect} from 'react-redux';
import classes from './Counter.module.css';
import { INCREMENT } from '../store';
import { counterActions } from '../store/counter';

const Counter = () => {
  const dispatch=useDispatch();
 const counter= useSelector(state=>state.counter.counter);
 const show=useSelector(state=>state.counter.showCounter);

 const incrementHandler=()=>{
  // dispatch({type:INCREMENT})
  dispatch(counterActions.INCREMENT());
 }
 const decrementHandler=()=>{
  // dispatch({type:'decrement'});
  dispatch(counterActions.decrement());
 }
 const increaseHandler=()=>{
  // dispatch({type:'increase',payload:5})
  dispatch(counterActions.increase(10))
 }

 const decreaseHandler=()=>{
  // dispatch({type:'decrease',payload:5})
  dispatch(counterActions.decrease(10))
 }
  const toggleCounterHandler = () => {{
    // dispatch({type:'toggle'})
    dispatch(counterActions.toggleCounter());
  }};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={decreaseHandler}>Decrease by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

// class Counter extends Component{
//   incrementHandler(){
//    this.props.increment();
//   }
//   decrementHandler(){
//     this.props.decrement();
//   }
//   toggleCounterHandler(){}
//   render(){
//     return(
//       <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{this.props.counter}</div>
//       <div>
//         <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//         <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//       </div>
//       <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//     </main>
//     )
  
//   }
// }  

const mapStateToProps=state=>{
  return{
    counter:state.counter,
  }
}
const mapDispatchToProps=dispatch=>{
  return{
    increment:()=>dispatch({type:'increment'}),
    decrement:()=>dispatch({type:'decrement'}),
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(Counter);

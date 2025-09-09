import './Counter.css'


function Counter(props) {
  const classNames = props.isDanger ? 'counter__danger' : 'counter'
  return (
    <p className={classNames}>{props.value} </p>
  )

}
export default Counter
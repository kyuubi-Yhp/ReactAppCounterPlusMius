import './LogsList.css'

function Logs(props) {
  console.log(props.logs)
  return (
    <div className="logsList">
      <h2 className='LogsList__title'>{props.title}</h2>
      {props.logs.map(function(item) {
        return (
          <div className='logs__item-list'
          key={item.id}>
            <p className='logs__item'>действие: {item.action}</p>
            <p className='logs__item'>предыдущие значение: {item.prevValue}</p>
            <p className='logs__item'>новое значение: {item.value}</p>
          </div>
        )
      })} 
    </div>
  )
}

export default Logs
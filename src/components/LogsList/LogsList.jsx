function Logs(props) {
  console.log(props.logs)
  return (
    <div>
      <h2>{props.title}</h2>
      {props.logs.map(function(item, indexKye) {
        return (
          <div key={indexKye}>
            <p>действие: {item.action}</p>
            <p>предыдущие значение: {item.prevValue}</p>
            <p>новое значение: {item.value}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Logs
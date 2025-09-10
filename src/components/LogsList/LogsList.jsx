function Logs(props) {
  console.log(props.logs)
  return (
    <div>
      <h2>{props.title}</h2>
      {props.logs.map(function(item) {
        return (
          <div key={item.id}>
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
import './Button.css'
function Button(props) {

  return (
    <div className='btn'>
      <button className='button'
      disabled={props.disebl}
      onClick={props.onClick}
      >{props.text}</button>
    </div>
  )
}

export default Button

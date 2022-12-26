const NumButton = (props) => {
    return ( 
        <button className = 'numButton'onClick = {props.onClick}>{props.value}</button>
     );
}
 
export default NumButton;
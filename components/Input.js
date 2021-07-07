const Input = ({label,name}) => {
return (
 <div><label>{label}:<input type="text" name={name}></input></label>
</div>
)
}
export default Input
export default function Input({ label, ...props }) {
	return (
		<div className="control">
			<label htmlFor={props.name}>{label}</label>
			<input type="text" {...props}/>
		</div>
	)
}

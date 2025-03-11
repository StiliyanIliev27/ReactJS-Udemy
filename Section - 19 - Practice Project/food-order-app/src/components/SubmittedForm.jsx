export default function SubmittedForm({ onClose }) {
	return (
		<div className="control control-center">
			<h2>Thank you for your order!</h2>
			<p>Your order has been submitted successfully.</p>
			<button className="button" onClick={onClose}>Close</button>
		</div>
	);
}

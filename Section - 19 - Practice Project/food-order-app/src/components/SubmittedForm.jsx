export default function SubmittedForm({ onClose }) {
	return (
		<div className="control">
			<h2>Thank you for your order!</h2>
			<p>Your order has been submitted successfully.</p>
			<button className="text-button" onClick={onClose}>Close</button>
		</div>
	);
}

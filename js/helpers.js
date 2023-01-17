/*======================= SELECT ======================= */
for (let i = 0; i < 50; i++) {
	const option = document.createElement("option");
	elSelect.appendChild(option);

	option.textContent = elSelect.length - 1;
}

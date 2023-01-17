//*======================== FUNCTION renderPosts() ============================*//
function renderPosts(array, element = elCards) {
	elCards.innerHTML = "";

	//FOR
	for (let i = 0; i < array.length; i++) {
		const data = array[i];

		const newCard = document.createElement("div");
		newCard.className = "card col-12 col-sm-6 col-md-5  p-0";

		newCard.innerHTML = `
			<div class="d-flex">
				<div class="card-body bg-dark text-light shadow">
					<h5 class="card-title card-header text-center">${data.name.toUpperCase()}</h5>
					<p class="card-text">${data.body}</p>
					<div>
						<div class="d-flex justify-content-between align-itms-center">
							<a class="card-text text-decoration-none" href="#">${data.email}</a>
							<div>
								<a href="https://github.com/MadrimovS/Data-posts"target="_blank"><img src="./icon/github.png" alt="github"></a>
								<a href="https://3-imtihon-js.netlify.app/" target="_blank"><img src="./icon/netlify.png" alt="netlify"></a>
							</div>
						</div>
						<button
							class="btn btn-sm w-100 mt-3 btn-outline-danger  delete-btn"
							data-id="${data.id}">Delete
						</button>
					</div>
				</div>
			</div>
   	`;

		element.appendChild(newCard);
	}
}

renderPosts(data);

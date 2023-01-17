//=========================== SEARCH INPUT POSTS ==============================*//
elSearchForm.addEventListener("input", (evt) => {
	evt.preventDefault();
	searchPost = [];

	let value = elSearch.value;

	data.forEach((evt) => {
		if (evt.name.toLowerCase().includes(value.toLowerCase())) {
			searchPost.push(evt);
		}
	});

	renderPosts(searchPost);
});

//============================== CHANGE POSTS ==============================*//
elSelect.addEventListener("change", () => {
	const type = elSelect.value;

	filteredPosts = [];

	if (type == "All posts") {
		renderPosts(data);
	} else {
		data.forEach((post) => {
			if (post.postId == type) {
				filteredPosts.push(post);
			}
		});

		renderPosts(filteredPosts);
	}
});

//*======================== DELETE BUTTON POSTS ===============================*//
elCards.addEventListener("click", (evt) => {
	const target = evt.target;

	let newPosts = [];
	if (target.className.includes("delete-btn")) {
		const id = Number(target.dataset.id);

		data.forEach((post) => {
			if (post.id !== id) {
				newPosts.push(post);
			}
		});
		data = newPosts;
		renderPosts(data);
	}
});

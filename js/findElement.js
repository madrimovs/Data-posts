/*================================== FIND DOM ELEMENTS ======================== */
function findElement ( element, parent = document )
{
	return parent.querySelector(element);
}

const elForm = findElement("#form");
const elCards = findElement("#cards");
const elSearchForm = findElement("#searchForm");
const elSearch = findElement("#search");
const elSelect = findElement("#select");
const elOption = findElement("#option");
let searchPost = [];
let postIdArr = [];

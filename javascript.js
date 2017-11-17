	// search textbox id 'search'
	// searchNum id 'retrieveNumber'
	// yearBegin id 'startYear'
	// yearEnd id  'endYear'
	// searchResults

	$(document).ready(function() {

		$("button").click();

	var elementArr = ['search', 'startYear', 'endYear'];
	
	var search = $('#search').val();

	var searchNum = $('#retrieveNumber').val();

	var yearBegin = $('#startYear').val();

	var yearEnd = $('#endYear').val();

	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=3655c73c493747ccb3abb5f3387d3f62";

	for (var i = 0; i < elementArr.length; i++) {
		if (i == 0) {
			if (!($("#search").is(":empty"))) {
				url += "&q=";
			}
		}

		if (i == 1) {
			if (!($("#startYear").is(":empty"))) {
				url += "&begin_date=";
			}
		}

		if (i == 2) {
			if (!($("#endYear").is(":empty"))) {
				url += "&end_date=";
			}
		}

		url += $("#" + elementArr[i]).val();

		if (i == 1) {
			url += "0101";
		}

		if (i == 2) {
			url += "1231";
		}
	}

	$.ajax({
		url: url,
		method: "GET",
	}).done(function(response) {

		console.log(response.docs.web_url);

	});

	});
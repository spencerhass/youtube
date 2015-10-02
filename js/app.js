$(document).ready(function () {
	function getResults(search) {
		$.getJSON ("https://www.googleapis.com/youtube/v3/search",
		{
			"part": "snippet",
			"key": "AIzaSyAogbrilcSQcoJ7Rp3aInocM36hj81Z-7w",
			"q": search
		},
	function (data) {
		if (data.pageInfo.totalResults == 0) {
			alert ("No videos found");
		}
		//Emty list
		displaySearchResults(data.items);
	}
	);
}

function displaySearchResults(videos) {
	var html ="";
	$.each(videos, function (index, video) {
		console.log(video.snippet.thumbnails.medium.url);
		html=html + "<li><p>" + video.snippet.title +
			"</p><img src='" + video.snippet.thumbnails.high.url + " '/></li>" ;
});
$("#search-results ul").html(html);
}

$("#search-form").submit(function (event) {
	event.preventDefault();
	getResults($("#search").val());
});
});		

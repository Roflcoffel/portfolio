//Playlist.JS

//List of Songs
var list = [];

//Song Constructor
function song(title, file, playing){
		this.title = title,
		this.file = file,
		this.playing = playing
}

$(document).ready(function(){
	//Song List
	//Only Songs with sheet music will be uploaded.
	list.push(new song("Lunaria", "mp3/Lunaria.mp3", false));
	list.push(new song("Cantabile", "mp3/Cantabile.mp3", false));
	list.push(new song("Ao", "mp3/Ao.mp3", false));
	list.push(new song("Crossroad", "mp3/Crossroad.mp3", false));
	list.push(new song("Crystallize", "mp3/Crystallize.mp3", false));
	list.push(new song("Daydream", "mp3/Daydream.mp3", false));
	list.push(new song("Infinity", "mp3/Infinity.mp3", false));
	list.push(new song("Cryptic", "mp3/Cryptic.mp3", false));
	list.push(new song("Dearly Beloved", "mp3/DearlyBeloved.mp3", false));
	list.push(new song("Malady", "mp3/Malady.mp3", false));
	list.push(new song("Niflheim", "mp3/Niflheim.mp3", false));
	list.push(new song("Path", "mp3/Path.mp3", false));
	list.push(new song("Raspberry Pi", "mp3/RaspberryPi.mp3", false));
	list.push(new song("Reason Orchestral", "mp3/ReasonOrchestral.mp3", false));
	list.push(new song("Tenacity", "mp3/Tenacity.mp3", false));
	list.push(new song("Tomo", "mp3/Tomo.mp3", false));

	//Create Playlist
	for (i = 0; i < list.length; i++) {
		var title = $("<li class='ui-state-default'></li>").text(list[i].title);
		$("#list").append(title);
	}

    $( "#list" ).sortable();
    $( "#list" ).disableSelection();
  
	//$("#playpause").click(toggle($(this).icon));


});
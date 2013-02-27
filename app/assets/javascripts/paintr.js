$(function()
{
//adders
$('#addcolor').click(addbox);
$('#addimg').click(add_img);

//setters
$('#colors').on('click', '.box', set_color);
$('#allimages').on('click', '.imgbox', set_image);

//colors divs choos color /
$('#canvas').on('click', '.paint', paint_color);
$('#canvas').on('click', '.paint', paint_color);


//clearers
$('#clear').click(clearcolors);
$('#imgclear').click(clearimgs);


//createsthedivs in the canvas /
create_paint_boxes();

});

//clearings

function clearimgs()
{
  $('#allimages').empty();
  $('#backimage').css('background-image','none');
}

function clearcolors()
{
  $('#colors').empty();
  $('#selected').css('background-color', 'white');
}





//set colors or images

function set_color()
{
  var box = $(this);
  $('#selected').css('background-color', box.css('background-color'));
}

function set_image()
{
  var imgbox = $(this);
  $('#backimage').css('background-image', imgbox.css('background-image'));
}




function chosenimage()
  {
    var url = $('#selectedimg').css('background-image');
    var imageurl = $(this);
    imageurl.css('background-image', url);
      }

function paint_color()
  {
    var color = $('#selected').css('background-color');
    var box = $(this);
    box.css('background-color', color);
      }


//creates boxes

function create_paint_boxes(){
 for(var i = 0; i < 1000; i++)
 {
  var paint = $('<div>');
  paint.addClass('paint');
  $('#canvas').append(paint);
 }
}

//add images or colors

function add_img()
{
  var imgbox = $('<div>');
  var imgchoice = $('#url').val();
  imgbox.css('background-image', 'url("'+imgchoice+'")');
  imgbox.addClass('imgbox')
  $('#allimages').prepend(imgbox);
}

function addbox()
{
  var box = $('<div>');
  var choice = $('#color').val();
  box.css('background-color', choice);
  box.addClass('box');
  $('#colors').prepend(box);
}

// function set_color()
// {
//   var box = $(this);
//   $('#selected').css('background-color', box.css('background-color'));
//   var box = $(this);
//   var color = box.css('background-color');
//   alert('you clicked on the '+color+' box');
// }
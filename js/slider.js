
    let images = [];
    let time = 2000;
    let i = images.length-1; //counter set on last slide (so, after start player go to img 0)
    let player = undefined; //autoplayer setTimeout status

    // list of images
    images[0] = 'img/fish.webp';
    images[1] = 'img/anchor.webp';
    images[2] = 'img/stones.webp';
    images[3] = 'img/concrete.webp';

    // changing images fn
    function autoSlider() {
        
        // stopping player (to prevent multiple setTimeout)
        // player = clearTimeout(player);

        // counter - change image number
        if (i < images.length - 1) {
            i++;
        } else {
            i=0;
        }
        // set current img source
        document.imgSlider.src = images[i];

        //run autoSlider function again after time
        player = setTimeout("autoSlider()", time);
    }

    // play or pause autoslider
    function playPause() {
        if (player === undefined) {
            autoSlider();
        } else {
            player = clearTimeout(player);
        }
    }

    // handy image changing
    function nextImg() {

        // stopping player
        player = clearTimeout(player);

        if (i < images.length - 1) {
            i++;
        } else {
            i=0;
        }
        console.log("f nextimg; i=" + i);
        document.imgSlider.src = images[i];
    }

    function prevImg() {

        // stopping player
        player = clearTimeout(player);

        if (i > 0) {
            i--;
        } else {
            i=images.length-1;
        }
        document.imgSlider.src = images[i];
        console.log("f previmg; i=" + i);
    }


    // run slider finction onload
    window.onload = autoSlider();
const item1 = document.getElementById('item1');
    const item2 = document.getElementById('item2');
    let mouseX1 = 0;
    let mouseY1 = 0;

    document.addEventListener('mousemove',setMouseEvent1,false);

    //item1
    function moveItem1(timestamp){
        item1.style.setProperty("--cursorXpos1",mouseX1+"px");
        item1.style.setProperty("--cursorYpos1",mouseY1+"px");

        requestAnimationFrame(moveItem1);
    }

    requestAnimationFrame(moveItem1);

    function setMouseEvent1(event){
        mouseX1 = event.clientX;
        mouseY1 = event.clientY;

        console.log(`mouseX1:${mouseX1},mouseY1:${mouseY1}`);
    }

    //item2
    let mouseX2 = 0;
    let mouseY2 = 0;

    document.addEventListener('mousemove',setMouseEvent2,false);

    function moveItem2(timestamp){
        item2.style.setProperty("--cursorXpos2",mouseX2+"px");
        item2.style.setProperty("--cursorYpos2",mouseY2+"px");

        requestAnimationFrame(moveItem2);
    }

    requestAnimationFrame(moveItem2);

    function setMouseEvent2(event){
        mouseX2 = event.clientX;
        mouseY2 = event.clientY;

        console.log(`mouseX2:${mouseX1},mouseY2:${mouseY1}`);
    }

    window.alert('Move The Mouse or Touch the Screen to see the effects!');
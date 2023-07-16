window.addEventListener ("load",function(){
    
        
    console.log("boo!")

    const copyRight = document.getElementById("copyTradeMark");
    
    copyRight.addEventListener("mouseover", function(){
        copyRight.innerHTML = "boo!";

    })
    copyRight.addEventListener("mouseout", function(){
        copyRight.innerHTML = "<small>Learning to Code with Tam &reg;	<br>&copy; 2023 Tammy L Walls</small>";

    })
    





    
});


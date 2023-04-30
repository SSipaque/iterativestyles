// LocalStorage
// test for localStorage
    // Set Item
    localStorage.setItem("lastname", "Johnson");
    // Retrieve
    document.getElementById("h3f1").innerHTML = localStorage.getItem("lastname");
    function deleteItems(){
        // clear localStorage 
        localStorage.removeItem("lastname");
        // Retrieve
        document.getElementById("h3f1").innerHTML = localStorage.getItem("lastname");
        // reset with old text
        document.getElementById("h3f1").innerHTML = "How quickly daft jumping zebras vex.";
    }
// const c1 = document.getElementById("color1");
// 	c1.style.backgroundColor = document.getElementById("color1value").value;

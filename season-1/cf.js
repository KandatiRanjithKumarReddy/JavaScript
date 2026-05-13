function counter() {
    const btn = document.getElementById("clicked");
    let count = 0;
    if (btn) {
        btn.addEventListener("click", function xyz() {
            console.log("Hlo Ranjith", ++count);
        });
    }
}

counter();
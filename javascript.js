
    function purchase(){
      let crystal =prompt("What is your favorite Crystal?");
      crystal = crystal.toLowerCase();
      if (crystal === "labradorite") {
        alert("Labradorite is my favorite Crystal too! 💗");
        } else {
        alert("Allow me to introduce you to MY favorite gemstone, Labradorite! 💎")
        }
      
        let name = prompt("What is your name?");
      
        let email =prompt("Hey there, " + name + "! What is your e-mail address?");
      
        alert("Thank you, " + name + ". I'll be in touch via e-mail. In the meantime, keep on rockin'! 💎🙏💗");
      }
      
        let purchaseButton = document.querySelector("button");
          purchaseButton.addEventListener("click", purchase);
  
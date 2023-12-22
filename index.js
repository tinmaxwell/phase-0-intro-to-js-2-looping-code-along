const cards = (['Guadalupe', 'Ollie', 'Aki'], "gift");

function writeCards(cards) {
    let thankYouMessages = [];
  
    for (let i = 0; i < cards.length; i++) {
      thankYouMessages.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`);
    }
  
    return thankYouMessages;
  }

  function countDown(number) {
    if (number > 0) {
      for (let i = number; i >= 0; i--) {
        console.log(i);
      }
    } else {
      console.log("Please provide a positive integer.");
    }
  }


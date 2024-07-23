/* This is the javascript code for the website.I created windows for different purpose and added strutures and styling of the new windows in the javascript
code only,so for that i have provided pngs*/


document.addEventListener('DOMContentLoaded', function() {
    
    let cartItems = [];

    function handleBuyNow(plantName) {
        const paymentWindow = window.open('', '_blank');
        const paymentOptions = `
            <html>
            <head>
                <title>Payment Options</title>
                <style>
                    body {
                       background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPle-KlwBHknFHqam77Sfz9zH4ZcDuFiO6Cg&s');
                       background-size: cover;
                       background-position: center;
                       font-family: Arial, sans-serif;
                       text-align: center;
                    }
                    h1 {
                        color: #333;
                    }
                    .payment-option {
                        display: inline-block;
                        margin: 20px;
                    }
                    .payment-option img {
                        width: 150px;
                        height: 150px;
                        border-radius: 10px;
                        margin-bottom: 10px;
                    }

                    .popup {
                        display: none; 
                        position: fixed;
                        left: 0;
                        top: 0;
                        width: 100%;
                        height: 100%;
                        overflow: auto;
                        background-color: rgba(0, 0, 0, 0.5); 
                        z-index: 1000; 
                        justify-content: center;
                        align-items: center;
                    }
                    .popup-content {
                        background-color: #fff;
                        padding: 20px;
                        border-radius: 5px;
                        width: 80%;
                        max-width: 500px;
                        position: relative;
                    }
                    
                    .popup-close {
                        color: #aaa;
                        float: right;
                        font-size: 28px;
                        font-weight: bold;
                        cursor: pointer;
                    }
                    .popup-close:hover {
                        color: black;
                    }
                    #paymentForm {
                        text-align: left;
                        padding=30px;
                    }
                    .form-submit {
                        padding: 10px 20px;
                        background-color: #4CAF50;
                        border: none;
                        color: white;
                        cursor: pointer;
                        border-radius: 5px;
                    }
                    .form-submit:hover {
                        background-color: #45a049;
                    }
                </style>
            </head>
            <body>
                <h1>Select Payment Option</h1>
                <div class="payment-option" id="gpayOption">
                    <img src="gpay.png" alt="Google Pay">
                    <p>Google Pay</p>
                </div>
                <div class="payment-option" id="phonepayOption">
                    <img src="phonepay.png" alt="PhonePe">
                    <p>PhonePe</p>
                </div>
                <div class="payment-option">
                    <img src="amazonpay.png" alt="Amazon Pay">
                    <p>Amazon Pay</p>
                </div>
                <div class="payment-option" id="paytmOption">
                    <img src="paytm.png" alt="Paytm">
                    <p>Paytm</p>
                </div>

                <div id="paymentPopup" class="popup">
                    <div class="popup-content">
                        <span class="popup-close">&times;</span>
                        <h2>Payment Details</h2>
                        <form id="paymentForm">
                            <label for="upiId">UPI ID:</label>
                            <input type="text" id="upiId" name="upiId" placeholder="Enter your UPI ID" required>
                            <button type="submit" class="form-submit">Submit</button>
                            <br><br>
                            <h2>Bank Details</h2>
                            <br><br>
                            <label for="ifscCode">IFSC Code:</label>
                            <input type="text" id="ifscCode" name="ifscCode" placeholder="Enter IFSC Code" required pattern="[A-Z]{4}0[A-Z0-9]{6}">
                            <br><br>
                            <label for="accountNumber">Bank Account Number:</label>
                            <input type="text" id="accountNumber" name="accountNumber" placeholder="Enter your account number" required>
                            <br><br>
                            <button type="submit" class="form-submit">Submit</button>
                        </form>
                    </div>
                </div>
                <script>
                    function showPopup() {
                        document.getElementById('paymentPopup').style.display = 'flex';
                    }
                    function hidePopup() {
                        document.getElementById('paymentPopup').style.display = 'none';
                    }

                    document.querySelectorAll('.payment-option').forEach(option => {
                        option.addEventListener('click', showPopup);
                    });

                    
                    document.querySelector('.popup-close').addEventListener('click', hidePopup);

                    document.getElementById('paymentPopup').addEventListener('click', function(event) {
                        if (event.target === this) {
                            hidePopup();
                        }
                    });

                    document.getElementById('paymentForm').addEventListener('submit', function(event) {
                        event.preventDefault();
                        alert('Payment details submitted!');
                        hidePopup(); 
                    });
                </script>
            </body>
            </html>
        `;

        paymentWindow.document.write(paymentOptions);
        paymentWindow.document.close(); 
    
        paymentWindow.focus();
    }

    function handleAddToCart(plantName, plantPrice, plantImage) {

        cartItems.push({ name: plantName, price: plantPrice, image: plantImage });

        alert(`${plantName} added to cart!`);
    }

   
    function handleViewCart(event) {
        
        event.preventDefault();

        const cartWindow = window.open('', '_blank');

        let cartContent = `
            <html>
            <head>
                <title>Shopping Cart</title>
                <style>
                    body {
                       background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPle-KlwBHknFHqam77Sfz9zH4ZcDuFiO6Cg&s');
                       background-size:cover;
                       background-position: center;
                        font-family: Arial, sans-serif;
                        text-align: center;
                    }
                    h1 {
                        color: #333;
                    }
                    .cart-item {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin: 20px;
                    }
                    .cart-item img {
                        width: 100px;
                        height: 100px;
                        border-radius: 5px;
                        margin-right: 20px;
                    }
                    .cart-item-details {
                        text-align: left;
                    }
                    .cart-item-name {
                        font-size: 1.2rem;
                        font-weight: bold;
                        color: #333;
                    }
                    .cart-item-price {
                        font-size: 1rem;
                        color: #666;
                        margin-bottom: 5px;
                    }
                    .button {
                       padding: 8px 16px;
                       background-color: #4CAF50;
                       border: none;
                       color: white;
                       cursor: pointer;
                       border-radius: 5px;
                      }
                    .button:hover {
                      background-color: #45a049;
                     }

                </style>
            </head>
            <body>
                <h1>Shopping Cart</h1>
        `;

        cartItems.forEach(item => {
            cartContent += `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-details">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">₹${item.price.toFixed(2)}</div>
                        <button class="button">Buy Now</button>
                    </div>
                </div>
            `;
        });

        cartContent += `
                </body>
            </html>
        `;

        cartWindow.document.write(cartContent);
        cartWindow.document.close(); 

        cartWindow.focus();
    }

    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('button')) {
            const plantDetails = event.target.closest('.plant-details');
            const plantName = plantDetails.querySelector('.plant-name').textContent;
            const plantPrice = parseFloat(plantDetails.querySelector('.plant-price').textContent.replace('PRICE: ', '').replace('/-', ''));
            const plantImage = plantDetails.previousElementSibling.src;

            if (event.target.textContent === 'Buy Now') {
                handleBuyNow(plantName);
            } else if (event.target.textContent === 'Add to Cart') {
                handleAddToCart(plantName, plantPrice, plantImage);
            }
        }
    });

    const cartLink = document.getElementById('view');
    cartLink.addEventListener('click', handleViewCart);

    function handleViewUser(event) {
        
        event.preventDefault();

        const userWindow = window.open('', '_blank');

        let userForm = `
            <html>
            <head>
                <title>User Login</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        text-align: center;
                        padding: 20px;
                    }
                    h1 {
                        color: #333;
                    }
                    .form-container {
                        max-width: 300px;
                        margin: 0 auto;
                    }
                    .form-input {
                        width: 100%;
                        padding: 10px;
                        margin-bottom: 10px;
                        box-sizing: border-box;
                    }
                    .form-submit {
                        width: 100%;
                        padding: 10px;
                        background-color: #4CAF50;
                        color: white;
                        border: none;
                        cursor: pointer;
                        border-radius: 5px;
                    }
                </style>
            </head>
            <body>
                <div class="form-container">
                    <h1>User Login</h1>
                    <form id="userForm">
                        <input type="email" class="form-input" id="email" placeholder="Enter your email" required>
                        <br>
                        <input type="password" class="form-input" id="password" placeholder="Enter your password" required>
                        <br>
                        <button type="submit" class="form-submit">Submit</button>
                        <h5>Don't have an account?<h5><button type="submit" class="form-submit">Sign Up</button>
                    </form>
                </div>
                <script>
                
                    document.getElementById('userForm').addEventListener('submit', function(event) {
                        event.preventDefault();
                        
                        const email = document.getElementById('email').value;
                        const password = document.getElementById('password').value;
                      
                        window.opener.postMessage({ email: email, password: password }, '*');
                        
                        window.close();
                    });
                </script>
            </body>
            </html>
        `;

        userWindow.document.write(userForm);
        userWindow.document.close(); 

        userWindow.focus();
    }

    const userLink = document.getElementById('login');
    userLink.addEventListener('click', handleViewUser);

    function filterPlants() {
        const searchInput = document.getElementById('searchInput').value.toLowerCase();
        const plants = document.querySelectorAll('.plant');

        plants.forEach(plant => {
            const name = plant.dataset.name.toLowerCase();
            if (name.includes(searchInput)) {
                plant.style.display = 'block'; 
            } else {
                plant.style.display = 'none';  
            }
        });
    }

    document.getElementById('searchButton').addEventListener('click', filterPlants);

    document.getElementById('searchInput').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            filterPlants();
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    
    searchButton.addEventListener('click', filterPlants);
    searchInput.addEventListener('keyup', (event) => {
      if (event.key === 'Enter') {
        filterPlants();
      }
    });
    
    function filterPlants() {
      const query = searchInput.value.toLowerCase();
      const plants = document.querySelectorAll('.plant');
      
      plants.forEach(plant => {
        const plantName = plant.getAttribute('data-name').toLowerCase();
        if (plantName.includes(query)) {
          plant.style.display = 'block';
        } else {
          plant.style.display = 'none';
        }
      });
    }
  });
  document.addEventListener("DOMContentLoaded", function() {

    const plants = document.querySelectorAll(".plant");
    
    document.getElementById("sortButton").addEventListener("click", function() {
      document.getElementById("sortOptions").classList.toggle("show");
    });
  
    document.getElementById("sortLowToHigh").addEventListener("click", function() {
      sortPlants("lowToHigh");
      updateHeading("Price Low to High");
    });
  
    document.getElementById("sortHighToLow").addEventListener("click", function() {
      sortPlants("highToLow");
      updateHeading("Price High to Low");
    });
  
    function sortPlants(order) {

      let plantsArray = Array.from(plants);
  
      plantsArray.sort((a, b) => {
        let priceA = parseInt(a.getAttribute("data-price"), 10);
        let priceB = parseInt(b.getAttribute("data-price"), 10);
        return order === "lowToHigh" ? priceA - priceB : priceB - priceA;
      });
  
      const parent = document.querySelector(".new-plants-section");
      plantsArray.forEach(plant => parent.appendChild(plant));
    }
  
    // Filtering functionality
    document.getElementById("filterButton").addEventListener("click", function() {
      document.getElementById("filterOptions").classList.toggle("show");
    });
  
    document.querySelectorAll("#filterOptions a").forEach(filter => {
      filter.addEventListener("click", function() {
        filterPlants(this.dataset.family);
        updateHeading(this.textContent);
      });
    });
  
    function filterPlants(family) {
      plants.forEach(plant => {
        if (plant.getAttribute("data-family") === family || family === "All") {
          plant.style.display = "block";
        } else {
          plant.style.display = "none";
        }
      });
  
      const plantFamilies = document.querySelectorAll(".plant-family");
      plantFamilies.forEach(section => {
        if (family === "All") {
          section.style.display = "block";
        } else {
          section.style.display = section.querySelector(".plant-list .plant[data-family='" + family + "']") ? "block" : "none";
        }
      });
    }
  
    function updateHeading(headingText) {
      const heading = document.querySelector(".new-plants-section h2");
      heading.textContent = headingText;
    }
  });
  

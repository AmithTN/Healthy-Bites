        document.addEventListener('DOMContentLoaded', function () 
        {
            const cartToggleButton = document.getElementById('elementor-menu-cart__toggle_button');
            const cartContainer = document.querySelector('.elementor-menu-cart__container');
            const cartCloseButton = document.querySelector('.elementor-menu-cart__close-button');
            const cartCounter = document.querySelector('.elementor-button-icon-qty');
            let isCartOpen = false;
            
            const cartTotalElement = document.getElementById('cartTotal');
            const cartItemsElement = document.getElementById('cartItems');
            const cartCountElement = document.getElementById('cartCount');
            
            // Variable to store cart data (for persistence)
            let cartData = JSON.parse(localStorage.getItem('cartData')) || [];
    
            // Function to open the cart (side-cart)           
            function openCart() 
            {
                cartContainer.setAttribute('aria-hidden', 'false');
                cartContainer.style.display = 'block';                                 // Show the cart
                setTimeout(() => {                                                    // Delay for smooth transition
                    cartContainer.style.transform = 'translateX(0)';
                }, 10);                                                             // Short delay before applying the transform
            }

        
            // Function to close the cart (side-cart)
            function closeCart() 
            {
                cartContainer.style.transform = 'translateX(100%)';               // Slide out
                setTimeout(() => {                                               // Delay to allow transition
                    cartContainer.setAttribute('aria-hidden', 'true');
                    cartContainer.style.display = 'none';                      // Hide the cart
                }, 300);                                                      // Match the transition duration
            }

     
            // Toggle cart on button click
            cartToggleButton.addEventListener('click', function (event) 
            {
                event.preventDefault();
                if (cartContainer.getAttribute('aria-hidden') === 'true') 
                {
                    openCart();
                } 
                else 
                {
                    closeCart();
                }
            });

            
    
            // Close cart when clicking the close button
            if (cartCloseButton) 
            {
                cartCloseButton.addEventListener('click', function () 
                {
                    closeCart();
                });
            }
            

            // Function to calculate total price for fruits
            function calculateFruitTotal() 
            {
                let fruitTotal = 0;
                const fruitCheckboxes = document.querySelectorAll('input[data-category="fruit"]'); // Assuming fruit checkboxes have data-category with "fruit"
    
                fruitCheckboxes.forEach((checkbox, index) => 
                {
                    if (checkbox.checked) 
                    {
                        const quantityInput = document.getElementById(`quantity${index + 1}`);
                        const price         = parseInt(checkbox.parentNode.parentNode.cells[2].innerText.replace('₹', ''));
                        const quantity      = parseInt(quantityInput.value);
                        fruitTotal         += price * quantity;
                    }
                });
    
                return fruitTotal;
            }

            // Function to calculate total price for dry fruits
            function calculateDryFruitTotal() 
            {
                let dryFruitTotal = 0;
                const dryFruitCheckboxes = document.querySelectorAll('input[data-category="dryfruit"]'); // Assuming dry fruit checkboxes have name starting with "dryFruit"
    
                dryFruitCheckboxes.forEach((checkbox, index) => 
                {
                    if (checkbox.checked) 
                    {
                        const quantityInput = document.getElementById(`quantity${index + 1}`);
                        const price         = parseInt(checkbox.parentNode.parentNode.cells[2].innerText.replace('₹', ''));
                        const quantity      = parseInt(quantityInput.value);
                        dryFruitTotal      += price * quantity;
                    }
                });
    
                return dryFruitTotal;
            }


            
               // Function to calculate total price for dry fruits
               function calculateveggiesTotal() 
               {
                   let veggiesTotal = 0;
                   const veggiesCheckboxes = document.querySelectorAll('input[data-category="veggies"]'); // Assuming veggies checkboxes have name starting with "veggies"
       
                   veggiesCheckboxes.forEach((checkbox, index) => 
                   {
                       if (checkbox.checked) 
                       {
                           const quantityInput = document.getElementById(`quantity${index + 1}`);
                           const price         = parseInt(checkbox.parentNode.parentNode.cells[2].innerText.replace('₹', ''));
                           const quantity      = parseInt(quantityInput.value);
                           veggiesTotal       += price * quantity;
                       }
                   });
       
                   return veggiesTotal;
               }

            // Function to calculate total price for Paneer and Sprouts 
            function calculatesproutsTotal() 
            {
                let sproutsTotal = 0;
                const sproutsCheckboxes = document.querySelectorAll('input[data-category="sprouts"]'); // Assuming Paneer and Sprouts  checkboxes have name starting with "sprouts"
    
                sproutsCheckboxes.forEach((checkbox, index) => 
                {
                    if (checkbox.checked) 
                    {
                        const quantityInput = document.getElementById(`quantity${index + 1}`);
                        const price         = parseInt(checkbox.parentNode.parentNode.cells[2].innerText.replace('₹', ''));
                        const quantity      = parseInt(quantityInput.value);
                        sproutsTotal       += price * quantity;
                    }
                });
    
                return sproutsTotal;
            }


            // Function to calculate total price for Heartybites 
            function calculateheartybitesTotal() 
            {
                let heartybitesTotal = 0;
                const heartybitesCheckboxes = document.querySelectorAll('input[data-category="heartybites"]'); // Assuming heartybites checkboxes have name starting with "heartybites"
    
                heartybitesCheckboxes.forEach((checkbox, index) => 
                {
                    if (checkbox.checked) 
                    {
                        const quantityInput = document.getElementById(`quantity${index + 1}`);
                        const price         = parseInt(checkbox.parentNode.parentNode.cells[2].innerText.replace('₹', ''));
                        const quantity      = parseInt(quantityInput.value);
                        heartybitesTotal   += price * quantity;
                    }
                });
    
                return heartybitesTotal;
            }



            // Function to calculate total price for eggs
            function calculateeggTotal() 
            {
                let eggTotal = 0;
                const eggCheckboxes = document.querySelectorAll('input[data-category="egg"]'); // Assuming egg  checkboxes have name starting with "egg"
    
                eggCheckboxes.forEach((checkbox, index) => 
                {
                    if (checkbox.checked) 
                    {
                        const quantityInput = document.getElementById(`quantity${index + 1}`);
                        const price         = parseInt(checkbox.parentNode.parentNode.cells[2].innerText.replace('₹', ''));
                        const quantity      = parseInt(quantityInput.value);
                        eggTotal           += price * quantity;
                    }
                });
    
                return eggTotal;
            }


            // Function to calculate total price for nutritious drinks
            function calculatenutritiousdrinkTotal() 
            {
                let nutritiousdrinkTotal = 0;
                const nutritiousdrinkCheckboxes = document.querySelectorAll('input[data-category="drink"]'); // Assuming drinks  checkboxes have name starting with "drink"
    
                nutritiousdrinkCheckboxes.forEach((checkbox, index) => 
                {
                    if (checkbox.checked) 
                    {
                        const quantityInput = document.getElementById(`quantity${index + 1}`);
                        const price         = parseInt(checkbox.parentNode.parentNode.cells[2].innerText.replace('₹', ''));
                        const quantity      = parseInt(quantityInput.value);
                        nutritiousdrinkTotal           += price * quantity;
                    }
                });
    
                return nutritiousdrinkTotal;
            }




            // Function to update the cart with the total
            function updateCartTotal() 
            {
                const fruitTotal    = calculateFruitTotal();
                const dryFruitTotal = calculateDryFruitTotal();
                const veggiesTotal = calculateveggiesTotal();
                const sproutsTotal = calculatesproutsTotal();
                const heartybitesTotal     = calculateheartybitesTotal();
                const eggTotal     = calculateeggTotal();
                const nutritiousdrinkTotal     = calculatenutritiousdrinkTotal();
                const overallTotal = fruitTotal + dryFruitTotal + veggiesTotal + sproutsTotal + heartybitesTotal + eggTotal + nutritiousdrinkTotal ;
    
                const cartTotalElement = document.querySelector('.widget_shopping_cart_content');
    
                if (overallTotal > 0) 
                {
                    // If there are products in the cart, display the category totals and the final total

                    cartTotalElement.innerHTML =   `<h2>CART TOTAL</h2>
                                                    <strong>Fruit : ₹${fruitTotal}</strong><br>                                                  
                                                    <strong>Dry Fruit : ₹${dryFruitTotal}</strong><br>
                                                    <strong>Veggies : ₹${veggiesTotal}</strong><br>
                                                    <strong>Paneer & Sprouts : ₹${sproutsTotal}</strong><br>
                                                    <strong>Hearty Bites : ₹${heartybitesTotal}</strong><br>
                                                    <strong>Egg Delights : ₹${eggTotal}</strong><br>
                                                    <strong>Nutritious Drinks : ₹${nutritiousdrinkTotal}</strong><br>
                                                    <strong>Total : ₹${overallTotal}</strong> `;
        
                } 
                else 
                {
                    // If the cart is empty, display the 'No products in the cart.' message

                    cartTotalElement.innerHTML =   `<div class="woocommerce-mini-cart__empty-message">
                                                        No products in the cart.
                                                    </div>`;
        
                }
            }
        
                   // Function to handle the form submission
                   function handleSubmit(event) 
                   {
                       event.preventDefault();                                                     // Prevent the default form submission
                       
                       updateCartTotal();                                                        // Update the cart total instead of alert
                       
                       openCart();                                                             // Open the cart after updating
                   }
               
                   // Attach event listener to the form submission button
                   document.querySelector('.Submit').addEventListener('click', handleSubmit);  
 
       
});


        // Function to toggle quantity and subtotal based on checkbox state
        function toggleQuantity(productNumber, price) 
        {
            const checkbox = document.querySelector(`input[name="product${productNumber}"]`);
            const quantityInput = document.getElementById(`quantity${productNumber}`);
            const subtotal = document.getElementById(`subtotal${productNumber}`);
            const controls = document.querySelector(`#controls${productNumber}`);
    
            if (checkbox.checked)
            {
                quantityInput.value = 1;                          // Set quantity to 1 when checked
                subtotal.textContent = `₹${price}`;
                quantityInput.disabled = false;                 // Enable the quantity input
                updateTotal(); 
                controls.style.display = 'flex';               // Show the controls (increase/decrease buttons)
                updateSubtotal(productNumber);                // Update subtotal  based on new quantity
               
            }
            else
            {
                quantityInput.value = 0;                     // Set quantity to 0 when unchecked
                subtotal.textContent = '₹0';                // Set subtotal to 0
                quantityInput.disabled = true;             // Disable the quantity input
                updateTotal();                            // Update total when toggling quantity
                controls.style.display = 'none';         // Hide the increase/decrease buttons (controles)
                
            }
            
            // Update total when toggling quantity
            updateTotal();
        }
    
        // Function to decrease quantity
        function decreaseQuantity(id) 
        {
            let quantityInput = document.getElementById(`quantity${id}`);
            let quantity = parseInt(quantityInput.value);
            if (quantity > 1) 
            {
                quantityInput.value = quantity - 1;
                updateSubtotal(id);                       // Update subtotal
                updateTotal();                           // Update total when quantity changes
            }
        }
    
        // Function to increase quantity
        function increaseQuantity(id) 
        {
            let quantityInput = document.getElementById(`quantity${id}`);
            let quantity = parseInt(quantityInput.value);
            quantityInput.value = quantity + 1;
            updateSubtotal(id);                                       // Update subtotal
            updateTotal();                                           // Update total when quantity changes
        }
    
        // Function to update subtotal when quantity changes
        function updateSubtotal(id) 
        {
            const quantityInput = document.getElementById(`quantity${id}`);
            const price = parseInt(document.querySelector(`input[name="product${id}"]`).parentNode.parentNode.cells[2].innerText.replace('₹', '')); // Get the price from the table
            const quantity = parseInt(quantityInput.value);
            const subtotal = quantity * price;
    
            // Update the subtotal display in the table
            document.getElementById(`subtotal${id}`).innerText = `₹${subtotal}`;
            updateTotal();                                                                   // Call update total to recalculate total
        }
    
        // Function to calculate total price for selected products
        function calculateTotal() 
        {
            let total = 0;
            const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        
            // Loop through each checkbox
            checkboxes.forEach((checkbox, index) => {
                const quantityInput = document.getElementById(`quantity${index + 1}`);
                const subtotalElement = document.getElementById(`subtotal${index + 1}`);
        
                // If the checkbox is unchecked, reset quantity and subtotal
                if (!checkbox.checked)
                {
                    quantityInput.value = 0;                                                                             // Set quantity to 0
                    subtotalElement.innerText = '₹0';                                                                   // Set subtotal to ₹0
                } 
                else
                {
                    // If the checkbox is checked, calculate subtotal and add it to the total
                    const quantity = parseInt(quantityInput.value);                                                // Get the quantity
                    const price = parseInt(checkbox.parentNode.parentNode.cells[2].innerText.replace('₹', ''));   // Get the price
                    const subtotal = quantity * price;
        
                    subtotalElement.innerText = `₹${subtotal}`;                                                 // Update the subtotal for this product
                    total += subtotal;                                                                         // Add subtotal to total
                }
            });
        
            return total;                                                                                // Return the final total amount
        }
 
        // Function to update the total display

        function updateTotal() 
        {
            const totalAmount = calculateTotal();
            const totalDisplay = document.getElementById('totalDisplay');                   // Ensure you have an element to display the total
            totalDisplay.innerHTML = `<strong>Total : ₹${totalAmount}</strong>`;           // Update total display
        }
    
        /*Submenu dropdown functionality to work on mobile or tablets */

        document.querySelectorAll('.menu-item').forEach(item => 
        {
            item.addEventListener('click', event => 
            {
                const submenu = item.querySelector('.submenu');
                if (submenu) 
                {
                    submenu.classList.toggle('show');
                }
            });
        });

        /*header for mobile navigation*/

         // Toggle main menu open/close
        document.querySelector('.toggle-1').addEventListener('click', function() {
            const menuToggle = this;
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        
            // Toggle aria-expanded and the class to manage menu visibility
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            document.body.classList.toggle('menu-open');  // Toggles the "menu-open" class on the body or parent container
        });
        document.querySelectorAll('.accordion-menu').forEach(menuLink => {
            menuLink.addEventListener('click', function(event) {
                const chevronIcon = this.querySelector('.bi-chevron-down');
                
                // Check if the clicked element is the chevron (expand icon)
                if (event.target === chevronIcon) {
                    // Prevent default action to stop the link from navigating when clicking the chevron
                    event.preventDefault();
                    
                    // Toggle the submenu visibility
                    let submenu = this.nextElementSibling;  // Get the next element (submenu)
                    if (submenu.style.display === 'block') {
                        submenu.style.display = 'none';
                    } else {
                        submenu.style.display = 'block';
                    }

        
                    // Rotate the chevron icon
                    chevronIcon.classList.toggle('rotated');
                } else {
                 
                    // Else, let the menu link perform its default behavior (navigation)
                    // Do nothing here, so the default action (navigating) happens naturally
                 
                }
            });
        });
        
        

    
/**
 * This function calculate total price a new order
 * @param {Array} products cartProducts : Array of objects
 * @returns {number} Total Price
 */
function totalPrice(products){
    let sum = 0
    products.forEach(product => {
        sum += product.price
    });
    return sum
}

export {totalPrice}
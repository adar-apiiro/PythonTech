import Paddle from 'paddlejs';

//set up - this is a must for this framework
Paddle.Setup({
    vendor: YOUR_VENDOR_ID,
    eventCallback: function(data) {
        console.log('Event Callback:', data);
    }
});

Paddle.Environment.set('sandbox');

document.getElementById('buyButton').addEventListener('click', function() {
    Paddle.Checkout.open({
        product: YOUR_PRODUCT_ID,
        email: 'customer@example.com',
        successCallback: function(data) {
            console.log('Purchase successful!', data);

            Paddle.Download.Start(data.receipt_url, YOUR_PRODUCT_ID);
        },
        closeCallback: function() {
            console.log('Checkout closed.');
        }
    });
});

function showOrderDetails(checkout_id) {
    Paddle.Order.DetailsPopup(checkout_id, 'Processing your order...');
}

Paddle.Product.Price('gross', YOUR_PRODUCT_ID, 1, function(pricing) {
    console.log('Product Price:', pricing);
});
Paddle.User.History('customer@example.com', YOUR_PRODUCT_ID, function(history) {
    console.log('User Purchase History:', history);
});

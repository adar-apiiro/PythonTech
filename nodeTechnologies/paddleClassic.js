import Paddle from 'paddlejs';

//set up - this is a must for this framework
Paddle.Setup({
    vendor: YOUR_VENDOR_ID,
    eventCallback: function(data) {
        console.log('Event Callback:', data);
    }
});

Paddle.Initialize({
    token: 'live_7d279f61a3499fed520f7cd8c08' // replace with a client-side token
});

Paddle.Checkout.open();


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

var request = {
    items: [{
        quantity: 1,
        priceId: 'pri_01gsz8ntc6z7npqqp6j4ys0w1w',
    },
        {
            quantity: 1,
            priceId: 'pri_01gsz8x8sawmvhz1pv30nge1ke',
        }
    ],
    address: {
        countryCode: 'US'
    }
}

Paddle.PricePreview(request)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });

require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);
const express = require('express');

const app = express();
app.use(express.static('public'));
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const YOUR_DOMAIN = process.env.SERVER_URL;

app.post('/create-checkout-session', async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                    price_data: {
                        currency: 'inr',
                        product_data: {
                            name: "Total Price"
                        },
                        unit_amount: req.body.price * 100,
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${YOUR_DOMAIN}/success`,
            cancel_url: `${YOUR_DOMAIN}/canceled`,
        });
        res.json({ url: session.url });
        // res.redirect(303, session.url);
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
});

app.listen(4242, () => console.log('Running on port 4242'));
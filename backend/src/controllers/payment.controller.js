import { MercadoPagoConfig, Preference } from "mercadopago";
const client = new MercadoPagoConfig({
  accessToken:
    "TEST-5484672835584750-040720-ab09873160ae112a5c8353b84dbf1119-509520909",
});

export const createOrder = async (req, res) => {
  try {
    const body = {
      items: [
        {
          title: req.body.title,
          quantity: Number(req.body.quantity),
          unit_price: Number(req.body.price),
          currency_id: "BRL",
        },
      ],
    };

    const preference = new Preference(client);
    const result = await preference.create(body);

    res.json({ id: result.id });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to create order" });
  }
};

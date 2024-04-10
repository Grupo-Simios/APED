import express from "express";
import cors from "cors";

import { MercadoPagoConfig, Preference } from "mercadopago";

const client = new MercadoPagoConfig({
  accessToken:
    "TEST-4354026148598824-040717-cb66e2adcbb2a488d7a79a4326c85108-509520909",
});

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("sou o server");
});

app.post("/create_preference", async (req, res) => {
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
      back_urls: {
        success: "localhost:5173",
        failure: "localhost:5173",
        pending: "localhost:5173",
      },
      auto_return: "approved",
    };

    const preference = new Preference(client);
    const result = await preference.create({ body });
    res.json({ id: result.id });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Erro ao criar a preferencia",
    });
  }
});

app.listen(port, () => console.log("Rodando servidor..."));

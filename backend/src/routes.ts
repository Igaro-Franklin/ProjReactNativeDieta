import {
    FastifyInstance,
    FastifyPluginOptions,
    FastifyRequest,
    FastifyReply
} from "fastify";

import { CreateNutritionController } from "./controllers/CreateNutritionController";

export async function routes(fastify: FastifyInstance, option: FastifyPluginOptions) {
    fastify.get("/teste", (request: FastifyRequest, replay: FastifyReply) => {
        
        let responseText = "```json\n{\n  \"nome\": \"Franklin\",\n  \"sexo\": \"Masculino\",\n  \"idade\": 27,\n  \"altura\": 1.86,\n  \"peso\": 100,\n  \"objetivo\": \"Emagrecer\",\n  \"refeicoes\": [\n    {\n      \"horario\": \"7:00\",\n      \"nome\": \"Cafe da manha\",\n      \"alimentos\": [\n        \"2 ovos cozidos\",\n        \"1 fatia de pao integral\",\n        \"1 colher de sopa de pasta de amendoim\",\n        \"1 fruta (maça ou banana)\"\n      ]\n    },\n    {\n      \"horario\": \"10:00\",\n      \"nome\": \"Lanche da manha\",\n        \"alimentos\": [\n        \"1 copo de iogurte desnatado\",\n        \"1 punhado de castanhas\"\n      ]\n    },\n    {\n      \"horario\": \"13:00\",\n      \"nome\": \"Almoco\",\n      \"alimentos\": [\n        \"150g de carne grelhada (frango, peixe ou carne vermelha magra)\",\n        \"1 concha de arroz integral\",\n        \"1 concha de feijao\",\n        \"Salada verde a vontade\"\n      ]\n    },\n    {\n      \"horario\": \"16:00\",\n      \"nome\": \"Lanche da tarde\",\n      \"alimentos\": [\n        \"1 fruta (laranja ou pera)\",\n        \"1 iogurte desnatado\"\n      ]\n    },\n    {\n      \"horario\": \"19:00\",\n      \"nome\": \"Jantar\",\n      \"alimentos\": [\n        \"150g de peixe grelhado ou salada de frango\",\n        \"Salada de folhas verdes\",\n        \"1 fatia de pao integral\"\n      ]\n    }\n  ],\n  \"suplementos\": [\n    \"Proteina do soro do leite (whey protein)\",\n    \"Creatina (opcional, para auxiliar nos treinos)\"\n  ]\n}\n```"

        try {
            // extrair o JSON
            let jsonString = responseText.replace(/```\w*\n/g, '').replace(/\n```/g, '').trim();

            let jsonObject = JSON.parse(jsonString)

            return replay.send({ data: jsonObject });
            
        } catch (error) {
            console.log(error)
        }

        replay.send({ ok: true })
    })

    fastify.post("/create", async (request: FastifyRequest, replay: FastifyReply) => {
        return new CreateNutritionController().handle(request, replay)
    })
}
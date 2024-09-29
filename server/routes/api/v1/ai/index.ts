import OpenAI from "openai";
import KEY from "~/lib/key";
const openai = new OpenAI({
    apiKey: KEY
})

const PROMPT = `A user is recommending alternatives and food statistics over a certain craving they are having.

This craving is a: {}.

What are the food statistics, such as energy density, calories and nutritional macros?

Then, what are some healthier alternatives.

Return this in a dense format, using JSON:

Item: Item name
Info: Short explanation about food
Why its bad:
Healthiness Rating: 0/100
Energy Density:
Calories:
Nutritional Macros:
Micro Nutrients:

Recommendations: List and generate a simple recipe with ingredients listed at the top and method at the bottom. Along with Nutritional Macros, Calories and Healthiness Rating

Generate it along these lines:


{
  "Item": "Big Mac",
  "Info": "The Big Mac is a fast-food burger with two beef patties, special sauce, lettuce, cheese, pickles, onions, and a sesame seed bun.",
  "Why its bad": "High in calories, unhealthy fats, and sodium, with processed ingredients that lack essential nutrients.",
  "Healthiness Rating": "25",
  "Energy Density": "High",
  "Calories": "550",
  "Nutritional Macros": {
    "Protein": "25g",
    "Carbohydrates": "45g",
    "Fats": "30g",
    "Saturated Fat": "10g",
    "Sugar": "9g"
  },
  "Micro Nutrients": {
    "Sodium": "970mg",
    "Calcium": "20%",
    "Iron": "25%"
  },
  "Recommendations": [
    {
      "Item": "Grilled Chicken Avocado Wrap",
      "Ingredients": "1 whole wheat tortilla, 100g grilled chicken breast, 50g avocado, 1/4 cup mixed greens, 1 tbsp Greek yogurt, 1 tsp lime juice",
      "Method": "Grill the chicken and slice it. Spread the Greek yogurt on the tortilla, add the chicken, avocado slices, mixed greens, and lime juice. Wrap and serve.",
      "Nutritional Macros": {
        "Protein": "30g",
        "Carbohydrates": "25g",
        "Fats": "15g",
        "Saturated Fat": "3g",
        "Sugar": "3g"
      },
      "Calories": "350",
      "Healthiness Rating": "85"
    }
  ]
}

Only return the JSON. Nothing else.`

export default defineEventHandler(async (event) => { 
    const body = await readBody(event);
    const { item } = body;

    if (!item) {
        return {
            status: 400,
            body: {
                error: "Missing item"
            }
        }
    }

    const prompt = PROMPT.replace("{}", item);

    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system",
                content: prompt
            }
        ]
    })



    return response.choices[0].message.content;

    
});
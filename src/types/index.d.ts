export interface AppContextType {
  calories: number;
  setCalories: (calories: number) => void;
}

export type RootStackParamList = {
  Home: undefined;
  Result: {data: dataFromServer};
};

export type dataFromServer = {
  Item: string;
  Info: string;
  'Why its bad': string;
  'Healthiness Rating': string;
  'Energy Density': string;
  Calories: string;
  'Nutritional Macros': {
    Protein: string;
    Carbohydrates: string;
    Fats: string;
    'Saturated Fat': string;
    Sugar: string;
  };
  'Micro Nutrients': {
    Sodium: string;
    Calcium: string;
    Iron: string;
  };
  Recommendations: Array<{
    Item: string;
    Ingredients: string;
    Method: string;
    'Nutritional Macros': {
      Protein: string;
      Carbohydrates: string;
      Fats: string;
      'Saturated Fat': string;
      Sugar: string;
    };
    Calories: string;
    'Healthiness Rating': string;
  }>;
};

document.getElementById('convertButton').addEventListener('click', function() {
    let quantity = parseFloat(document.getElementById('inputQuantity').value);
    let ingredient = document.getElementById('inputIngredient').value;
    let fromUnit = document.getElementById('inputFromUnit').value;
    let toUnit = document.getElementById('inputToUnit').value;
    let output = document.getElementById('outputValue');

    if (isNaN(quantity) || !ingredient || !fromUnit || !toUnit) {
        output.textContent = "Please fill out all fields correctly.";
        return;
    }

    let conversionFactor;

    // Ingredient-based conversion (ingredient -> unit)
    if (ingredient && conversionChart[ingredient] && conversionChart[ingredient][toUnit]) {
        conversionFactor = conversionChart[ingredient][toUnit];
    } 
    // Unit-to-unit conversion
    else if (conversionChart[fromUnit] && conversionChart[fromUnit][toUnit]) {
        conversionFactor = conversionChart[fromUnit][toUnit];
    }

    if (conversionFactor) {
        let convertedAmount = quantity * conversionFactor;
        output.textContent = `${quantity} ${fromUnit.replace('_', ' ')} of ${ingredient.replace('_', ' ')} is equal to ${convertedAmount.toFixed(2)} ${toUnit.replace('_', ' ')}`;
    } else {
        output.textContent = "Conversion not found.";
    }
});

// Conversion chart with ingredients
const conversionChart = {
    "flour": {
        "cup": 120,
        "tbsp": 8,
        "tsp": 2,
        "oz": 4.2,
        "g": 120,
        "kg": 0.12,
        "ml": 240,
        "dl": 2.4
    },
    "sugar": {
        "cup": 200,
        "tbsp": 12.5,
        "tsp": 4.2,
        "oz": 7.1,
        "g": 200,
        "kg": 0.2,
        "ml": 250,
        "dl": 2.5
    },
    "brown_sugar": {
        "cup": 220,
        "tbsp": 14,
        "tsp": 4.7,
        "oz": 7.7,
        "g": 220,
        "kg": 0.22,
        "ml": 250,
        "dl": 2.5
    },
    "cocoa_powder": {
        "cup": 85,
        "tbsp": 5.3,
        "tsp": 1.8,
        "oz": 3,
        "g": 85,
        "kg": 0.085,
        "ml": 150,
        "dl": 1.5
    },
    "butter": {
        "cup": 227,
        "tbsp": 14,
        "tsp": 4.7,
        "oz": 8,
        "g": 227,
        "kg": 0.227,
        "ml": 240,
        "dl": 2.4
    },
   "milk": {
    "cup": 240,
    "tbsp": 16,
    "tsp": 5.3,
    "oz": 8,
    "g": 240,
    "kg": 0.24,
    "ml": 240,
    "dl": 2.4 // 1 ml = 0.01 dl, so 240 ml = 2.4 dl
},
    "honey": {
        "cup": 340,
        "tbsp": 22.5,
        "tsp": 7.5,
        "oz": 12,
        "g": 340,
        "kg": 0.34,
        "ml": 300,
        "dl": 3
    },
    "baking_powder": {
        "cup": 120,
        "tbsp": 8,
        "tsp": 2.6,
        "oz": 4.2,
        "g": 120,
        "kg": 0.12,
        "ml": 240,
        "dl": 2.4
    },
    "baking_soda": {
        "cup": 96,
        "tbsp": 6,
        "tsp": 2,
        "oz": 3.4,
        "g": 96,
        "kg": 0.096,
        "ml": 180,
        "dl": 1.8
    },
    "salt": {
        "cup": 300,
        "tbsp": 18.5,
        "tsp": 6.2,
        "oz": 10.5,
        "g": 300,
        "kg": 0.3,
        "ml": 320,
        "dl": 3.2
    },
    egg: { // 1 large egg
        "g": 50,
        "kg": 0.05,
        "ml": 50,
        "dl": 0.5
    },
    "vanilla_extract": {
        "tbsp": 0.5,
        "tsp": 0.17,
        "oz": 0.03,
        "g": 8,
        "ml": 15,
        "dl": 0.15
    },
    "cinnamon": {
        "tbsp": 0.5,
        "tsp": 0.17,
        "oz": 0.03,
        "g": 8,
        "ml": 15,
        "dl": 0.15
    },
    "nutmeg": {
        "tbsp": 0.5,
        "tsp": 0.17,
        "oz": 0.03,
        "g": 8,
        "ml": 15,
        "dl": 0.15
    },
    "ginger": {
        "tbsp": 0.5,
        "tsp": 0.17,
        "oz": 0.03,
        "g": 8,
        "ml": 15,
        "dl": 0.15
    },
    "allspice": {
        "tbsp": 0.5,
        "tsp": 0.17,
        "oz": 0.03,
        "g": 8,
        "ml": 15,
        "dl": 0.15
    },
    "cloves": {
        "tbsp": 0.5,
        "tsp": 0.17,
        "oz": 0.03,
        "g": 8,
        "ml": 15,
        "dl": 0.15
    },
    "paprika": {
        "tbsp": 0.5,
        "tsp": 0.17,
        "oz": 0.03,
        "g": 8,
        "ml": 15,
        "dl": 0.15
    },
    "cayenne": {
        "tbsp": 0.5,
        "tsp": 0.17,
        "oz": 0.03,
        "g": 8,
        "ml": 15,
        "dl": 0.15
    },
    "black_pepper": {
        "tbsp": 0.5,
        "tsp": 0.17,
        "oz": 0.03,
        "g": 8,
        "ml": 15,
        "dl": 0.15
    },
    "salt": {
        "tbsp": 0.5,
        "tsp": 0.17,
        "oz": 0.03,
        "g": 8,
        "ml": 15,
        "dl": 0.15
    },
    "butter": {
        "tbsp": 14.2,
        "tsp": 4.7,
        "oz": 8,
        "g": 227,
        "ml": 240,
        "dl": 2.4
    },
    "milk": {
        "cup": 240,
        "tbsp": 16,
        "tsp": 5.3,
        "oz": 8,
        "g": 240,
        "ml": 240,
        "dl": 2.4
    },
    "water": {
        "cup": 240,
        "tbsp": 16,
        "tsp": 5.3,
        "oz": 8,
        "g": 240,
        "ml": 240,
        "dl": 2.4
    },
    "oil": {
        "cup": 240,
        "tbsp": 16,
        "tsp": 5.3,
        "oz": 8,
        "g": 240,
        "ml": 240,
        "dl": 2.4
    },
    "lemon_juice": {
        "tbsp": 0.5,
        "tsp": 0.17,
        "oz": 0.03,
        "g": 8,
        "ml": 15,
        "dl": 0.15
    },
    "lime_juice": {
        "tbsp": 0.5,
        "tsp": 0.17,
        "oz": 0.03,
        "g": 8,
        "ml": 15,
        "dl": 0.15
    }

};

// You can also adjust this chart for unit-to-unit conversions if needed.
const unitConversionChart = {
    "us_tsp": {
        "us_tbsp": 1 / 3,
        "cup": 0.0208,
        "oz": 0.1667,
        "g": 4.9,
        "ml": 4.9,
        "dl": 0.049
    },
    "us_tbsp": {
        "us_tsp": 3,
        "cup": 0.0625,
        "oz": 0.5,
        "g": 14.8,
        "ml": 14.8,
        "dl": 0.148
    },
    "cup": {
        "us_tsp": 48,
        "us_tbsp": 16,
        "oz": 8,
        "g": 240,
        "ml": 240,
        "dl": 2.4
    },
    "oz": {
        "us_tsp": 6,
        "us_tbsp": 2,
        "cup": 0.125,
        "g": 28.35,
        "ml": 28.35,
        "dl": 0.2835
    },
    "g": {
        "us_tsp": 0.2048,
        "us_tbsp": 0.068,
        "cup": 0.0042,
        "oz": 0.0353,
        "ml": 1,
        "dl": 0.01
    },
    "ml": {
        "us_tsp": 0.2029,
        "us_tbsp": 0.0676,
        "cup": 0.0042,
        "oz": 0.0352,
        "g": 1,
        "dl": 0.01
    },
    "dl": {
        "us_tsp": 20.29,
        "us_tbsp": 6.76,
        "cup": 0.42,
        "oz": 3.52,
        "g": 100,
        "ml": 100
    }
};

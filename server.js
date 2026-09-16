const express = require("express");

const app = express();

const PORT = 5500;

const meals = [
    {
        id: 1,
        name: "Chicken Adobo",
        category: "Lunch",
        price: 85
    },
    {
        id: 2,
        name: "Pancit Canton",
        category: "Snack",
        price: 50
    },
    {
        id: 3,
        name: "Beef Tapa",
        category: "Breakfast",
        price: 85
    },
    {
        id: 4,
        name: "Burger Steak",
        category: "Lunch",
        price: 90
    }
];

    //Retrieve all meals
    app.get("/api/meals", (req, res) => {
        res.json(meals);        
    });

    //Find one meal through id
    app.get("/api/meals/:id", (req, res)=>{
        const id = Number(req.params.id);
        const meal = meals.find(meal => 
            meal.id == id
        );

        if(!meal){
            return res.status(404).json({
                message:"Meal not found"
                });
        }

        res.json(meal);

    });

    
   app.use(express.static(__dirname));
   app.listen(PORT, ()=> {
    console.log(`server running at http://localhost:${PORT}`);

   });  

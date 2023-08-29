const foodHolder = ["Apple", "Banana", "Orange", "Strawberry", "Blueberry", "Grapes", "Watermelon", "Pineapple", "Mango", "Peach",
"Pear", "Cherry", "Kiwi", "Raspberry", "Blackberry", "Cantaloupe", "Honeydew", "Lemon", "Lime", "Coconut",
"Avocado", "Pomegranate", "Guava", "Fig", "Dragonfruit", "Passion Fruit", "Plum", "Apricot", "Papaya", "Cranberry",
"Raisin", "Date", "Kiwi", "Pitaya", "Lychee", "Nectarine", "Persimmon", "Tangerine", "Apricot", "Papaya", "Mulberry",
"Starfruit", "Quince", "Mangosteen", "Elderberry", "Boysenberry", "Currant", "Feijoa", "Gooseberry", "Jujube", "Lingonberry",
"Salmonberry", "Tamarillo", "Ugli Fruit", "Yuzu", "Zucchini", "Tomatillo", "Plantain", "Eggfruit", "Jabuticaba", "Kiwifruit",
"Guava", "Medlar", "Quenepa", "Longan", "Nance", "Surinam Cherry", "Ugni", "Vaccinium", "Yumberry", "Zig Zag Vine","Asparagus",
 "Broccoli", "Carrot", "Cauliflower", "Cucumber", "Lettuce", "Spinach", "Kale", "Cabbage", "Bell Pepper",
"Potato", "Onion", "Garlic", "Zucchini", "Eggplant", "Mushroom", "Celery", "Green Bean", "Pea", "Artichoke",
"Brussels Sprout", "Beet", "Turnip", "Sweet Potato", "Pumpkin", "Squash", "Yam", "Okra", "Jalapeno", "Corn",
"Chard", "Bok Choy", "Collard Greens", "Romaine Lettuce", "Parsley", "Cilantro", "Basil", "Thyme", "Rosemary",
"Dill", "Sage", "Mint", "Oregano", "Chives", "Kohlrabi", "Radicchio", "Leek", "Endive", "Fennel", "Chayote",
"Garlic Scapes", "Jerusalem Artichoke", "Watercress", "Radish", "Daikon", "Parsnip", "Broccolini", "Celeriac", "Swiss Chard",
"Tarwi", "Mache", "Taro", "Salsify", "Amaranth", "Cardoon", "Tatsoi", "Burdock", "Purslane", "Miner's Lettuce","Chocolate Cake",
 "Vanilla Ice Cream", "Apple Pie", "Brownie", "Cheesecake", "Cupcake", "Donut", "Eclair", "Frozen Yogurt",
"Gelato", "Hot Fudge Sundae", "Ice Cream Sandwich", "Jellybean", "Key Lime Pie", "Lollipop", "Macaron", "Napoleon", "Oreo",
"Pecan Pie", "Quindim", "Rice Pudding", "Sorbet", "Tiramisu", "Upside-Down Cake", "Victoria Sponge Cake", "Whoopie Pie",
"Yogurt Parfait", "Zabaione", "Angel Food Cake", "Baklava", "Cannoli", "Dobos Torte", "Eton Mess", "Flan", "Gâteau",
"Honeycomb", "Icing Sugar", "Jelly Roll", "King Cake", "Lamington", "Madeleine", "Nougat", "Opera Cake", "Profiterole",
"Queen of Puddings", "Raspberry Fool", "Sachertorte", "Tres Leches Cake", "Ube Roll", "Vacherin", "Waffle", "Xiaolongbao",
"Yule Log", "Zuccotto", "Apple Crisp", "Bienenstich", "Chocolate Soufflé", "Dirt Cake", "Eccles Cake", "Fairy Bread",
"Gingerbread Cookie", "Honey Cake", "Italian Wedding Cake", "Jaffa Cake", "Kouglof", "Linzertorte", "Millefeuille",
"Neenish Tart", "Opera Slice", "Paris-Brest", "Queen's Cake", "Rainbow Cake", "Sachima", "Tutti Frutti Ice Cream",
"Unicorn Cake", "Vegan Cupcake", "Watergate Salad", "Xigua Popsicle", "Yuzu Sorbet", "Zebra Cake","Coffee", "Tea", "Lemonade",
 "Soda", "Iced Tea", "Fruit Punch", "Smoothie", "Milkshake", "Hot Chocolate", "Mineral Water",
"Cold Brew", "Energy Drink", "Chai Latte", "Mojito", "Piña Colada", "Mimosa", "Margarita", "Limeade", "Arnold Palmer", "Eggnog",
"Mulled Wine", "Kombucha", "Cappuccino", "Frappe", "Apple Cider", "Ginger Ale", "Lassi", "Peach Iced Tea", "Root Beer Float",
"Hot Toddy", "Aloe Vera Juice", "Bubble Tea", "Coconut Water", "Gin and Tonic", "Horchata", "Iced Coffee", "Jamaica", "Kvass",
"Limeade", "Matcha Latte", "Negroni", "Orange Julius", "Pisco Sour", "Quinine Water", "Raspberry Lemonade", "Strawberry Smoothie",
"Tomato Juice", "Umeshu", "Virgin Mojito", "Whiskey Sour", "Xigua Cooler", "Yerba Mate", "Zobo Drink", "Zinfandel","Popcorn",
 "Pretzel", "Chips", "Trail Mix", "Granola Bar", "Rice Cakes", "Nuts", "Candy Bar", "Jerky", "Crackers",
"Peanut Butter", "Cheese Puffs", "Fruit Leather", "Raisins", "Tortilla Chips", "Dried Mango", "Hummus", "Caramel Corn",
"Popcorn Balls", "Pita Chips", "Salted Nuts", "Chocolate-covered Pretzels", "Roasted Chickpeas", "Wasabi Peas", "Mixed Nuts",
"Cheese and Crackers", "Fruit Snacks", "Rice Crackers", "Nut Mix", "Veggie Chips", "Coconut Chips", "Sesame Sticks",
"Pumpkin Seeds", "Almonds", "Cashews", "Pistachios", "Walnuts", "Peanuts", "Macadamia Nuts", "Hazelnuts", "Pecans", "Brazil Nuts",
"Sunflower Seeds", "Chia Seeds", "Flaxseed", "Pumpkin Seed", "Soy Nuts", "Candied Nuts", "Energy Bites", "Chocolate-covered Almonds",
"BBQ Chips", "Cinnamon Sugar Pita Chips", "Dill Pickle Chips", "Salt and Vinegar Chips", "Truffle Popcorn", "Kettle Corn",
"Dark Chocolate-covered Cashews", "Sweet and Spicy Pecans", "Curry-flavored Almonds", "Spicy Sriracha Peas", "Wasabi Almonds","Sushi",
 "Taco", "Pizza", "Pasta", "Curry", "Burger", "Samosa", "Tofu Stir-Fry", "Spring Roll", "Tandoori Chicken",
"Pad Thai", "Dosa", "Sushi Roll", "Croissant", "Gelato", "Poutine", "Pierogi", "Baklava", "Schnitzel", "Tamales",
"Sashimi", "Kimchi", "Fajita", "Naan", "Peking Duck", "Gyudon", "Baozi", "Dim Sum", "Enchilada", "Falafel",
"Fish and Chips", "Hamburger", "Jambalaya", "Kebab", "Laksa", "Maki", "Nasi Goreng", "Okonomiyaki", "Pho", "Ramen",
"Samosa", "Tofu Stir-Fry", "Udon", "Vindaloo", "Wonton", "Xiaolongbao", "Yakisoba", "Zongzi", "Pierogi", "Borek",
"Blini", "Bánh Mì", "Crêpe", "Empanada", "Fufu", "Gallo Pinto", "Huevos Rancheros", "Injera", "Jerk Chicken", "Kibbeh","Macaroni and Cheese",
 "Chicken Pot Pie", "Mashed Potatoes", "Fried Chicken", "Meatloaf", "Grilled Cheese", "Lasagna",
"Chili", "Spaghetti and Meatballs", "Tater Tots", "Garlic Bread", "Cornbread", "Clam Chowder", "Biscuits and Gravy",
"French Fries", "Potato Salad", "Chicken and Dumplings", "Sloppy Joe", "Baked Beans", "Pulled Pork Sandwich", "Beef Stew",
"Corned Beef Hash", "Chicken Fried Rice", "Tomato Soup", "Crispy Bacon", "Pancakes", "Hot Dogs", "BBQ Ribs", "Onion Rings",
"Potato Chips", "Cheeseburger", "Chocolate Chip Cookies", "Spam Musubi", "Jalapeno Poppers", "Buffalo Wings", "Chicken Nuggets",
"Fried Pickles", "Chicken Quesadilla", "Frito Pie", "Loaded Baked Potato", "Chicken Tenders", "Nacho Cheese Fries",
"Philly Cheesesteak", "Cinnamon Rolls", "Twice-Baked Potato", "Monte Cristo Sandwich", "Fish Stick", "Churros", "Hushpuppies",
"Garlic Mashed Potatoes", "Cuban Sandwich", "Biscuit and Egg Sandwich", "Bacon-Wrapped Hot Dog", "Beef Burrito", "Ziti","Salmon",
 "Shrimp", "Tuna", "Lobster", "Crab", "Clams", "Oysters", "Mussels", "Scallops", "Squid",
"Cod", "Trout", "Mahi Mahi", "Sardines", "Anchovies", "Swordfish", "Haddock", "Caviar", "Octopus", "Catfish",
"Flounder", "Grouper", "Herring", "Snapper", "Mackerel", "Crawfish", "Crab Legs", "Sea Bass", "Halibut", "Abalone",
"Conch", "Eel", "Arctic Char", "Barramundi", "Basa", "Butterfish", "Perch", "Pompano", "Rainbow Trout", "Tilefish",
"Whitefish", "Yellowtail", "Sea Urchin", "Oyster Rockefeller", "Lobster Bisque", "Shrimp Cocktail", "Tuna Poke", "Crispy Calamari",
"Clam Chowder", "Grilled Salmon", "Smoked Trout", "Scallop Ceviche", "Pan-Seared Scallops", "Crab Cake", "Squid Ink Pasta",
"Fried Catfish", "Garlic Shrimp", "Lemon Pepper Tilapia", "Buttered Lobster", "Cajun Crawfish", "Clams Casino", "Seared Tuna",
"Crab Rangoon", "Grilled Swordfish", "Fish Tacos", "Baked Mussels", "Sautéed Clams", "Blackened Grouper", "Crab Roll","Pancakes",
 "Waffles", "Omelette", "Bacon", "Sausage", "French Toast", "Bagel", "Muffin", "Croissant", "Yogurt Parfait",
"Granola", "Eggs Benedict", "Breakfast Burrito", "Cereal", "Hash Browns", "Biscuits and Gravy", "Fruit Salad",
"Scrambled Eggs", "Smoothie", "Cinnamon Roll", "English Muffin", "Syrup", "Toaster Pastry", "Frittata", "Quiche",
"Breakfast Sandwich", "Crepes", "Toast", "Corned Beef Hash", "Pork Roll", "Coffee Cake", "Oatmeal", "Egg White Omelette",
"Grits", "Muesli", "Canadian Bacon", "Home Fries", "Blueberry Pancakes", "Belgian Waffles", "Strawberry Jam",
"Turkey Sausage", "Cranberry Muffin", "Almond Croissant", "Greek Yogurt", "Honey", "Chia Pudding", "Raspberry Smoothie",
"Banana Bread", "Avocado Toast", "Egg and Cheese Biscuit", "Baguette with Butter", "Pecan Pancakes", "Spinach Omelette",
"Maple Syrup", "Bacon and Egg Sandwich", "Coconut Granola", "Eggs Florentine", "Rye Toast", "Blueberry Muffin", "Oatmeal Bowl"]

const preHolder = ["Appetizing", "Aromatic", "Bitter", "Bland", "Boiled", "Bold", "Briny", "Buttery", "Caramelized", "Cheesy",
"Chewy", "Chocolaty", "Citrusy", "Classic", "Crispy", "Crunchy", "Creamy", "Crumbly", "Delicate", "Delicious",
"Divine", "Earthy", "Elegant", "Fiery", "Flavorful", "Fresh", "Fruity", "Full-bodied", "Garlicky", "Grilled",
"Hearty", "Herb-infused", "Homestyle", "Honeyed", "Hot", "Icy", "Juicy", "Luscious", "Melt-in-your-mouth", "Mild",
"Mouthwatering", "Nutty", "Oily", "Peppery", "Pickled", "Piquant", "Rich", "Roasted", "Satisfying", "Savory",
"Scrumptious", "Silky", "Smoky", "Smooth", "Spicy", "Sweet", "Tangy", "Tart", "Tasty", "Toasted", "Unctuous",
"Velvety", "Vibrant", "Vinegary", "Wholesome", "Zesty", "Zippy", "Zingy"]

const winHolder = ["Triumphant", "Supreme", "Dominant", "Conqueror", "Champion", "Victorious", "Mastery", "Sovereign", "Mastermind",
"Commander", "Monarch", "Lord", "Emperor", "Ruler", "Chief", "Head", "Boss", "Governor", "Director", "President",
"Principal", "Captain", "Leader", "Guide", "Helmsman", "Pioneer", "Trailblazer", "Visionary", "Front-runner", "Top",
"Foremost", "Frontier", "Principal", "Primary", "Premier", "Prime", "Prime Mover", "Supervisor", "Overseer", "CEO",
"Executive", "Chairperson", "Chairman", "Chairwoman", "Controller", "Administrator", "Director", "Founder", "Conductor",
"Chair", "Proprietor"]



let form = document.getElementById('nameInput');
let input1 = document.getElementById('name');
let input2 = document.getElementById('name2');

let players = []
let winnerEl = document.getElementById('winner')
let nameOneEl = document.getElementById('name-one')
let nameTwoEl = document.getElementById('name-two')

let firstLetter1 = ''
let firstLetter2 = ''




    

form.addEventListener('submit', function (event) {
    if (!input1.value || !input2.value) {

        event.preventDefault(); 

    }else{

        event.preventDefault();
        namePush()
        let i = document.getElementById("nameInput")
        i.style.display = "none"

    }
});



function namePush(){

    players.push(input1.value )
    players.push(input2.value )
    
    nameOneEl.textContent = '1st: ' + players[0] 
    nameTwoEl.textContent = '2nd: ' + players[1]

}



function randomWord(randStart){

    let r = Math.floor(Math.random() * 20 + (randStart*21))
    return foodHolder[r]
  
}

function randomPre(randStart){

    if(randStart < 4){
        q = 0
    }else if(randStart = 4 ){
        q = 1
    }else if(randStart = 5 ){
        q = 2
    }else if(randStart = 6 ){
        q = 3
    }else if(randStart = 7 ){
        q = 4
    }else{
        q = 5    
    }
    
    let r = Math.floor(Math.random() * 10 + (q*10))
    return preHolder[r]
  
}


function randomFlip(){

    let r = Math.floor(Math.random() * 2) + 1
    return r
  
}

function randomFifty(){

    let r = Math.floor(Math.random() * 50) 
    return r
  
}




function letterValue(letter) {
    const letterValues = {
        a: 1, b: 2, c: 3, d: 4, e: 5,
        f: 6, g: 7, h: 8, i: 9, j: 10,
        k: 11, l: 12, m: 13, n: 14, o: 15,
        p: 16, q: 17, r: 18, s: 19, t: 20,
        u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
    };

    const inputCharacter = letter.toLowerCase(); 

    return letterValues[inputCharacter] || 0; 
}



function generate(){

    if(players[1]!== undefined){

        let o = document.getElementById("buttonOne")
        o.style.display = "none"
         
        let i = document.getElementById("nameInput")
        i.style.display = "none"
        
        let p = document.getElementById("newButton")
        p.style.display = "block"   

        firstLetter1 = players[0].charAt(0)
        firstLetter2 = players[1].charAt(0)
     
        //prefix
        nameOneEl.textContent = randomPre(players[0].length) + ' '
        nameTwoEl.textContent = randomPre(players[1].length) + ' '

        //food made
        nameOneEl.textContent += randomWord(letterValue(firstLetter1))
        nameTwoEl.textContent += randomWord(letterValue(firstLetter2))
       

    }else{

    
    }


}

function fight(){


    let o = document.getElementById("name-one")
    o.style.display = "none"
     
    let i = document.getElementById("name-two")
    i.style.display = "none"

    let p = document.getElementById("newButton")
    p.style.display = "none" 


    if(randomFlip(1) === 1){
        winnerEl.textContent = nameOneEl.textContent + ' Is The ' + winHolder[randomFifty()] + '!!'
    }else
        winnerEl.textContent = nameTwoEl.textContent + ' Is The ' + winHolder[randomFifty()] + '!!'
    



}



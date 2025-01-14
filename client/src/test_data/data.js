// ID Name Price Tags Date Glass
const data = [
    { id: '1', name: "Beer", price: 3.04, ingridients: ["Beer"], createDate: null, glassType: 1 },
    { id: '2', name: "Long Island", price: 4.01, ingridients: ["Tequila", "Jhin", "Vodka", "Rum", "Cuantro", "Cola"], createDate: "1963-05-21T00:00:00", glassType: 2 },
    { id: '3', name: "Blue Laguna", price: 2.04, ingridients: ["Blue Curasao", "Vodka"], createDate: "1721-04-01T00:00:00", glassType: 2 },
    { id: '4', name: "Forest Beer", price: 3.74, ingridients: ["Beer", "Jager"], createDate: "1921-04-01T00:00:00", glassType: 1 },
    { id: '5', name: "Margarita", price: 2.77, ingridients: ["Tequila", "Juice"], createDate: "1833-11-25T00:00:00", glassType: 4 },
    { id: '6', name: "B-52", price: 1.22, ingridients: ["Liquor", "Vodka"], createDate: "1933-12-30T00:00:00", glassType: 5 },
    { id: '7', name: "Negroni", price: 4.12, ingridients: ["Apperetivo", "Jhin", "Vermut"], createDate: "1834-07-18T00:00:00", glassType: 3 },
    { id: '8', name: "Galileo", price: 4.08, ingridients: ["Apperetivo", "Tequila", "Vermut"], createDate: "1765-03-27T00:00:00", glassType: 3 },
    { id: '9', name: "Raddler", price: 3.54, ingridients: ["Beer", "Juice"], createDate: "1796-02-13T00:00:00", glassType: 1 },
    { id: '10', name: "Black Russian", price: 5.04, ingridients: ["Liquor", "Vodka"], createDate: "1933-11-18T00:00:00", glassType: 3 },
    { id: '11', name: "White Russian", price: 5.14, ingridients: ["Liquor", "Vodka"], createDate: "1933-11-21T00:00:00", glassType: 3 },
    { id: '12', name: "Zombie", price: 4.78, ingridients: ["Rum", "Liquor", "Juice"], createDate: "1865-06-22T00:00:00", glassType: 2 },
    { id: '13', name: "Mai Tai", price: 4.33, ingridients: ["Rum", "Cuantro", "Juice"], createDate: "1833-05-17T00:00:00", glassType: 2 },
    { id: '14', name: "Sex on the beach", price: 3.12, ingridients: ["Vodka", "Juice", "Liquor"], createDate: "1879-03-15T00:00:00", glassType: 2 },
    { id: '15', name: "Screwdriver", price: 3.54, ingridients: ["Vodka", "Juice"], createDate: "1734-06-16T00:00:00", glassType: 2 },
    { id: '16', name: "Painkiller", price: 4.01, ingridients: ["Rum", "Juice"], createDate: "1945-09-05T00:00:00", glassType: 2 },
    { id: '17', name: "Pinacolada", price: 4.37, ingridients: ["Rum", "Juice"], createDate: "1956-10-19T00:00:00", glassType: 2 },
    { id: '18', name: "Whiskey Cola", price: 2.04, ingridients: ["Whiskey", "Cola"], createDate: "1721-04-03T00:00:00", glassType: 3 },
    { id: '19', name: "Cuba Libre", price: 2.06, ingridients: ["Rum", "Cola"], createDate: "1789-11-19T00:00:00", glassType: 3 },
    { id: '20', name: "Martini", price: 2.74, ingridients: ["Vermut"], createDate: "1623-08-14T00:00:00", glassType: 4 },
    { id: '21', name: "Golden Finger", price: 3.51, ingridients: ["Vermut", "Vodka"], createDate: "1787-03-11T00:00:00", glassType: 4 },
    { id: '22', name: "Manhatten", price: 4.18, ingridients: ["Whiskey", "Vermut"], createDate: "1842-06-12T00:00:00", glassType: 4 },
    { id: '23', name: "Whiskey Sour", price: 2.99, ingridients: ["Whiskey", "Juice"], createDate: "1721-09-27T00:00:00", glassType: 3 },
    { id: '24', name: "God Father", price: 2.76, ingridients: ["Whiskey", "Liquor"], createDate: "1878-10-08T00:00:00", glassType: 3 },
    { id: '25', name: "Mochito", price: 5.01, ingridients: ["Rum", "Juice"], createDate: "1801-03-12T00:00:00", glassType: 2 },
    { id: '26', name: "Cosmopolitan", price: 3.29, ingridients: ["Vodka", "Liquor", "Juice"], createDate: "1815-10-22T00:00:00", glassType: 4 },
    { id: '27', name: "Tequila Sunrise", price: 3.37, ingridients: ["Tequila", "Juice"], createDate: "1021-04-01T00:00:00", glassType: 2 },
    { id: '28', name: "Daiquirí", price: 3.43, ingridients: ["Rum", "Juice"], createDate: "1878-09-17T00:00:00", glassType: 4 },
    { id: '29', name: "Martini Dry", price: 3.78, ingridients: ["Vermut", "Jhin"], createDate: "1649-09-07T00:00:00", glassType: 4 },
    { id: '30', name: "Blood Mary", price: 3.91, ingridients: ["Vodka", "Juice"], createDate: "1738-08-19T00:00:00", glassType: 2 },
    { id: '31', name: "Aperol", price: 4.06, ingridients: ["Apperetivo", "Wine"], createDate: "1811-04-02T00:00:00", glassType: 2 },
    { id: '32', name: "Wine", price: 5.04, ingridients: ["Wine"], createDate: null, glassType: 2 }
]

const dictionary = [
    { id: 1, label: "Cup" },
    { id: 2, label: "Highball" },
    { id: 3, label: "Rox" },
    { id: 4, label: "Martini" },
    { id: 5, label: "Shot" },
]

exports.data = data;
exports.dictionary = dictionary;
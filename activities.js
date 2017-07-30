// Activites list

var activitiesList = [
    {
        "category": "Organize",
        "list": ["YNAB", "OmniFocus"]
    },
    {
        "category": "Learn",
        "list": ["Vending Machine", "Affinity"]
    },
    {
        "category": "Work",
        "list": ["iPad spreadsheet", "review IT agreement"] 
    }
];

var outputDiv = $('.output');

activitiesList.forEach(function(element) {
    var categoryName = element["category"];
    var listItems = element["list"];
    outputDiv.append(`<h2>${categoryName}</h2>`);
    outputDiv.append('<ul>');
    listItems.forEach(function(item) {
         outputDiv.append(`<li>${listItems}</li>`);
    }); 
});

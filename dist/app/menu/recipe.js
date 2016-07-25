"use strict";
var Recipe = (function () {
    function Recipe(name, price, description, imagePath, ingredients) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
    return Recipe;
}());
exports.Recipe = Recipe;
//# sourceMappingURL=recipe.js.map
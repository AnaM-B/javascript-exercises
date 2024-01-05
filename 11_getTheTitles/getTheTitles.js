const getTheTitles = function(books) {
    return books.map((element) => element.title);
    
    /* First solution using forEach method
    const titles = [];

    books.forEach(element => titles.push(element.title));

    return titles;
    */
};

// Do not edit below this line
module.exports = getTheTitles;

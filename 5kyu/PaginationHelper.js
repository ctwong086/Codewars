//https://www.codewars.com/kata/515bb423de843ea99400000a

//Attempt#1
function PaginationHelper(collection, itemsPerPage){
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
}

PaginationHelper.prototype.itemCount = function() {
    return this.collection.length;
}

PaginationHelper.prototype.pageCount = function() {
    return Math.ceil(this.collection.length / this.itemsPerPage);
}

PaginationHelper.prototype.pageItemCount = function(pageIndex) {
    let pages = [];
  
    for(let i = 0; i < this.collection.length; i += this.itemsPerPage) {
        pages.push(this.collection.slice(i, i + this.itemsPerPage));
    }
    return pages.length > pageIndex ? pages[pageIndex].length : -1;
}

PaginationHelper.prototype.pageIndex = function(itemIndex) {
    if(this.collection.length <= 0 || itemIndex <= -1) {return -1};
    if(itemIndex <= this.collection.length) {
        return itemIndex <= 10 ? 0 : itemIndex % this.itemsPerPage;
    } else {
        return -1;
    }
}
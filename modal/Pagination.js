class Pagination{
    constructor(page,limit){
        this.skip = page*limit;
        this.limit = limit;
    }
}
module.exports = Pagination
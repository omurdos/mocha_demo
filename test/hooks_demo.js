describe("Mocha hooks",function(){
    before("",function(){
            console.log("before hook called....");
    });
    beforeEach("Before each test",() => {
    console.log("Before each called")
    });
    it('mocha hooks test', () => {
        console.log("Mocka hooks");
    });
});
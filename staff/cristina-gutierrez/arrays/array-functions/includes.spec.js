describe('includes', function () {
    it('should return true because 3 is in the array', function () {
        var array = [1, 2, 3, 4, 5, 6];
        var result;

        result = includes(array, 3);

        expect(result).toBe(true);
    });

    it('should return false because 3 is in the array, but not starting the search in the 4th element of the array', function () {
        var array = [1, 2, 3, 4, 5, 6];
        var result;

        result = includes(array, 3, 3); 

        expect(result).toBe(false);
    });

    it('should return false because the word "animal" is not in the array', function () {
        var array = [1, 2, 3, 4, 5, 6];
        var result;

        result = includes(array, "animal"); 

        expect(result).toBe(false);
    });

    it('should return false because we want to find 9, which it does not exist in the array', function () {
        var array = [1, 2, 3, 4, 5, 6];
        var result;

        result = includes(array, 9); 

        expect(result).toBe(false);
    });
});
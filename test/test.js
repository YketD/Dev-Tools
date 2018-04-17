var assert = require('assert');


//test function
describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal([1,2,3].indexOf(4), -1);
        });
    });
});

//validating the getRandomColor function
describe('Random color generator', function () {
    var regex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    it('should return a valid color code', function () {
        assert.ok(regex.test(getRandomColor()))
    })
    it('shouldnt accept values that arent color codes', function () {
        assert.ok(!regex.test('abc'));
        assert.ok(!regex.test(1234));
        assert.ok(!regex.test('#1234567'));
        assert.ok(!regex.test('#12345'));
    })
})

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


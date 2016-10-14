function Pattern(){
	this.start = function(){
		var pat = [1,2];
		if(pat===1){
			return num+ope+char;
		}
		else if(pat===2){
			return char+ope+num;
		}
	}
}
function Operator(){
	this.start = function(){
		var ope = [1,2] ;
		if(ope===1){
			return ope = ' + ';
		}
		else if(ope===2){
			return ope = ' - ';
		}
	}
}
function first(){
	this.start = function(){
		var num = [0,1,2,3,4,5,6,7,8,9];
		return num;
	}
}
function last(){
	this.start = function(){
		var char = [zero,one,two,three,four,five,six,seven,eight,nine]
		return char;
	}
}

describe("Pattern()", function() {
  var echo = new Pattern();
  it('should be "1 + zero"', function() {
    expect(echo.Pattern()).toEqual('1 + zero');
  });
  it('should be "2 + one"', function() {
    expect(echo.Pattern(0,2,1)).toEqual('2 + one');
  });
  it('should be "3 + two"', function() {
    expect(echo.Pattern(0,3,2)).toEqual('3 + two');
  });
  it('should be "4 + three"', function(){
    expect(echo.Pattern(0,4,3)).toEqual('4 + three');
  });
  it('should be "5 + four"', function(){
    expect(echo.Pattern(0,5,4)).toEqual('5 + four');
  });
  it('should be "6 + five"', function(){
    expect(echo.Pattern(1,6,5)).toEqual('6 + five');
  });
  it('should be "7 + six"', function(){
    expect(echo.Pattern(1,7,6)).toEqual('7 + six');
  });
  it('should be "8 + seven"', function(){
    expect(echo.Pattern(1,8,7)).toEqual('8 + seven');
  });
  it('should be "9 + eight"', function(){
    expect(echo.Pattern(1,9,8)).toEqual('9 + eight');
  });
  it('should be "0 + nine"', function(){
    expect(echo.Pattern()).toEqual('0 + nine');
  });
});
describe("Pattern()", function() {
  var echo = new Pattern();
  it('it should be "zero - 1"', function() {
    expect(echo.Pattern()).toEqual('zero - 1');
  });
  it('it should be "one - 2"', function() {
    expect(echo.Pattern()).toEqual('one - 2');
  });
  it('it should be "two - 3"', function() {
    expect(echo.Pattern()).toEqual('two - 3');
  });
  it('it should be "three - 4"', function() {
    expect(echo.Pattern()).toEqual('three - 4');
  });
  it('it should be "four - 5"', function() {
    expect(echo.Pattern()).toEqual('four - 5');
  });
  it('it should be "five - 6"', function() {
    expect(echo.Pattern()).toEqual('five - 6');
  });
  it('it should be "six - 7"', function() {
    expect(echo.Pattern()).toEqual('six - 7');
  });
  it('it should be "seven - 8"', function() {
    expect(echo.Pattern()).toEqual('seven - 8');
  });
  it('it should be "eight - 9"', function() {
    expect(echo.Pattern()).toEqual('eight - 9');
  });
  it('it should be "nine - 9"', function() {
    expect(echo.Pattern()).toEqual('nine - 9');
  });
});

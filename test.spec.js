function Pattern(pat,ope,num,char){
  var O = new Operator(ope);
	this.start = function(){
		var pat = [1,2];
		if(pat===1){
			return num+O.toString()+char;
		}
		else if(pat===2){
			return char+O.toString()+num;
		}
	}
}
function Operator(ope){
	this.toString = function(){
		var ope = [1,2] ;
		if(ope===1){
			return ' + ';
		}
		else if(ope===2){
			return ' - ';
		}
	}
}
function first(){
	this.toString = function(){
		var num = [0,1,2,3,4,5,6,7,8,9];
		return num;
	}
}
function last(){
	this.toString = function(){
		var char = [zero,one,two,three,four,five,six,seven,eight,nine]
		return char;
	}
}

describe('Captcha', function() {
  it('should be "1 + zero"when input is 1,1,1,0', function() {
		var echo = new Pattern(1,1,1,0);
    expect(echo.Pattern()).toEqual('1 + zero');
  });
  it('should be "2 + one"when input is 1,1,2,1', function() {
		var echo = new Pattern(1,1,2,1);
    expect(echo.Pattern(0,2,1)).toEqual('2 + one');
  });
  it('should be "3 + two"when input is 1,1,3,2', function() {
		var echo = new Pattern(1,1,3,2);
    expect(echo.Pattern(0,3,2)).toEqual('3 + two');
  });
  it('should be "4 + three"when input is 1,1,4,3', function(){
		var echo = new Pattern(1,1,4,3);
    expect(echo.Pattern(0,4,3)).toEqual('4 + three');
  });
  it('should be "5 + four"when input is 1,1,5,4', function(){
		var echo = new Pattern(1,1,5,4);
    expect(echo.Pattern(0,5,4)).toEqual('5 + four');
  });
  it('should be "6 + five"when input is 1,1,6,5', function(){
		var echo = new Pattern(1,1,6,5);
    expect(echo.Pattern(1,6,5)).toEqual('6 + five');
  });
  it('should be "7 + six"when input is 1,1,7,6', function(){
		var echo = new Pattern(1,1,7,6);
    expect(echo.Pattern(1,7,6)).toEqual('7 + six');
  });
  it('should be "8 + seven"when input is 1,1,8,7', function(){
		var echo = new Pattern(1,1,8,7);
    expect(echo.Pattern(1,8,7)).toEqual('8 + seven');
  });
  it('should be "9 + eight"when input is 1,1,9,8', function(){
		var echo = new Pattern(1,1,9,8);
    expect(echo.Pattern(1,9,8)).toEqual('9 + eight');
  });
  it('should be "0 + nine"when input is 1,1,0,9', function(){
		var echo = new Pattern(1,1,0,9);
    expect(echo.Pattern()).toEqual('0 + nine');
  });
});
describe("Pattern()", function() {
  var echo = new Pattern();
  it('it should be "zero - 1"when input is 2,2,0,1', function() {
		var echo = new Pattern(2,2,0,1);
    expect(echo.Pattern()).toEqual('zero - 1');
  });
  it('it should be "one - 2"when input is 2,2,1,2', function() {
		var echo = new Pattern(2,2,1,2);
    expect(echo.Pattern()).toEqual('one - 2');
  });
  it('it should be "two - 3"when input is 2,2,2,3', function() {
		var echo = new Pattern(2,2,2,3);
    expect(echo.Pattern()).toEqual('two - 3');
  });
  it('it should be "three - 4"when input is 2,2,3,4', function() {
		var echo = new Pattern(2,2,3,4);
    expect(echo.Pattern()).toEqual('three - 4');
  });
  it('it should be "four - 5"when input is 2,2,4,5', function() {
		var echo = new Pattern(2,2,4,5);
    expect(echo.Pattern()).toEqual('four - 5');
  });
  it('it should be "five - 6"when input is 2,2,5,6', function() {
		var echo = new Pattern(2,2,5,6);
    expect(echo.Pattern()).toEqual('five - 6');
  });
  it('it should be "six - 7"when input is 2,2,6,7', function() {
		var echo = new Pattern(2,2,6,7);
    expect(echo.Pattern()).toEqual('six - 7');
  });
  it('it should be "seven - 8"when input is 2,2,7,8', function() {
		var echo = new Pattern(2,2,7,8);
    expect(echo.Pattern()).toEqual('seven - 8');
  });
  it('it should be "eight - 9"when input is 2,2,8,9', function() {
		var echo = new Pattern(2,2,8,9);
    expect(echo.Pattern()).toEqual('eight - 9');
  });
  it('it should be "nine - 9"when input is 2,2,9,9', function() {
		var echo = new Pattern(2,2,9,9);
    expect(echo.Pattern()).toEqual('nine - 9');
  });
});

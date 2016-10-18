function Pattern(){
  var n = new first();
  var c = new last();
  var o = new Operator();
	this.start = function(pat,ope,num,char){
		var pat = [1,2];
		if(pat===1){
			return n.first(num)+o.Operator(ope)+c.last(char);
		}
		else if(pat===2){
			return c.last(char)+o.Operator(ope)+n.first(num);
		}
	}
}
function Operator(){
	this.toString = function(ope){
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
	this.toString = function(num){
		var num = [0,1,2,3,4,5,6,7,8,9];
		return num;
	}
}
function last(){
	this.toString = function(char){
		if(char===0){
			return 'Zero';
		}
		else if(char===1){
			return 'One';
		}
		else if(char===2){
			return 'Two';
		}
		else if(char===3){
			return 'Three';
		}
		else if(char===4){
			return 'Four';
		}
		else if(char===5){
			return 'Five';
		}
		else if(char===6){
			return 'Six';
		}
		else if(char===7){
			return 'Seven';
		}
		else if(char===8){
			return 'Eight';
		}
		else if(char===9){
			return 'Nine';
		}
	}
}

describe("Pattern()", function() {
  it('should be "1 + zero"when input is 1,1,1,0', function() {
		var echo = new Pattern();
    expect(echo.Pattern(1,1,1,0)).toEqual('1 + zero');
  });
  it('should be "2 + one"when input is 1,1,2,1', function() {
		var echo = new Pattern();
    expect(echo.Pattern(1,1,2,1)).toEqual('2 + one');
  });
  it('should be "3 + two"when input is 1,1,3,2', function() {
		var echo = new Pattern();
    expect(echo.Pattern(1,1,3,2)).toEqual('3 + two');
  });
  it('should be "4 + three"when input is 1,1,4,3', function(){
		var echo = new Pattern();
    expect(echo.Pattern(1,1,4,3)).toEqual('4 + three');
  });
  it('should be "5 + four"when input is 1,1,5,4', function(){
		var echo = new Pattern();
    expect(echo.Pattern(1,1,5,4)).toEqual('5 + four');
  });
  it('should be "6 + five"when input is 1,1,6,5', function(){
		var echo = new Pattern();
    expect(echo.Pattern(1,1,6,5)).toEqual('6 + five');
  });
  it('should be "7 + six"when input is 1,1,7,6', function(){
		var echo = new Pattern();
    expect(echo.Pattern(1,1,7,6)).toEqual('7 + six');
  });
  it('should be "8 + seven"when input is 1,1,8,7', function(){
		var echo = new Pattern();
    expect(echo.Pattern(1,1,8,7)).toEqual('8 + seven');
  });
  it('should be "9 + eight"when input is 1,1,9,8', function(){
		var echo = new Pattern();
    expect(echo.Pattern(1,1,9,8)).toEqual('9 + eight');
  });
  it('should be "0 + nine"when input is 1,1,0,9', function(){
		var echo = new Pattern();
    expect(echo.Pattern(1,1,0,9)).toEqual('0 + nine');
  });
});
describe("Pattern()", function() {
  it('it should be "zero - 1"when input is 2,2,0,1', function() {
		var echo = new Pattern();
    expect(echo.Pattern(2,2,0,1)).toEqual('zero - 1');
  });
  it('it should be "one - 2"when input is 2,2,1,2', function() {
		var echo = new Pattern();
    expect(echo.Pattern(2,2,1,2)).toEqual('one - 2');
  });
  it('it should be "two - 3"when input is 2,2,2,3', function() {
		var echo = new Pattern();
    expect(echo.Pattern(2,2,2,3)).toEqual('two - 3');
  });
  it('it should be "three - 4"when input is 2,2,3,4', function() {
		var echo = new Pattern();
    expect(echo.Pattern(2,2,3,4)).toEqual('three - 4');
  });
  it('it should be "four - 5"when input is 2,2,4,5', function() {
		var echo = new Pattern();
    expect(echo.Pattern(2,2,4,5)).toEqual('four - 5');
  });
  it('it should be "five - 6"when input is 2,2,5,6', function() {
		var echo = new Pattern();
    expect(echo.Pattern(2,2,5,6)).toEqual('five - 6');
  });
  it('it should be "six - 7"when input is 2,2,6,7', function() {
		var echo = new Pattern();
    expect(echo.Pattern(2,2,6,7)).toEqual('six - 7');
  });
  it('it should be "seven - 8"when input is 2,2,7,8', function() {
		var echo = new Pattern();
    expect(echo.Pattern(2,2,7,8)).toEqual('seven - 8');
  });
  it('it should be "eight - 9"when input is 2,2,8,9', function() {
		var echo = new Pattern();
    expect(echo.Pattern(2,2,8,9)).toEqual('eight - 9');
  });
  it('it should be "nine - 9"when input is 2,2,9,9', function() {
		var echo = new Pattern();
    expect(echo.Pattern(2,2,9,9)).toEqual('nine - 9');
  });
});

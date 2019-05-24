function convert(input, source, target) {

    function Converter(valueStr, source) {
        this.src = {
            value: valueStr,
            alphabet: source,
            base: source.length
        }
        this.decimal = this.toBase10();
    }

    Converter.prototype.toBase10 = function () {
        var srcValueArray = this.src.value.split("");
        var srcAlphabet = this.src.alphabet;
        var base = this.src.base;

        function alphabetToDecimal(char) {
            return srcAlphabet.indexOf(char);
        }

        function reduceDecimal(array, result) {
            var result = result || 0;
            result += Math.pow(base, array.length - 1) * array.shift();
            if (array.length === 0)
                return result;
            else
                return reduceDecimal(array, result);
        }

        return reduceDecimal(srcValueArray.map(alphabetToDecimal));
    }

    Converter.prototype.toBase = function (base, num, result) {
        var result = result || [];
        var num = num || this.decimal;
        result.unshift(num % base);
        if (num < base)
            return result;
        else
            return this.toBase(base, parseInt(num / base), result);
    }

    Converter.prototype.toAlphabet = function (alphabet) {
        var alphabetBaseIntArray = this.toBase(alphabet.length);

        function charMapper(el) {
            return alphabet.charAt(el);
        }
        return alphabetBaseIntArray.map(charMapper).join("");
    }
    var number = new Converter(input, source);

    return number.toAlphabet(target);
}
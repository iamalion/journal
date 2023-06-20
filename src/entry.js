class Entry {
    constructor(title, text) {
        this.title = title;
        this.text = text;
    }

    countWords() {
        const trimmed = this.text.trim();
        if (trimmed.length === 0)
            return 0;
        let words = trimmed.split(/\W+/);
        if (words[words.length -1] === "") 
            words.pop();
        return words.length  
    }

    countLetters () {
        const letters = this.text.match(/[a-z]/gi);
        const vowels = this.text.match(/[aeiou]/gi);
        return [vowels.length, letters.length - vowels.length]
    }

    getTeaser() {
        const trimmed = this.text.trim();
        if (trimmed.length === 0)
            return '';
        const sentences = trimmed.split(/[!.?]+/);
        const firstSentence = sentences[0];
        const words = firstSentence.match(/\w+/g);
        if (words.length > 8)
            return words.slice(0, 8).join(' ');
        return firstSentence;
    }
}

    
export default Entry;
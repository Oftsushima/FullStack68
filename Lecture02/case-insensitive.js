function censorword(sentence, word) {
    const regex = new RegExp(word, 'gi');
    const censoredText = sentence.replace(regex, '****');
    return censoredText;
}

const originalPost = "JavaScript is great. I love javascript because javascript is versatile.";
const cleanPost = censorword(originalPost, "javascript");
console.log(cleanPost);
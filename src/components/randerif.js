export default function renderIf(condition, content) {
    console.log("called render if")
    if (condition) {
        return content;
    } else {
        return null;
    }
}
const onSubmit = () => {
    const inputText = document.querySelector("#myInput").value
    if (!inputText) {
        alert("Please enter a text to translate!");
        return;
    } else {
        translate(inputText)
    }
}

const translate = (text) => fetch(`https://api.funtranslations.com/translate/minion.json?text=${text}`)
    .then((res) => res.json())
    .then((res) => document.querySelector(".output").innerText = res.contents.translated)
    .catch((err) => alert("Some error occurred. Please try again"))
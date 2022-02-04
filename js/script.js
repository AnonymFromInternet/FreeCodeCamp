

function previewUpdate() {

    document.getElementById("preview").innerHTML = marked.parse(document.getElementById("editor").value);
}


function setDefault() {
    const codeBlock = `    function codeBlock() {
        console.log("FreeCodeCamp");
    }`;


    const image = `![image](https://www.markdownguide.org/assets/images/tux.png)`;
    const list = `
* Item
* Item
* Item
* Item
    `;
    const blockQuote = "> Blockquote";
    const inline = `<dl>
        <dt>Definition List</dt>
        </dl>`;

    const text = "\n`Thank You for your time`";



    const defaultText = `### Preview\n
# Welcome to\n
## Previewer\n
There's also [link](https://www.freecodecamp.org)\n\n\n${text}
\n\n\n${inline}\n\n\n${blockQuote}\n\n\n${list}\n\n\n**Bolded Text**\n\n\n${image}\n\n\n${codeBlock}
    
    `;

    let editorField = document.getElementById("editor");

    editorField.value = defaultText;
    previewUpdate();


}

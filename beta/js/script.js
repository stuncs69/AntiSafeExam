const typer = document.getElementById("typer");
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function type() {
    ["privacy", "intergrity", "hippolydoculus"].forEach(async(word) => {
        let chars = word.split("");
        for (let i = 0; i < chars.length; i++) {
            await sleep(4000)
        }
    })
    await type()
}
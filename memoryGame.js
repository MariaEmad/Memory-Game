document.querySelector(".control-bottons span").onclick = function () {
    let name = prompt("Enter Your Name")
    if (name == null || name == "") {
        document.querySelector(".name span").innerHTML = "Player"
    } else {
        let uppercaseName = name.charAt(0).toUpperCase() + name.slice(1)
        document.querySelector(".name span").innerHTML = uppercaseName

    }
    document.querySelector(".control-bottons").remove()
}
let deuration = 1000
let blocksContainer = document.querySelector(".blocks")
let blocks = Array.from(blocksContainer.children)
let orderRange = [...Array(blocks.length).keys()]
console.log(orderRange);
shuffle(orderRange)
console.log(orderRange);

blocks.forEach((block, i) => {
    block.style.order = orderRange[i]
    block.addEventListener("click", function () {
        flipBlock(block)  
        
    })
});
function flipBlock(selectedBlock) {
    selectedBlock.classList.add("flip")
    let allfilpped = blocks.filter(flippedblock => flippedblock.classList.contains("flip"))
    if (allfilpped.length == 2) {
        console.log("ok")
        stopClicking()
        checkMatchedBLocks(allfilpped[0],allfilpped[1])
            
        };
    }


function stopClicking() {

    // Add Class No Clicking on Main Container
    blocksContainer.classList.add('no-clicking');
    setTimeout(() => {
        blocksContainer.classList.remove('no-clicking');

    },deuration)

}
function checkMatchedBLocks(first, second) {
    let triesele = document.querySelector('.tries span')
    if (first.dataset.photo === second.dataset.photo) {
        first.classList.remove("flip")
        first.classList.add("matched")
        second.classList.remove("flip")
        second.classList.add("matched")
        document.getElementById("success").play()

    } else {
        triesele.innerHTML = parseInt(triesele.innerHTML) + 1
        setTimeout(() => {
            
        first.classList.remove("flip")
        second.classList.remove("flip")
        }, deuration)
        document.getElementById("fail").play()
        

        
    }
}

function shuffle(array) {
    let current =array.length
    let random
    let temp
    while (current > 0) {
        random = Math.floor(Math.random() * current)
        current--
        temp = array[current]
        array[current] = array[random]
        array[random] = temp[current]
        return array
    }
}
// function noclickining() {
//     blocks.forEach(block => {
//         block.classList.add("no-click")
        
//     });
// }
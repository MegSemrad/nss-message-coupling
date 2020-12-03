import { useMessages } from "./MessageProvider.js"
import { Message } from "./Message.js"

const contentTarget = document.querySelector(".messages")
const eventHub = document.querySelector(".container")
/*
- '.container' in the index.html is the event hub because it is 
  the parent of both messages and themes
*/


// document.querySelector(".themes").addEventListener("click", e => {
    eventHub.addEventListener("chosenColor", event => {
        const color = event.detail.color
        
        contentTarget.classList = []
        contentTarget.classList.add(color)
    })
    
    /*
    - e stands for event it has a property of target to select that and get its id 
    */



export const MessageList = () => {
    const allMessages = useMessages()
    render(allMessages)
}


const render = messageArray => {
    const convertedMessages = messageArray.map(messageObject => {
        const messageHTML = Message(messageObject)
        return messageHTML
    })
    const combinedSections = convertedMessages.join("")
    contentTarget.innerHTML = combinedSections
}



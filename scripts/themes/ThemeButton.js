const contentTarget = document.querySelector(".themes")

export const ThemeButtons = () => {
    contentTarget.innerHTML = `
        <button class="themeButton" id="themeButton--red">Red</button>
        <button class="themeButton" id="themeButton--purple">Purple</button>
        <button class="themeButton" id="themeButton--blue">Blue</button>
        <button class="themeButton" id="themeButton--green">Green</button>
    `
}
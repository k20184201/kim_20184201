const MyComponent=({highlighted, theme})=>(
    <div className={'MyComponent${theme}${highlighted?'highlighted':''}'}>
        Hello
        </div>

);
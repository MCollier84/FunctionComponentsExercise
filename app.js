// 1a
function GhostBusters() {
    return `Who you gonna call?`;
}
console.log(GhostBusters);

// 1b
ReactDOM.render(
    <GhostBusters />,
    document.getElementById(`root`)
);

// 2a
function TagLine() {
    return <h1>We're ready to believe you</h1>;
}

// 2b
ReactDOM.render(
    <TagLine />,
    document.getElementById(`root`)
);

// 3a
function Janine() {
    return (
        <div>
            <h2>I've quit better jobs than this.</h2>
            <h2>Ghostbusters, whaddya want?</h2>
        </div>
    );
}
// console.log(Janine);

// 3b
ReactDOM.render(
    <Janine />,
    document.getElementById(`root`)
);

// 4a
// div>ul>li*3^p ***shortcut to complete the HTML***
function MassHysteria() {
    return (
        <div>
            <ul>
                <li>Fire and brimstone coming down from the skies! Rivers and seas boiling!</li>
                <li>Forty years of darkness! Earthquakes! Volcanoes!</li>
                <li>The dead rising form the grave!</li>
                <p>Human sacrifice! Dogs and cats, living together! Mass hysteria!</p>
            </ul>
        </div>
    );
}

// 4b
ReactDOM.render(
    <MassHysteria />,
    document.getElementById(`root`)
);

// 5a 
function GhostBustersLogo() {
    return <img src="https://cdn.pixabay.com/photo/2016/07/13/18/41/ghostbusters-1515155_1280.jpg" alt="" />;
}

// 5b
ReactDOM.render(
    <GhostBustersLogo />,
    document.getElementById(`root`)
);

// 6a
function ToolsTalent() {
    // 6b 
    const w = `We`;
    // 6c
    return (
        <div>
            <h1>{w} had the tools.</h1>
            <h3>{w} had the talent.</h3>
        </div>
    );
}

// 6d
ReactDOM.render(
    <ToolsTalent />,
    document.getElementById(`root`)
);

// 7a
function GhostBustersAll() {
    return (
        <div>
            <GhostBusters />
            <TagLine />
            <Janine />
            <MassHysteria />
            <GhostBustersLogo />
            <ToolsTalent />
        </div>
    );
}

// 7b
ReactDOM.render(
    <GhostBustersAll/>,
    document.getElementById(`root`)
);

// ******BONUS *******
// 8a
function DiceRoll(){
    // 8b
    const die1 = Math.floor(Math.random() * 6) + 1;
    // 8c
    const die2 = Math.floor(Math.random() * 6) + 1;
    // 8d
    return(
      <div>
        <h1>{(die1 === 1 && die2 === 1) ? `SNAKE EYES` : `${die1} & ${die2}`}</h1>
      </div>
    );
  }
  
  // 8b commented out to see the rest of the Exercise
//   ReactDOM.render(
//     <DiceRoll />,
//     document.getElementById(`root`)
//   );
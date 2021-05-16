const style = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 36,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fill: ['#ffffff', '#00ff99'], // gradient
    stroke: '#4a1850',
    strokeThickness: 5,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: true,
    wordWrapWidth: 440,
});
const styleuj = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 36,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fill: ['#ffffff', '#000000'], // gradient
    stroke: '#F40A0A',
    strokeThickness: 5,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: true,
    wordWrapWidth: 440,
});
const rendstyle = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 15,
    fontStyle: 'italic',
    fontWeight: 'bold',    
});
const felstyle = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: 'bold',    
});


export {style,rendstyle,felstyle,styleuj}
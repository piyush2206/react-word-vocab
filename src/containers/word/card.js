import React from 'react';

export default class Card extends React.Component {
    render() {
        const cardStyle = {
            height: '440px'
        }
        const imgStype = {
            height: '300px',
            display: 'block',
            margin: 'auto'
        }
        const { objWord } = this.props;
        const imgSrc = `http://appsculture.com/vocab/images/${objWord.id}.png`
        const altName = objWord.word
        return (
            <div className="col-sm-6 col-md-4 col-lg-4 well well-lg" style={cardStyle}>
                {/* <div padding-left="($spacer-x * .5) !important"> */}
                    <img src={imgSrc} alt={altName} style={imgStype} />
                    <h3> {objWord.word} </h3>
                    <p> {objWord.meaning} </p>
                {/* </div> */}
            </div>
        )
    }
}
/* 
id: 1,
word: "abacus",
variant: 1,
meaning: "frame with balls for calculating",
ratio: 0.9125
 */
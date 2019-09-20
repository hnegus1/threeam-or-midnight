import React from 'react';
import questions from './questions.json';
import {Button} from 'react-bootstrap';

export class Quiz extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            songNumber: Math.floor(Math.random() * questions.length)
        }
    }

    nextQuestion(e){
        console.log("Before setting " + this.state.songNumber);
        this.setState({songNumber: Math.floor(Math.random() * questions.length)})
    }

    render(){
        console.log("Before rendering " + this.state.songNumber);
        return(
            <div>
                <div class='title'><h1>3am or Midnight?</h1></div>
                <div class='question'><Question songNumber={this.state.songNumber}/></div>
                <div class='new-question'><Button onClick={(e) => this.nextQuestion(e)}>Next Question</Button></div>
            </div>   
        );
    }     
}

export class Question extends React.Component{
    
    
    constructor(props){
        console.log("new question!");
        super(props);
        var songNumber = this.props.songNumber;
        this.state = {
            number: songNumber,
            name: questions[songNumber]['name'],
            artist: questions[songNumber]['artist'],
            time: questions[songNumber]['time'],
            url: "https://open.spotify.com/embed/track/" + questions[songNumber]['url'],
            reason: questions[songNumber]['reason'],
            answerText: '',
            buttonsDisabled: false
        }
    }

    componentDidUpdate(oldProps){
        const newProps = this.props
        if(oldProps.songNumber !== newProps.songNumber){
            var songNumber = newProps.songNumber
            this.setState(
                {
                    number: songNumber,
                    name: questions[songNumber]['name'],
                    artist: questions[songNumber]['artist'],
                    time: questions[songNumber]['time'],
                    url: "https://open.spotify.com/embed/track/" + questions[songNumber]['url'],
                    reason: questions[songNumber]['reason'],
                    answerText: '',
                    buttonsDisabled: false
                }
            )
        }
    }

    render(){
        console.log("in question, state is " + this.state.number)
        console.log("in props, it is " + this.props.songNumber)
        return(
            <div>
                <div class='question-text'><h3>Does {this.state.name} by {this.state.artist} feel like a Midnight song or a 3AM song?</h3></div>
                <div class='song-embed'><iframe title="song" src={this.state.url} width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></div>
                <div class='button-midnight'>
                    <Button 
                        variant='warning' 
                        onClick={(e) => this.answerQuestion(e, 'midnight')} 
                        href='#' 
                        disabled={this.state.buttonsDisabled}>
                            Midnight
                    </Button>
                </div>
                <div class='button-three'>
                    <Button 
                        variant='dark' 
                        onClick={(e) => this.answerQuestion(e, 'three')} 
                        href='#' 
                        disabled={this.state.buttonsDisabled}>
                            3AM
                    </Button>
                </div>
                <div class='answer-text'><p>{this.state.answerText}</p></div>                
            </div>
        )
    }

    answerQuestion(e, time){
        if(this.state.time === time){
            this.setState(
                {
                    answerText: "Agreed! Because " + this.state.reason,
                    buttonsDisabled: true,
                }
            );
        }else{
            this.setState(
                {
                    answerText: "I disagree! Because " + this.state.reason,
                    buttonsDisabled: true,
                }
            );   
        }
    }
}


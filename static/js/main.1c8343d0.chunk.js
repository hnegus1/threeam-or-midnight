(window["webpackJsonpthreeam-or-midnight"]=window["webpackJsonpthreeam-or-midnight"]||[]).push([[0],{1:function(e){e.exports=JSON.parse('[{"name":"Midnight","artist":"Toj","time":"midnight","url":"7kRByLxEHAnkshWXUyCawo","reason":"it\'s called Midnight"},{"name":"3am","artist":"Oui Lele","time":"three","url":"5LwxaewIXhdkWL0EDncFwY","reason":"it\'s called 3am"},{"name":"dont say a word","artist":"Idealism","time":"three","url":"20QoSODfbyi5PxpRTtfw1s","reason":"the drums are very chill and sleepy"},{"name":"Seen You","artist":"B-Side","time":"three","url":"22pg8Kgt6ynF0i8RZIfDHT","reason":"it\'s avery relaxing song. Perfect to just play and look out the window and think about life."},{"name":"Her","artist":"eery","time":"midnight","url":"4kVmLlBnLcfXIZIIhq3VUq","reason":"the drums are a little heavy. Vocals certainly possess a Midnight quality"}]')},14:function(e,t,a){e.exports=a(21)},19:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(12),i=a.n(r);function o(){return s.a.createElement("div",{class:"footer"},s.a.createElement("p",null,"Made with React. Inspired by ",s.a.createElement("a",{href:"https://pixelastic.github.io/pokemonorbigdata/"},"Pok\xe9mon or Big Data")," and desire to follow really stupid ideas through to the end."))}var l=a(3),u=a(5),c=a(6),m=a(10),d=a(7),h=a(9),b=a(1),g=a(23),p=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={songNumber:Math.floor(Math.random()*b.length)},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"nextQuestion",value:function(e){console.log("Before setting "+this.state.songNumber),this.setState({songNumber:Math.floor(Math.random()*b.length)})}},{key:"render",value:function(){var e=this;return console.log("Before rendering "+this.state.songNumber),s.a.createElement("div",null,s.a.createElement("div",{class:"title"},s.a.createElement("h1",null,"3am or Midnight?")),s.a.createElement("div",{class:"question"},s.a.createElement(v,{songNumber:this.state.songNumber})),s.a.createElement("div",{class:"new-question"},s.a.createElement(g.a,{onClick:function(t){return e.nextQuestion(t)}},"Next Question")))}}]),t}(s.a.Component);function f(e){e=this.props.songNumber,this.setstate({number:e,name:b[e].name,artist:b[e].artist,time:b[e].time,url:"https://open.spotify.com/embed/track/"+b[e].url,reason:b[e].reason,answerText:"",buttonsDisabled:!1})}var v=function(e){function t(e){var a;Object(u.a)(this,t),console.log("new question!");var n=(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).props.songNumber;return a.state={number:n,name:b[n].name,artist:b[n].artist,time:b[n].time,url:"https://open.spotify.com/embed/track/"+b[n].url,reason:b[n].reason,answerText:"",buttonsDisabled:!1},f=f.bind(Object(l.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this.props;if(e.songNumber!==t.songNumber){var a=t.songNumber;this.setState({number:a,name:b[a].name,artist:b[a].artist,time:b[a].time,url:"https://open.spotify.com/embed/track/"+b[a].url,reason:b[a].reason,answerText:"",buttonsDisabled:!1})}}},{key:"render",value:function(){var e=this;return console.log("in question, state is "+this.state.number),console.log("in props, it is "+this.props.songNumber),s.a.createElement("div",null,s.a.createElement("div",{class:"question-text"},s.a.createElement("h3",null,"Does ",this.state.name," by ",this.state.artist," feel like a Midnight song or a 3AM song?")),s.a.createElement("div",{class:"song-embed"},s.a.createElement("iframe",{title:"song",src:this.state.url,width:"300",height:"80",frameborder:"0",allowtransparency:"true",allow:"encrypted-media"})),s.a.createElement("div",{class:"button-midnight"},s.a.createElement(g.a,{variant:"warning",onClick:function(t){return e.answerQuestion(t,"midnight")},href:"#",disabled:this.state.buttonsDisabled},"Midnight")),s.a.createElement("div",{class:"button-three"},s.a.createElement(g.a,{variant:"dark",onClick:function(t){return e.answerQuestion(t,"three")},href:"#",disabled:this.state.buttonsDisabled},"3AM")),s.a.createElement("div",{class:"answer-text"},s.a.createElement("p",null,this.state.answerText)))}},{key:"answerQuestion",value:function(e,t){this.state.time===t?this.setState({answerText:"Agreed! Because "+this.state.reason,buttonsDisabled:!0}):this.setState({answerText:"I disagree! Because "+this.state.reason,buttonsDisabled:!0})}}]),t}(s.a.Component);a(19),a(20);i.a.render(s.a.createElement((function(){return s.a.createElement("div",null,s.a.createElement("div",{class:"main-content"},s.a.createElement(p,null)),s.a.createElement("div",{class:"footer"},s.a.createElement(o,null)))}),null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.1c8343d0.chunk.js.map
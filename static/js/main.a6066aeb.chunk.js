(window["webpackJsonpthreeam-or-midnight"]=window["webpackJsonpthreeam-or-midnight"]||[]).push([[0],{1:function(e){e.exports=JSON.parse('[{"name":"Midnight","artist":"Toj","time":"midnight","url":"7kRByLxEHAnkshWXUyCawo","reason":"it\'s called Midnight"},{"name":"3am","artist":"Oui Lele","time":"three","url":"5LwxaewIXhdkWL0EDncFwY","reason":"it\'s called 3am"},{"name":"dont say a word","artist":"Idealism","time":"three","url":"20QoSODfbyi5PxpRTtfw1s","reason":"the drums are very chill and sleepy"},{"name":"Seen You","artist":"B-Side","time":"three","url":"22pg8Kgt6ynF0i8RZIfDHT","reason":"it\'s a very relaxing song. Perfect to just play and look out the window and think about life."},{"name":"Her","artist":"eery","time":"midnight","url":"4kVmLlBnLcfXIZIIhq3VUq","reason":"the drums are a little heavy. Vocals certainly possess a Midnight quality"},{"name":"controlla","artist":"Idealism","time":"three","url":"7pAwFD2HMqGxTnDq8ujxMZ","reason":"of the low-key drums and relaxing piano tunes"},{"name":"Le Sud","artist":"L\'Ind\xe9cis","time":"midnight","url":"1NtmRnY9rghNeeTJD8wPNC","reason":"guitars are almost exclusively limited to Midnight. It\'s close to 3AM though"},{"name":"Motionless Thoughts","artist":"Approaching Nirvana","time":"three","url":"3CihB4n4qMW0uygG4ifheh","reason":"very relaxing. Sounds of the sea, chill piano. Nothing heavy"},{"name":"Things Work out Eventually","artist":"fantompower","time":"midnight","url":"1m3yRKDr2YJOK42d5ovteo","reason":"despite the chilled nature of the song, it still gives a feeling of wanting to get things done - the day isn\'t over yet"},{"name":"Nowhere Else","artist":"Kupla","time":"midnight","url":"7y2FbuAWnK4V5Bld3NoLs0","reason":"while the drums are more muted than your average Midnight song, it still feels busy enough to keep it away from a 3AM listen"},{"name":"Damn Fine Coffee","artist":"Mtbrd","time":"midnight","url":"2YacFgN79ou7TjlT4VNK6A","reason":"the brass makes this undoubtably a Midnight song"},{"name":"5:32pm","artist":"The Deli","time":"midnight","url":"7qrBYrivpvfXUPBMmqh3dA","reason":"despite the reasonably chilled melody, the drums make it clear there is still many more hours in the night to come"},{"name":"cozy winter","artist":"j\'san","time":"midnight","url":"3b63o7pis3sznct3Z6EN24","reason":"it\'s been a long day. It\'s Midnight, but you don\'t feel like sleeping. You make a cup of tea or maybe even some coffee and see what\'s on Netflix."},{"name":"She Passed Away Alone at Sea","artist":"Owsey","time":"three","url":"5xriCjsPYviq0fkqQre4xC","reason":"you wake up and realise it\'s 3AM. You look out the window to see the lights. Or perhaps you look out into the fields and wonder if there\'s anyone out there."},{"name":"Long Espresso","artist":"o k h o and Saito","time":"midnight","url":"0qe0REpyueaBakSU0JA7o9","reason":"anything that mentions coffee is almost a guarenteed Midnight-er. The synth gives off some kind of funky energy."},{"name":"Again","artist":"Wun Two","time":"midnight","url":"24Jk4wYlLRXI9TUMdkHoMN","reason":"drums have a moderate amount of energy. Vocals are a good sign of a Midnight-er"},{"name":"Matt","artist":"Harris Cole","time":"three","url":"5h9RpMggjK0TYXOjV3AO70","reason":"the drums may be heavy but they are also slow. A song where you think about life, but not too hard."},{"name":"Sleepyface","artist":"Biocratic","time":"midnight","url":"0J1vHScmNyuns9tMlcYvRy","reason":"lot\'s going on here makes it a pretty clear Midnight-er. Great bass."},{"name":"Small Little Green Cubes","artist":"Solar Fields","time":"midnight","url":"1okKndEpKBnThy8t1zUumz","reason":"can be quite loud, but the buildup prepares you for it. "}]')},13:function(e,t,a){e.exports=a(20)},18:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(11),r=a.n(s);function o(){return i.a.createElement("div",{class:"footer"},i.a.createElement("p",null,"Made with React. Inspired by ",i.a.createElement("a",{href:"https://pixelastic.github.io/pokemonorbigdata/"},"Pok\xe9mon or Big Data")," and the desire to follow really stupid ideas through to the end. I will add more songs at some point."))}var l=a(4),u=a(5),m=a(8),h=a(6),d=a(9),c=a(1),g=a(22),b=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={songNumber:Math.floor(Math.random()*c.length)},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"nextQuestion",value:function(e){console.log("Before setting "+this.state.songNumber),this.setState({songNumber:Math.floor(Math.random()*c.length)})}},{key:"render",value:function(){var e=this;return console.log("Before rendering "+this.state.songNumber),i.a.createElement("div",null,i.a.createElement("div",{class:"title"},i.a.createElement("h1",null,"3am or Midnight?")),i.a.createElement("div",{class:"question"},i.a.createElement(f,{songNumber:this.state.songNumber})),i.a.createElement("div",{class:"new-question"},i.a.createElement(g.a,{onClick:function(t){return e.nextQuestion(t)}},"Next Question")))}}]),t}(i.a.Component),f=function(e){function t(e){var a;Object(l.a)(this,t),console.log("new question!");var n=(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).props.songNumber;return a.state={number:n,name:c[n].name,artist:c[n].artist,time:c[n].time,url:"https://open.spotify.com/embed/track/"+c[n].url,reason:c[n].reason,answerText:"",buttonsDisabled:!1},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this.props;if(e.songNumber!==t.songNumber){var a=t.songNumber;this.setState({number:a,name:c[a].name,artist:c[a].artist,time:c[a].time,url:"https://open.spotify.com/embed/track/"+c[a].url,reason:c[a].reason,answerText:"",buttonsDisabled:!1})}}},{key:"render",value:function(){var e=this;return console.log("in question, state is "+this.state.number),console.log("in props, it is "+this.props.songNumber),i.a.createElement("div",null,i.a.createElement("div",{class:"question-text"},i.a.createElement("h3",null,"Does ",this.state.name," by ",this.state.artist," feel like a Midnight song or a 3AM song?")),i.a.createElement("div",{class:"song-embed"},i.a.createElement("iframe",{title:"song",src:this.state.url,width:"300",height:"80",frameborder:"0",allowtransparency:"true",allow:"encrypted-media"})),i.a.createElement("div",{class:"button-midnight"},i.a.createElement(g.a,{variant:"warning",onClick:function(t){return e.answerQuestion(t,"midnight")},href:"#",disabled:this.state.buttonsDisabled},"Midnight")),i.a.createElement("div",{class:"button-three"},i.a.createElement(g.a,{variant:"dark",onClick:function(t){return e.answerQuestion(t,"three")},href:"#",disabled:this.state.buttonsDisabled},"3AM")),i.a.createElement("div",{class:"answer-text"},i.a.createElement("p",null,this.state.answerText)))}},{key:"answerQuestion",value:function(e,t){this.state.time===t?this.setState({answerText:"Agreed! Because "+this.state.reason,buttonsDisabled:!0}):this.setState({answerText:"I disagree! Because "+this.state.reason,buttonsDisabled:!0})}}]),t}(i.a.Component);a(18),a(19);r.a.render(i.a.createElement((function(){return i.a.createElement("div",null,i.a.createElement("div",{class:"main-content"},i.a.createElement(b,null)),i.a.createElement("div",{class:"footer"},i.a.createElement(o,null)))}),null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.a6066aeb.chunk.js.map
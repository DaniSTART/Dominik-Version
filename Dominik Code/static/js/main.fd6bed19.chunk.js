(this["webpackJsonpacceptance-package"]=this["webpackJsonpacceptance-package"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),i=a.n(r),s=a(4),o=a.n(s),l=(a(15),a(16),[{description:"Ever wondered what it takes to become a tech entrepreneur? Would you like to find out how to go from an idea to a viable product? Then START Hack - <strong>Europe's leading hackathon for aspiring tech entrepreneurs</strong> is the place to be! <br>This\xa0March 19th - 21st, <strong>600+\xa0students from all over the world</strong> will unite online to celebrate technology and innovate in one, continent-spanning event. <br><br><strong>Apply now</strong> on <a href='https://starthack.eu'>starthack.eu</a> to kickstart your entrepreneurial career!<br><strong>#STARTHack21 #START_Global</strong>",postCategory:"hack_participants",url:"../posts/1_hack.svg"},{description:"<strong>START Summit is back!</strong> Looking forward to a week packed with top keynotes and unique networking opportunities with people from all over Europe.<br><br><strong>Join me</strong> and other aspiring entrepreneurs, founders, and investors from March 22th to 27th.<br><strong>Get your ticket now</strong> on <a href='https://startsummit.ch'>startsummit.ch</a><br><br><p style='text-align: left;'><strong>#STARTSummit21 #startglobal #innovation #entrepreneurship</strong></p>",postCategory:"summit_participants",url:"../posts/2_summit.svg"},{description:"<strong>START Summit is back!</strong> Looking forward to a week packed with top keynotes and unique networking opportunities with people from all over Europe.<br><br><strong>Join me</strong> and other aspiring entrepreneurs, founders, and investors from March 22th to 27th.<br><strong>Get your ticket now</strong> on <a href='https://startsummit.ch'>startsummit.ch</a><br><br><p style='text-align: left;'><strong>#STARTSummit21 #startglobal #innovation #entrepreneurship</strong></p>",postCategory:"summit_participants",url:"../posts/1_summit.svg"}]),c=a(5),p=a(6),d=a(9),g=a(8),h=a(3),u=a.n(h),m=a(7),b=a.n(m),f=(a(18),a(19)),v=f.saveSvgAsPng,j=f.svgAsPngUri,k={scale:1,encoderOptions:1,backgroundColor:"white"},y=function(e){Object(d.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleClick=function(){if(!0===n.state.imageUploaded){n.setState({downloading:!0});var e=document.getElementById("svg-image-"+n.props.id);j(e,k).then((function(){v(e,"personal_post.png"),n.setState({downloading:!1})}))}},n.handleChangeScale=function(e){n.setState({rangeValue:e.target.value}),document.getElementById("replace-pattern-"+n.props.id).children[0].setAttribute("transform","translate("+(1-n.state.rangeValue)/2+" "+(1-n.state.rangeValue*n.state.imgScale[1]/n.state.imgScale[0])/2+") scale("+n.state.imgScale[0]*n.state.rangeValue+" "+n.state.imgScale[1]*n.state.rangeValue+")")},n.handleImageChange=function(e){var t=e.target.files[0];try{b.a.imageFileResizer(t,600,600,"PNG",100,0,(function(e){n.setState({imageUploaded:!0,image:e,rangeValue:1}),n.changeSVG(e)}),"base64",600,600)}catch(a){console.log(a)}},n.state={imageUploaded:!1,image:null,postImage:null,rangeValue:1,imgScale:[null,null],downloading:!1},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.loadSVG()}},{key:"loadSVG",value:function(){var e=this;u()(this.props.postUrl).then((function(e){return e.ok?e.text():Promise.reject(new Error("Server Error"))})).then((function(t){for(var a=(t=t.replaceAll(/<svg width="([0-9]*?)" height="([0-9]*?)"/g,'<svg id="svg-image" width="100%" height="100%"')).match(/(?:id=").*?(?=")/g),n=0;n<a.length;n++)a[n]=a[n].replace('id="',""),t=t.replaceAll(a[n],a[n]+"-"+e.props.id);e.setState({postImage:t});var r=document.getElementById("replace-pattern-"+e.props.id),i=String(r.innerHTML.match(/(?:scale\()[0-9\.+-\s]+/g)),s=(i=i.replace("scale(","").split(" "))[0],o=i[i.length-1];i=[s,o];e.setState({imgScale:i,rangeValue:1}),r.children[0].setAttribute("transform","translate(0 "+(1-1*i[1]/i[0])/2+") scale("+1*s+" "+1*o+")")}))}},{key:"changeSVG",value:function(e){var t=this;u()(this.props.postUrl).then((function(e){return e.ok?e.text():Promise.reject(new Error("Server Error"))})).then((function(a){for(var n=(a=a.replaceAll(/<svg width="([0-9]*?)" height="([0-9]*?)"/g,'<svg id="svg-image" width="100%" height="100%"')).match(/(?:id=").*?(?=")/g),r=0;r<n.length;r++)n[r]=n[r].replace('id="',""),a=a.replaceAll(n[r],n[r]+"-"+t.props.id);var i=document.getElementById("replace-image-"+t.props.id).width.baseVal.value,s=document.getElementById("replace-image-"+t.props.id).height.baseVal.value,o='<image id="replace-image-'+t.props.id+'" width="'+i+'" height="'+s+'" xlink:href="'+e+'"';a=a.replaceAll(/<image id="replace-image(.*?)xlink:href="(.*?)"/g,o);var l=document.getElementById("replace-pattern-"+t.props.id),c=t.state.imgScale;t.setState({postImage:a,rangeValue:1}),l.children[0].setAttribute("transform","translate(0) scale("+1*c[0]+" "+1*c[1]+")")}))}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"d-flex",children:Object(n.jsxs)("div",{className:"card m-4",style:{width:"20rem"},children:[Object(n.jsx)("div",{className:"card-img-top post-img",dangerouslySetInnerHTML:{__html:this.state.postImage}}),Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("div",{children:Object(n.jsx)("p",{className:"post-description",dangerouslySetInnerHTML:{__html:this.props.description}})}),Object(n.jsxs)("div",{className:"d-flex flex-no-wrap d-flex justify-content-center align-items-center",children:[Object(n.jsx)("i",{className:"fas fa-search-minus fa-xs"}),Object(n.jsx)("input",{type:"range",min:"0.2",max:"1.8",value:this.state.rangeValue,onChange:this.handleChangeScale,step:"0.01"}),Object(n.jsx)("i",{className:"fas fa-search-plus fa-xs"})]}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{onClick:this.handleImageUpload,id:"own",className:"tile",children:[Object(n.jsx)("label",{htmlFor:"file-input"+this.props.id,className:"btn btn-primary active",children:!0===this.state.imageUploaded?"Change image":"Add your image"}),Object(n.jsx)("input",{id:"file-input"+this.props.id,className:"file-input",type:"file",name:"name",accept:"image/png, image/jpeg",onChange:this.handleImageChange})]}),Object(n.jsx)("a",{href:"#",className:"btn btn-primary "+(!0===this.state.imageUploaded?"active":""),onClick:this.handleClick,children:"Download PNG"})]})]})]})})}}]),a}(i.a.Component);var w=function(){var e=l.map((function(e,t){if("hack_participants"===e.postCategory)return Object(n.jsx)(y,{title:e.title,description:e.description,postUrl:e.url,id:t})}));return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("div",{children:Object(n.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,id:"bg-video",children:Object(n.jsx)("source",{src:"../videos/bg_video.mp4",type:"video/mp4",allow:"autoplay;"})})}),Object(n.jsxs)("div",{className:"main d-flex",children:[Object(n.jsxs)("div",{className:"info-box col-md-4",children:[Object(n.jsx)("h1",{children:"Create your custom Post"}),Object(n.jsx)("p",{children:"Let your friends know that you are participating at START Hack. Take the opportunity to create your own personalized post and share it on Instagram, LinkedIn or Facebook."})]}),e,Object(n.jsx)("div",{className:"disclaimer",children:"Your personalized post will be generated directly in your browser, therefore, your pictures will not be uploaded to nor be stored on any server."})]})]})},x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,21)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),i(e),s(e)}))};o.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(w,{})}),document.getElementById("root")),x()}},[[20,1,2]]]);
//# sourceMappingURL=main.fd6bed19.chunk.js.map
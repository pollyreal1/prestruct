(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{32:function(e){e.exports=JSON.parse('{"contractName":"SimpleStorage","abi":[{"constant":false,"inputs":[{"internalType":"uint256","name":"x","type":"uint256"}],"name":"set","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"get","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}],"metadata":"{\\"compiler\\":{\\"version\\":\\"0.5.16+commit.9c3226ce\\"},\\"language\\":\\"Solidity\\",\\"output\\":{\\"abi\\":[{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"get\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"x\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"set\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"}],\\"devdoc\\":{\\"methods\\":{}},\\"userdoc\\":{\\"methods\\":{}}},\\"settings\\":{\\"compilationTarget\\":{\\"project:/contracts/SimpleStorage.sol\\":\\"SimpleStorage\\"},\\"evmVersion\\":\\"istanbul\\",\\"libraries\\":{},\\"optimizer\\":{\\"enabled\\":false,\\"runs\\":200},\\"remappings\\":[]},\\"sources\\":{\\"project:/contracts/SimpleStorage.sol\\":{\\"keccak256\\":\\"0x512df1603c5f878921707d236bc53d974afe05b4d9de4b6094249bac5ab60efe\\",\\"urls\\":[\\"bzz-raw://0d6de97971b1c387f984fa7ea1d9ec10f8a63d68cc63bf8bd00d8c3a7c9e3ee1\\",\\"dweb:/ipfs/Qmbt92T34sHzedfJjDsvbisvLhRtghNwS6VW8tqrGkrqTD\\"]}},\\"version\\":1}","bytecode":"0x608060405234801561001057600080fd5b5060c68061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c806360fe47b11460375780636d4ce63c146062575b600080fd5b606060048036036020811015604b57600080fd5b8101908080359060200190929190505050607e565b005b60686088565b6040518082815260200191505060405180910390f35b8060008190555050565b6000805490509056fea265627a7a7231582044ccb2c2d46346d523107088f3e26a4c8a2ec3ec8b2e3a6edb1bc8574d5c5f5264736f6c63430005100032","deployedBytecode":"0x6080604052348015600f57600080fd5b506004361060325760003560e01c806360fe47b11460375780636d4ce63c146062575b600080fd5b606060048036036020811015604b57600080fd5b8101908080359060200190929190505050607e565b005b60686088565b6040518082815260200191505060405180910390f35b8060008190555050565b6000805490509056fea265627a7a7231582044ccb2c2d46346d523107088f3e26a4c8a2ec3ec8b2e3a6edb1bc8574d5c5f5264736f6c63430005100032","sourceMap":"66:176:1:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;66:176:1;;;;;;;","deployedSourceMap":"66:176:1:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;66:176:1;;;;;;;;;;;;;;;;;;;;;;;;113:53;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;113:53:1;;;;;;;;;;;;;;;;;:::i;:::-;;170:70;;;:::i;:::-;;;;;;;;;;;;;;;;;;;113:53;160:1;147:10;:14;;;;113:53;:::o;170:70::-;206:4;225:10;;218:17;;170:70;:::o","source":"// SPDX-License-Identifier: MIT\\npragma solidity >=0.4.21 <0.7.0;\\n\\ncontract SimpleStorage {\\n  uint storedData;\\n\\n  function set(uint x) public {\\n    storedData = x;\\n  }\\n\\n  function get() public view returns (uint) {\\n    return storedData;\\n  }\\n}\\n","sourcePath":"/home/paul/Documents/Works/construct/contracts/SimpleStorage.sol","ast":{"absolutePath":"project:/contracts/SimpleStorage.sol","exportedSymbols":{"SimpleStorage":[59]},"id":60,"nodeType":"SourceUnit","nodes":[{"id":38,"literals":["solidity",">=","0.4",".21","<","0.7",".0"],"nodeType":"PragmaDirective","src":"32:32:1"},{"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":59,"linearizedBaseContracts":[59],"name":"SimpleStorage","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":40,"name":"storedData","nodeType":"VariableDeclaration","scope":59,"src":"93:15:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":39,"name":"uint","nodeType":"ElementaryTypeName","src":"93:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"body":{"id":49,"nodeType":"Block","src":"141:25:1","statements":[{"expression":{"argumentTypes":null,"id":47,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":45,"name":"storedData","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":40,"src":"147:10:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":46,"name":"x","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":42,"src":"160:1:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"147:14:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":48,"nodeType":"ExpressionStatement","src":"147:14:1"}]},"documentation":null,"id":50,"implemented":true,"kind":"function","modifiers":[],"name":"set","nodeType":"FunctionDefinition","parameters":{"id":43,"nodeType":"ParameterList","parameters":[{"constant":false,"id":42,"name":"x","nodeType":"VariableDeclaration","scope":50,"src":"126:6:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":41,"name":"uint","nodeType":"ElementaryTypeName","src":"126:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"125:8:1"},"returnParameters":{"id":44,"nodeType":"ParameterList","parameters":[],"src":"141:0:1"},"scope":59,"src":"113:53:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":57,"nodeType":"Block","src":"212:28:1","statements":[{"expression":{"argumentTypes":null,"id":55,"name":"storedData","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":40,"src":"225:10:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":54,"id":56,"nodeType":"Return","src":"218:17:1"}]},"documentation":null,"id":58,"implemented":true,"kind":"function","modifiers":[],"name":"get","nodeType":"FunctionDefinition","parameters":{"id":51,"nodeType":"ParameterList","parameters":[],"src":"182:2:1"},"returnParameters":{"id":54,"nodeType":"ParameterList","parameters":[{"constant":false,"id":53,"name":"","nodeType":"VariableDeclaration","scope":58,"src":"206:4:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":52,"name":"uint","nodeType":"ElementaryTypeName","src":"206:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"205:6:1"},"scope":59,"src":"170:70:1","stateMutability":"view","superFunction":null,"visibility":"public"}],"scope":60,"src":"66:176:1"}],"src":"32:211:1"},"legacyAST":{"attributes":{"absolutePath":"project:/contracts/SimpleStorage.sol","exportedSymbols":{"SimpleStorage":[59]}},"children":[{"attributes":{"literals":["solidity",">=","0.4",".21","<","0.7",".0"]},"id":38,"name":"PragmaDirective","src":"32:32:1"},{"attributes":{"baseContracts":[null],"contractDependencies":[null],"contractKind":"contract","documentation":null,"fullyImplemented":true,"linearizedBaseContracts":[59],"name":"SimpleStorage","scope":60},"children":[{"attributes":{"constant":false,"name":"storedData","scope":59,"stateVariable":true,"storageLocation":"default","type":"uint256","value":null,"visibility":"internal"},"children":[{"attributes":{"name":"uint","type":"uint256"},"id":39,"name":"ElementaryTypeName","src":"93:4:1"}],"id":40,"name":"VariableDeclaration","src":"93:15:1"},{"attributes":{"documentation":null,"implemented":true,"isConstructor":false,"kind":"function","modifiers":[null],"name":"set","scope":59,"stateMutability":"nonpayable","superFunction":null,"visibility":"public"},"children":[{"children":[{"attributes":{"constant":false,"name":"x","scope":50,"stateVariable":false,"storageLocation":"default","type":"uint256","value":null,"visibility":"internal"},"children":[{"attributes":{"name":"uint","type":"uint256"},"id":41,"name":"ElementaryTypeName","src":"126:4:1"}],"id":42,"name":"VariableDeclaration","src":"126:6:1"}],"id":43,"name":"ParameterList","src":"125:8:1"},{"attributes":{"parameters":[null]},"children":[],"id":44,"name":"ParameterList","src":"141:0:1"},{"children":[{"children":[{"attributes":{"argumentTypes":null,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"operator":"=","type":"uint256"},"children":[{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":40,"type":"uint256","value":"storedData"},"id":45,"name":"Identifier","src":"147:10:1"},{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":42,"type":"uint256","value":"x"},"id":46,"name":"Identifier","src":"160:1:1"}],"id":47,"name":"Assignment","src":"147:14:1"}],"id":48,"name":"ExpressionStatement","src":"147:14:1"}],"id":49,"name":"Block","src":"141:25:1"}],"id":50,"name":"FunctionDefinition","src":"113:53:1"},{"attributes":{"documentation":null,"implemented":true,"isConstructor":false,"kind":"function","modifiers":[null],"name":"get","scope":59,"stateMutability":"view","superFunction":null,"visibility":"public"},"children":[{"attributes":{"parameters":[null]},"children":[],"id":51,"name":"ParameterList","src":"182:2:1"},{"children":[{"attributes":{"constant":false,"name":"","scope":58,"stateVariable":false,"storageLocation":"default","type":"uint256","value":null,"visibility":"internal"},"children":[{"attributes":{"name":"uint","type":"uint256"},"id":52,"name":"ElementaryTypeName","src":"206:4:1"}],"id":53,"name":"VariableDeclaration","src":"206:4:1"}],"id":54,"name":"ParameterList","src":"205:6:1"},{"children":[{"attributes":{"functionReturnParameters":54},"children":[{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":40,"type":"uint256","value":"storedData"},"id":55,"name":"Identifier","src":"225:10:1"}],"id":56,"name":"Return","src":"218:17:1"}],"id":57,"name":"Block","src":"212:28:1"}],"id":58,"name":"FunctionDefinition","src":"170:70:1"}],"id":59,"name":"ContractDefinition","src":"66:176:1"}],"id":60,"name":"SourceUnit","src":"32:211:1"},"compiler":{"name":"solc","version":"0.5.16+commit.9c3226ce.Emscripten.clang"},"networks":{"5777":{"events":{},"links":{},"address":"0xD322d0e4d67CB32c99E6C3F1E2CfFE8E49D64eF9","transactionHash":"0xe674fc575c480f2c387ef13734d0ff4f3973a2ff1942782b22ee6c90e084cef4"}},"schemaVersion":"3.4.3","updatedAt":"2021-11-08T15:24:43.429Z","networkType":"ethereum","devdoc":{"methods":{}},"userdoc":{"methods":{}}}')},336:function(e,t,a){},337:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),l=a(50),i=a.n(l),c=(a(64),a(5)),s=a.n(c),o=a(18),u=a(51),d=a(52),m=a(57),p=a(53),b=a(58),f=a(32),y=a(23),h=a.n(y),v=function(){return new Promise((function(e,t){window.addEventListener("load",Object(o.a)(s.a.mark((function a(){var n,r,l,i;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!window.ethereum){a.next=13;break}return n=new h.a(window.ethereum),a.prev=2,a.next=5,window.ethereum.enable();case 5:e(n),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(2),t(a.t0);case 11:a.next=14;break;case 13:window.web3?(r=window.web3,console.log("Injected web3 detected."),e(r)):(l=new h.a.providers.HttpProvider("http://127.0.0.1:8545"),i=new h.a(l),console.log("No web3 instance injected, using Local web3."),e(i));case 14:case"end":return a.stop()}}),a,null,[[2,8]])}))))}))},g=a(54),E=a.n(g),w=a(55),x=a.n(w),k=a(56),T=function(){var e=Object(n.useState)(!1),t=Object(k.a)(e,2),a=t[0],l=t[1],i=function(){window.scrollY>.7*window.innerHeight?l(!0):l(!1)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",i),function(){return window.removeEventListener("scroll",i)}}),[]),r.a.createElement("div",null,r.a.createElement("nav",{className:a?"navbar navbar-expand-lg fixed-top navbar-dark navbar-effect-in":"navbar navbar-expand-lg fixed-top navbar-dark navbar-effect-out"},r.a.createElement("div",{class:"container-fluid"},r.a.createElement("a",{class:"navbar-brand",href:"#"},r.a.createElement("img",{src:"".concat("https://pollyreal1.github.io/prestruct/","/construct.png"),width:"75",height:"75",alt:""}),r.a.createElement("b",null,"Prestruct")),r.a.createElement("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{class:"navbar-toggler-icon"})),r.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},r.a.createElement("div",{class:"navbar-nav ms-auto"},r.a.createElement("a",{class:"nav-link",href:"#"},r.a.createElement("b",null,"Developers")),r.a.createElement("a",{class:"nav-link",href:"#"},r.a.createElement("b",null,"Individuals")),r.a.createElement("a",{class:"nav-link",href:"#"},r.a.createElement("b",null,"News")))))))},S=function(){var e="https://pollyreal1.github.io/prestruct/";return r.a.createElement("div",null,r.a.createElement(E.a,{id:"tsparticles",options:{fpsLimit:75,background:{color:"#000000",repeat:"no-repeat",size:"cover"},backgroundMode:{enable:!0},particles:{number:{value:60,density:{enable:!0,value_area:1e3}},color:{value:["#6C3BF4","#4F70F5","#31A8F7"]},links:{color:"#F226E6",enable:!0,distance:150,opacity:.5,width:2},move:{enable:!0,speed:1},size:{value:5,random:{enable:!0,minimumValue:1},animation:{enable:!0,speed:2.5,minimumValue:1}},opacity:{value:.8,random:{enable:!0,minimumValue:.4}}}}}),r.a.createElement(T,null),r.a.createElement("div",{class:"position-relative container text-light"},r.a.createElement("div",{class:"header-construct"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-lg-6 col-md-12 col-sm-12"},r.a.createElement("h1",null,"It Begins With\xa0",r.a.createElement(x.a,{text:["Decentralization","People","Blockchain","Network"],cursorRenderer:function(e){return r.a.createElement("h1",null,e)},displayTextRenderer:function(e,t){return r.a.createElement(r.a.Fragment,null,e.split("").map((function(e,t){var a="".concat(t);return r.a.createElement("span",{key:a,style:{color:"#3ee1ec"}},e)})))}})),r.a.createElement("h5",{class:"text-muted"},r.a.createElement("span",{style:{color:"#31A8F7"}},"Prestruct")," is a network for building the most effecient blockchain apps for individuals and aspiring developers."),r.a.createElement("div",{class:"d-flex mt-4"},r.a.createElement("button",{class:"btn btn-primary me-4"},"Learn about Prestruct"),r.a.createElement("button",{class:"btn btn-primary"},"Build on Struct")))))),r.a.createElement("div",{class:"below-header"},r.a.createElement("div",{class:"container-fluid"},r.a.createElement("div",{class:"padding-top-100"},r.a.createElement("div",{class:"text-light text-center"},r.a.createElement("h1",null,"The Prestruct Network")),r.a.createElement("div",{class:"text-light text-center mt-4"},r.a.createElement("h5",null," With ",r.a.createElement("b",{class:"text-themecolor-1"},"Prestruct"),", transaction for your dapps are much faster, efficient and scalable."))),r.a.createElement("div",{class:"padding-top-100"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-md-3 mx-auto mb-3"},r.a.createElement("div",{class:"box-card box-bg-1"},r.a.createElement("h4",null,"Finance Decentralized"),r.a.createElement("p",null,"You as an individuals or an organization have the power to make finance decentralized. Traditional finance has always been there but since the utilization of blockhain and cryptocurrency on the modern era, Decentralized finance has been dominating the world escaping from the shackles that define our world and breaking through the economy in a much more efficient way."))),r.a.createElement("div",{class:"col-md-3 mx-auto mb-3"},r.a.createElement("div",{class:"box-card box-bg-2"},r.a.createElement("h4",null,"Cryptocurrency usable in the real world"),r.a.createElement("p",null,"Some are still relucntant on Cryptocurrency usable in the real world. That is why we are developing the platform to make Cryptocurrency usable in the real world by providing apps and gateway to open the blockchain economy to the real world."))),r.a.createElement("div",{class:"col-md-3 mx-auto mb-3"},r.a.createElement("div",{class:"box-card box-bg-3"},r.a.createElement("h4",null,"The future of development"),r.a.createElement("p",{class:"text-justify"},"Integrating the use case of Web3.0 we are now on the era of blockchains and cryptography this will be start of future innovations and technology that builds the foundation of the next era. With Prestruct you can deploy your own smart contracts and dapps with less cost than other networks."))))))),r.a.createElement("div",{class:"below-header-2"},r.a.createElement("div",{class:"container text-light"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-md-6 mb-4 text-center text-md-start mb-auto mt-auto"},r.a.createElement("h1",null,"People holds the power"),r.a.createElement("h5",null,"Prestruct runs on ",r.a.createElement("span",{class:"text-themecolor-1"},"Proof-of-Stake")," algorithm."),r.a.createElement("p",null,"While Bitcoin and Ethereum uses Proof-of-Work algorithm. Prestruct uses proof-of-stake for energy efficiency and to make people hold the governance over the network."),r.a.createElement("button",{class:"btn btn-primary"},"Be a validator")),r.a.createElement("div",{class:"col-md-5 ms-auto"},r.a.createElement("img",{src:"".concat(e,"/tech-svg/img-8.svg"),width:"100%"})))),r.a.createElement("div",{class:"container text-light padding-top-100"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-md-5 me-auto"},r.a.createElement("img",{src:"".concat(e,"/tech-svg/img-2.svg"),width:"100%"})),r.a.createElement("div",{class:"col-md-6 mb-4 text-center text-md-end mt-auto mb-auto"},r.a.createElement("h1",null,"Never changing gas fees"),r.a.createElement("h5",null,"Prestruct gas fees are ",r.a.createElement("span",{class:"text-themecolor-1"},"constant"),"."),r.a.createElement("p",null,"With Prestruct gas fees are changeless, this means that even on longer blocks gas fees cost is fixed and unchangeable."))))),r.a.createElement("div",{class:"below-header-3"},r.a.createElement("div",{class:"container text-light padding-top-100"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-md-4 mb-4 text-center text-md-start"},r.a.createElement("h1",null,"Stake on STRUCT"),r.a.createElement("p",null,"You can earn rewards by staking your ",r.a.createElement("span",{class:"text-themecolor-1"},"STRUCT")," for a period of time. Choose how you lock and stake, you can stake for only one time or divide your stakes and lock for different period of time. How you stake depends on you."),r.a.createElement("button",{class:"btn btn-primary"},"Stake your STRUCT")),r.a.createElement("div",{class:"col-md-4 ms-auto"},r.a.createElement("div",{class:"box-card-sp box-bg-2"},r.a.createElement("h3",{class:"text-center"},"Estimate your rewards"),r.a.createElement("label",{for:"structStake",class:"form-label"},"Stake ",r.a.createElement("span",{class:"text-themecolor-1"},"100 STRUCT")),r.a.createElement("input",{type:"range",class:"form-range",id:"structStake"}),r.a.createElement("label",{for:"structLock",class:"form-label"},"Lock for ",r.a.createElement("span",{class:"text-themecolor-2"},"30 Days")),r.a.createElement("input",{type:"range",class:"form-range",id:"structLock"}),r.a.createElement("hr",null),r.a.createElement("div",{class:"d-flex"},r.a.createElement("div",{class:""},"Your rewards",r.a.createElement("br",null),r.a.createElement("h5",{class:"text-themecolor-1"},"5000 STRUCT")),r.a.createElement("div",{class:"ms-auto"},"Current APR",r.a.createElement("h5",{class:"text-themecolor-1"},"13%"))))))),r.a.createElement("div",{class:"container text-light padding-top-200 padding-bottom-200"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-md-4 me-auto mb-5"},r.a.createElement("div",{class:"box-card-sp-2 box-bg-1"},r.a.createElement("h3",{class:"text-center"},"Build and Deploy"))),r.a.createElement("div",{class:"col-md-4 mb-4 text-center text-md-start"},r.a.createElement("h1",null,"Build on Prestruct"),r.a.createElement("p",null,"Prestruct is built based on etherum. You can easily code using solidity and deploy your own dapps and smart contracts on Prestruct network."),r.a.createElement("button",{class:"btn btn-primary"},"See our documentation"))))),r.a.createElement("div",{class:"footer"},r.a.createElement("div",{class:"container text-center"},r.a.createElement("h6",null,r.a.createElement("a",{href:"http://paulreal.com",target:"_blank",class:"footer-link"},"Paul Real")," @ ",(new Date).getFullYear()))))},D=(a(336),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={storageValue:0,web3:null,accounts:null,contract:null},a.componentDidMount=Object(o.a)(s.a.mark((function e(){var t,n,r,l,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v();case 3:return t=e.sent,e.next=6,t.eth.getAccounts();case 6:return n=e.sent,e.next=9,t.eth.net.getId();case 9:r=e.sent,l=f.networks[r],i=new t.eth.Contract(f.abi,l&&l.address),a.setState({web3:t,accounts:n,contract:i},a.runExample),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])}))),a.runExample=Object(o.a)(s.a.mark((function e(){var t,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state,t.accounts,n=t.contract,e.next=3,n.methods.get().call();case 3:r=e.sent,a.setState({storageValue:r});case 5:case"end":return e.stop()}}),e)}))),a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return this.state.web3?r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Good to Go!"),r.a.createElement("p",null,"Your Truffle Box is installed and ready."),r.a.createElement("h2",null,"Smart Contract Example"),r.a.createElement("p",null,"If your contracts compiled and migrated successfully, below will show a stored value of 5 (by default)."),r.a.createElement("p",null,"Try changing the value stored on ",r.a.createElement("strong",null,"line 42")," of App.js."),r.a.createElement("div",null,"The stored value is: ",this.state.storageValue)):r.a.createElement(S,null)}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},59:function(e,t,a){e.exports=a(337)},64:function(e,t,a){}},[[59,1,2]]]);
//# sourceMappingURL=main.bcbd5431.chunk.js.map
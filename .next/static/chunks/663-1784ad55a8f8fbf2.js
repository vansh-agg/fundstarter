(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[663],{2469:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var a=n(5893),s=(n(7294),n(3272)),i=n(5712),u=(n(3014),n(6215)),p=n(9008),r=n.n(p);function o(t){return(0,a.jsxs)("div",{children:[(0,a.jsx)(r(),{children:(0,a.jsx)("title",{children:"FUNDSTARTER"})}),(0,a.jsxs)(s.Z,{fixed:!0,stackable:!0,inverted:!0,borderless:!0,size:"massive",style:{marginBottom:"60px"},children:[(0,a.jsx)(u.Link,{route:"/",children:(0,a.jsx)("a",{className:"item",children:"FUNDSTARTER"})}),(0,a.jsxs)(s.Z.Menu,{position:"right",children:[(0,a.jsx)(u.Link,{route:"/",children:(0,a.jsx)("a",{className:"item",children:"Campaigns"})}),(0,a.jsx)(u.Link,{route:"/campaigns/new",children:(0,a.jsx)("a",{className:"item",children:"Add Campaign"})})]})]}),(0,a.jsx)(i.Z,{children:t.children})]})}},4148:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var a=n(1508),s=JSON.parse('{"w3":"[{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"approvercount\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"getsummary\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"},{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"},{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"},{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"},{\\"name\\":\\"\\",\\"type\\":\\"address\\"},{\\"name\\":\\"\\",\\"type\\":\\"string\\"},{\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"name\\":\\"approvers\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"name\\":\\"ind\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"finalizerequest\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"manager\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"title\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"details\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"requests\\",\\"outputs\\":[{\\"name\\":\\"description\\",\\"type\\":\\"string\\"},{\\"name\\":\\"value\\",\\"type\\":\\"uint256\\"},{\\"name\\":\\"recipient\\",\\"type\\":\\"address\\"},{\\"name\\":\\"complete\\",\\"type\\":\\"bool\\"},{\\"name\\":\\"approvalcount\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"getrequestcount\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[],\\"name\\":\\"contribute\\",\\"outputs\\":[],\\"payable\\":true,\\"stateMutability\\":\\"payable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"minimum_contribution\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"name\\":\\"ind\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"approverequest\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"name\\":\\"description\\",\\"type\\":\\"string\\"},{\\"name\\":\\"value\\",\\"type\\":\\"uint256\\"},{\\"name\\":\\"recipient\\",\\"type\\":\\"address\\"}],\\"name\\":\\"createrequest\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"name\\":\\"minimum\\",\\"type\\":\\"uint256\\"},{\\"name\\":\\"creator\\",\\"type\\":\\"address\\"},{\\"name\\":\\"title_\\",\\"type\\":\\"string\\"},{\\"name\\":\\"details_\\",\\"type\\":\\"string\\"}],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"constructor\\"}]"}');function i(t){return new a.Z.eth.Contract(JSON.parse(s.w3),t)}},1508:function(t,e,n){"use strict";var a,s=n(7918),i=n.n(s);if(n(9738).config(),"undefined"!==typeof window.ethereum)window.ethereum.request({method:"eth_requestAccounts"}),a=new(i())(window.ethereum);else{var u=new(i().providers.HttpProvider)("https://eth-sepolia.g.alchemy.com/v2/XEswdGg1Vw46wb7Ft4VvQbDQv1nboYis");a=new(i())(u)}e.Z=a},6215:function(t,e,n){"use strict";var a=n(7018)();a.add("/campaigns/new","/campaigns/new").add("/campaigns/:address","/campaigns/show").add("/campaigns/:address/requests","/campaigns/requests/index").add("/campaigns/:address/requests/new","/campaigns/requests/new"),t.exports=a},6647:function(){}}]);
// Initial welcome page. Delete the following line to remove it.
'use strict';const styles=document.createElement('style');styles.innerText=`@import url(https://unpkg.com/spectre.css/dist/spectre.min.css);.empty{display:flex;flex-direction:column;justify-content:center;height:100vh;position:relative}.footer{bottom:0;font-size:13px;left:50%;opacity:.9;position:absolute;transform:translateX(-50%);width:100%}`;const vueScript=document.createElement('script');vueScript.setAttribute('type','text/javascript'),vueScript.setAttribute('src','https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js'),vueScript.onload=init,document.head.appendChild(vueScript),document.head.appendChild(styles);function init(){console.log(Vue);new Vue({
    data: () => ({ message: 'Row' }),
    template: `
    <div>
      <h1>{{message}} your boat</h1>
      <button v-on:click="message += ' row'">Add</button>
    </div>
    `
  }).$mount('#app');}

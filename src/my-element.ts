import { LitElement, css, html } from 'lit'
import { customElement,} from 'lit/decorators.js'


 


@customElement('populis-form')
export class PopulisForm extends LitElement {
  

  
  private loading:boolean = false;

  private _handleSubmit(event: MouseEvent) {
    event.preventDefault()
    const passwordInput = this.shadowRoot!.querySelector<HTMLInputElement>('#password')!
    const emailInput = this.shadowRoot!.querySelector<HTMLInputElement>('#email')!
    const errorSpan=this.shadowRoot!.querySelector('#error') as HTMLElement
    const password = passwordInput.value;
    const email = emailInput.value;

this.loading=true
console.log(this.loading)
    setTimeout(() => {
      this.loading = false;
      console.log(this.loading)
    }, 3000);
    if(email!=='root' || password!=='root123'){

    errorSpan.innerHTML='Algo deu errado'
}
else{

 
  errorSpan.innerHTML=''
}    
    console.log(`Password: ${password}, Email: ${email}`)
  }

  render() {
    return html`
    <form>

${this.loading ?  html`<div id="overlay"><div id="loader"></div></div>`:html`<div class="desc">
<h3>Óla</h3>
<p>Bem vindo</p>
</div>
<div class="form-inputs">
<label>Email</label>
<input type="email" id="email" name="email" placeholder="User email"/>
<label>Password</label>
<input type="password" id="password" name="password" placeholder="Your password"/>
</div>
<span id='error'></span>
<button @click=${this._handleSubmit}>Login</button>`}
    </form>
    `
  }


  static styles = css`
*{
  margin:0;
  padding:0;
  
}
form{
  width:15rem;
height:20rem;
background-color:#f1f1f1;
border-radius:10px;
display:flex;
align-items:center;
flex-direction:column;
gap:1rem;
shadow-box:2px 4px 2px #000 2px 2px;

}
.desc{
text-align:left;
width:13rem;
margin-top:1rem;
}
    
h3{
  font-size:35px;
  font-weight:350;
  color:#112;
}
p{font-weight:bold;
font-size:23px;
}
.form-inputs{
display:flex;
flex-direction:column;
}
label{
  font-size:21px;
  font-weight:lighter;
  color:#112;
 
}
input{
  padding:2px;
  border:solid 1px #112;
  border-radius:8px;
  height:25px;
  width:150px;
}
 form button{
  border:none;
width:150px;
height:30px;
border-radius:8px;
color:#f1f1f1;
font-weight:700;
background-color:#0040A7;
cursor:pointer;
}

#error{
  font-size:13px;
  color:#F50D00;
}
#overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  
}

#loader {
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

  `
}

declare global {
  interface HTMLElementTagNameMap {
    'populis-form': PopulisForm
  }
}

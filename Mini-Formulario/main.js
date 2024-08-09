const nameImput = document.querySelector('#name');	
const emailImput = document.querySelector('#email');
const subjectImput = document.querySelector('#subject');
const feedbackImput = document.querySelector('#feedback');
const buttonSubmit = document.querySelector('#button');

const errorMessagem = document.querySelector(".msg");
const text = document.querySelector(".text");

buttonSubmit.addEventListener("click", (e)  => {
    e.preventDefault();	

    const name = nameImput.value;
    const email = emailImput.value;
    const subject = subjectImput.value;
    const feedback = feedbackImput.value;

    if (name ==="" || email ===""|| subject ==="" || feedback ===""){
        errorMessagem.textContent = "Por favor preencha os campos abaixo"; 
        errorMessagem.classList="error";
        

        setTimeout(() => {
            errorMessagem.textContent = ""
            errorMessagem.classList.remove("error");
        },3000);
        return;
    }

    const li = document.createElement ("li");
    li.textContent = `Nome:${name}, Email:${email}, Assunto:${subject}, Mensagem: ${feedback}`;
    
    text.appendChild(li);

    nameImput.value = "";
    emailImput.value = "";
    subjectImput.value = "";
    feedbackImput.value = "";
    
    errorMessagem.textContent = "Mensagem enviada com sucesso!";

});
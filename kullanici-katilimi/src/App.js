import React, {useState,useEffect} from 'react';
import './App.css';
import Form from './Components/Form';
import * as Yup from 'yup';
import Error from './Components/Error';
import axios from 'axios';


let formSchema = Yup.object().shape({
  name: Yup
  .string()
  .min(3,"dayı en az 3 karakter lazım.")
  .required("İsimsiz kahraman !!!"),

  email: Yup
  .string()
  .email("kontrol ediyorum düzgün yaz...")
  .required("paramı nasıl alacağım ??"),

  password: Yup
  .number(" rakamlar tercihimdir")
  .min(5,"lütfen 12345 veya 54321 veya 01234 yapma...")
  .positive("eksi uçlarda gezmeyelimmm")
  .required("bi zahmet..."),

  checkbox:Yup
  .boolean(false)
  .oneOf([false],"Haciz için buraya bir tıklaman lazım...")
});


const zeroForm={name:"",email:"",password:"",checkbox:false};
const zeroError={name:"",email:"",password:"",checkbox:""};

function App() {

  const[form,setForm]  = useState(zeroForm);
  const[errors,setErrors] = useState(zeroError);
  const[submitDisable,setSubmitDisable] = useState(false);
  const[regMember,setRegMember] = useState(zeroForm);
  
  const handleSubmit = (e) => {

    e.preventDefault();
    
    axios
    .post("https://reqres.in/api/users",form)
    .then(res => setRegMember(res.data))
    .catch(err=>console.log(err))
  };
  const handleChange = (e) => {
    const {value,name,checked,type}=e.target;
    let newValue =value;
    checkForm(name,newValue);
    if(type==="checkbox") newValue=!checked;
    setForm({...form,[name]:newValue});
  };

  const checkForm = (name, value) => {
    Yup.reach(formSchema, name)
    .validate(value)
    .then(()=> setErrors({...errors,[name]:""}))
    .catch((err)=>setErrors({...errors,[name]:err.errors[0]}))
  };

  useEffect(() => {
    formSchema.isValid(form)
    .then((res)  => setSubmitDisable(!res));
  },[form]);

  return (
    <div className="App">
      <Form handleSubmit={handleSubmit} handleChange={handleChange} member={form} submitDisable={submitDisable} />
      <Error errors = {errors}/>

      {regMember.name !== "" && (
        <p>
          {regMember.id} id'li kıymetli {regMember.name} kayıt edilmiştir.
        </p>
      )}

    </div>
  );
}

export default App;

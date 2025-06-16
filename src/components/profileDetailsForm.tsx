// const ProfileDetailsForm = () => {
//     const [enteredEmail, setEnteredEmail] = useState<string>('');
//   const [enteredPassword, setEnteredPassword] = useState<string>('');
//   const [emailError, setEmailError] = useState<string>('');
//   const [passwordError, setPasswordError] = useState<string>('');

//   const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setEnteredEmail(event.target.value);
//   }
//   const passwordChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setEnteredPassword(event.target.value);
//   }
//   const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     let isValid = true;

//     if(enteredEmail.trim() === '') {
//       setEmailError("Can't be empty");
//       isValid = false;    
//     }
//     if(enteredPassword.trim() === ''){
//       setPasswordError('Please check again');
//       isValid = false;    
//     } 
//     if(!isValid) return; 
    
//     setEnteredEmail(''); 
//     setEnteredPassword(''); 
//     window.location.href = '/homePage';
//   };
//     return (
//         <div></div>
//     )
// };

// export default ProfileDetailsForm;
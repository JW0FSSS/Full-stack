export function Register() {
    const [error,setError]=useState({username:'',email:'',age:0,password:'',image:'',error:''})
    const handleRegister=(e)=>{

       e.preventDefault()

       const user={
       username:e.target.username.value,
       email:e.target.email.value,
       age:e.target.age.value,
       password:e.target.password.value,
       image:''
       }

       register({user}).then(data=>setError({...error,...data.user}))
   }
    
    return(
        <section className="flex flex-col items-center h-screen gap-20  bg-slate-300">
            <div className="mt-60 flex flex-col items-center bg-white py-10 px-20 rounded-lg shadow-2xl">
                <h1 className="text-4xl flex gap-2" ><Anchor/> Marinel</h1>
                {error.error?<p className="p-1 mt-4 bg-red-500 rounded-md" >{error.error}</p>:''}
                <form onSubmit={handleRegister} className="flex flex-col max-w-lg gap-5 p-10">
                    <input className="py-2 px-5 rounded-xl border-2 border-gray-200 focus:outline-none" type="name" placeholder="carloss" required name="username"/>
                    <input className="py-2 px-5 rounded-xl border-2 border-gray-200 focus:outline-none" type="email" placeholder="user@gmail.com" required name="email"/>
                    <input className="py-2 px-5 rounded-xl border-2 border-gray-200 focus:outline-none" type="number" placeholder="12" required name="age" min={1} max={100}/>
                    <input className="py-2 px-5 rounded-xl border-2 border-gray-200 focus:outline-none" type="password" placeholder="******" required name="password"/>
                    <button className="bg-emerald-600 rounded-xl text-white mt-4 py-1 px-2" >Register</button>
                </form>
            </div>
           {error.email && (<Navigate to='/account' replace={true} />)}

        </section>
    )
}
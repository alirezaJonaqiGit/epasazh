import { useForm } from "react-hook-form";

function LoginForm() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        window.location.replace('/')
    };
    return ( 
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <label className='loginform_label'>
                    <input className="loginform_input" type="tel" pattern="^(0098|98|0)?9\d{9}$"  placeholder='تلفن همراه (09*********)'  {...register("exampleRequired", { required: true })} />
                    {errors.exampleRequired && <span className='input_errMsg'>تلفن همراه اجباری است!</span>}
                </label>

                <input type="submit" value="ادامه" className='loginform_submit' />
            </form>
        </>
    );
}

export default LoginForm;
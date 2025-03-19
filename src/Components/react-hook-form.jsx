import { useForm } from "react-hook-form";

export default function ReactHookForm() {
    //zod library-> recommend to use with react hook
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    function onSubmitForm(formData) {
        console.log(formData);

        reset();
    }
    return (
        <>
            <h1>React hook form</h1>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <div>
                    <div>

                        <label style={{ marginRight: '20px' }}>Email</label>
                        <input {...register('email', { required: true })} name="email" type="email"></input>
                        {
                            errors.email && errors.email.type == 'required' ?
                                <p className="error">Email is required</p> : null
                        }
                    </div>
                    <div>

                        <label style={{ marginRight: '20px' }}>Password</label>
                        <input {...register('password', { required: true, minLength: 8 })} name="password" type="password"></input>
                        {
                            errors.password && errors.password.type == 'required' ?
                                <p className="error">Password is required</p> : null
                        }
                        {
                            errors.password && errors.password.type == 'minLength' ?
                                <p className="error">Password is too short</p> : null
                        }
                    </div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </>
    )
}
import React from 'react';
import { useForm } from "react-hook-form";

const AddNewProgram = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {

        fetch('https://grim-shadow-91675.herokuapp.com/program', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("New Tour Added successFully")
                }
            })
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <input className="m-2" defaultValue="Title" {...register("title")} />
            <br />
            <input className="m-2" defaultValue="Picture" {...register("picture")} />
            <br />
            <input className="m-2" defaultValue="Cost" {...register("cost")} />
            <br />
            <input className="m-2" defaultValue="Duration" {...register("duration")} />
            <br />


            <textarea className="w-25" defaultValue="Describe" {...register("description", { required: true })} />

            {errors.exampleRequired && <span>This field is required</span>}
            <br />

            <input type="submit" />
        </form>
    );
};

export default AddNewProgram;
// import React, { useState, useEffect, useRef } from 'react';
import { useForm } from "react-hook-form";

function FormGetMyConversationMember({ onSubmit }) {
    const { register, handleSubmit, errors } = useForm();

    return (
        <div>
            <form name="getConversation" id="getConversation" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="conversation_id">Conversation ID:</label>

                <input
                    type="text"
                    id="conversation_id"
                    name="conversation_id"
                    aria-invalid={errors.conversation_text_id ? "true" : "false"}
                    ref={register({ required: true, maxLength: 40 })}
                />

                {errors.conversation_text_id && errors.conversation_text_id.type === "required" && (
                    <span role="alert">This is required</span>
                )}
                <br />

                <input type="submit" value="Get Conversation" />
            </form>
        </div>
        
    )
}

export default FormGetMyConversationMember
// import React, { useState, useEffect, useRef } from 'react';
import { useForm } from "react-hook-form";

function FormWhatsAppTextConversation({ onSubmit, events }) {
    const { register, handleSubmit, errors } = useForm();

    return (
        <div>
            {/* {events &&
            <div>
            <h2>TEXT for Conversation</h2>
            {events.map((evt, idx) => {
                return (
                    <div key={idx}  >
                        <EventTitle event={evt} style={{ padding: "5px", margin: "5px" }} />
                        <pre style={{ padding: "5px", margin: "5px", backgroundColor: "#ddd" }} >{JSON.stringify(evt, ' ', ' ')}</pre>
                    </div>
                )
            })}
            </div>
            }  */}
            <form name="whatsAppTextConversationText" id="whatsAppTextConversationText" onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    id="conversation_text"
                    name="conversation_text"
                    aria-invalid={errors.conversation_text_id ? "true" : "false"}
                    ref={register({ required: true, maxLength: 40 })}
                />

                {errors.conversation_text && errors.conversation_text.type === "required" && (
                    <span role="alert">This is required</span>
                )}
                <br />

                <input type="submit" value="Send" />
            </form>
        </div>
        
    )
}

const EventTitle = ({ event, style }) => {
    let text = 'unknown'
    if (event.request && event.response) {
        text = '<- http response'
    } else if (event.request && !event.response) {
        text = '-> http request'
    } else if (event.type && event.body) {
        text = '<- ws event'
    }
    return (<h3 style={style} >{text}</h3>)
}

export default FormWhatsAppTextConversation
import React from "react";

export default function ContactRow({ name, phone, email, id }) {
    return (
        <tr key={id}>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
        </tr>
    )
}
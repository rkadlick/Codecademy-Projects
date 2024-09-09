import React from "react";

export const ContactPicker = ({contacts, value, name, onChange}) => {
  return (
    <select name={name} value={value} onChange={onChange} required>
    {/* Default option */}
    <option value="">No Contact Selected</option>
    
    {/* Dynamically render options from contacts */}
    {contacts.map((contact, index) => (
      <option key={index} value={contact.name}>
        {contact.name}
      </option>
    ))}
  </select>
  );
};

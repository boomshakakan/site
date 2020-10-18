import React, { createContext, useState } from 'react';
import uniqid from 'uniqid';

const EmailContextProvider = ({ children }) => {
    const [emails, setEmails] = useState([
        {
            id: 1,
            email: 'stevensonmatt96@gmail.com'
        }
    ]);

    const addEmail = email => {
        setEmails([...emails, { ...email, id: uniqid() }]);
    }

    return (
        <EmailContext.Provider value={{ emails, addEmail}}>
            {children}
        </EmailContext.Provider>
    );
};

export default EmailContextProvider;
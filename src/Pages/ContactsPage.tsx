import type { FC } from "react";
import { ContactsAndMap } from "../components/ContactsAndMap";

export const ContactsPage: FC = () => {
    return (
        <div className="contacts-page">
            <ContactsAndMap />
        </div>
    );
};
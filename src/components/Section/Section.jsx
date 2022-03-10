import React from 'react';
import { SectionTitle } from './Section.styled';

const Section = ({ title, children }) => {
 
    return (
        <section>
            <SectionTitle> {title} </SectionTitle>
            {children}
        </section> 
    )

}

export default Section;
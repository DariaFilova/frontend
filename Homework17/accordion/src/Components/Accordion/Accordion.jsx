import React from 'react';
import AccordionItem from '../AccordionItem/AccordionItem';
import './Accordion.scss';

const info = [
    {
        id: '1',
        breed: 'British Shorthair',
        description: 'The British Shorthair is the pedigreed version of the traditional British domestic cat, with a distinctively stocky body, dense coat,and broad face.'
    },
    {
        id: 2,
        breed: 'Scottish Fold',
        description: 'The Scottish Fold is a breed of domestic cat with a natural dominant gene mutation that affects cartilage throughout the body, causing the ears to "fold", bending forward and down towards the front of the head, which gives the cat what is often described as an "owl-like" appearance.'
    },
    {
        breed: 'Birman',
        description: 'The Birman, also called the "Sacred Cat of Burma", is a domestic cat breed. The Birman is a long-haired, colour-pointed cat distinguished by a silky coat, deep blue eyes, and contrasting white "gloves" on each paw.'
    },
    {
        breed: 'Munchkin cat',
        description: 'The Munchkin, also known as Sausage Cat is a breed of cat characterized by its very short legs, which are caused by genetic mutation. Compared to many other cat breeds, it is a relatively new breed, documented since 1940s and officially recognized in 1991.'
    },


]

const Accordion = () => {
    return (
        <div className='accordion'>
            {
                info.map(item => {
                    return <AccordionItem breed={item.breed} description={item.description} key={item.breed} />
                })
            }
        </div>
    );
};

export default Accordion;
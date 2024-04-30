import React from 'react';
import { Card } from './Card';

/*cards datalist*/
export function CardList() {
    const cardData = [
        {
            title: "student",
            count: 50,
            colors: "success",
            
        },
        {
            title: "class",
            count: 5,
            colors: "warning",
        },
        {
            title: "teachers",
            count: 7,
            colors: "info",

        },
        {
            title: "subject",
            count: "15",
            colors: "primary",
        }
    ];
    return (
        <div className='row'>
            {cardData.map((dt) => <Card data={dt} />)}
        </div>
    );
}